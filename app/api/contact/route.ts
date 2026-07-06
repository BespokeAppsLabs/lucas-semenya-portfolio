import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

// ponytail: in-memory per-IP throttle; swap for Upstash/KV if abuse outgrows it
const hits = new Map<string, { count: number; reset: number }>()
const LIMIT = 5
const WINDOW_MS = 60 * 60 * 1000

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count++
  return entry.count > LIMIT
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim().slice(0, 200)
    const email = String(body.email ?? '').trim().slice(0, 320)
    const subject = String(body.subject ?? '').trim().slice(0, 300)
    const message = String(body.message ?? '').trim().slice(0, 5000)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Lucas Semenya <noreply@lucassemenya.co.za>',
      to: 'lucas@bespokeapps.co.za',
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#F5F3ED;color:#171512;border-radius:12px;">
          <h2 style="color:#0A5F52;margin:0 0 8px;">New message from your portfolio</h2>
          <p style="color:#6D6963;font-size:13px;margin:0 0 32px;">Submitted via lucassemenya.co.za</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#6D6963;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:80px;">Name</td><td style="padding:8px 0;color:#171512;">${safe.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6D6963;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;"><a href="mailto:${safe.email}" style="color:#0A5F52;">${safe.email}</a></td></tr>
            ${subject ? `<tr><td style="padding:8px 0;color:#6D6963;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Subject</td><td style="padding:8px 0;color:#171512;">${safe.subject}</td></tr>` : ''}
          </table>

          <div style="background:#EDEBE3;border:1px solid rgba(23,21,18,0.12);border-radius:8px;padding:20px;">
            <p style="color:#6D6963;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Message</p>
            <p style="color:#171512;line-height:1.7;margin:0;white-space:pre-wrap;">${safe.message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
