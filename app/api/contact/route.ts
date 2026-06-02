import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Lucas Semenya <noreply@lucassemenya.co.za>',
      to: 'lucas@bespokeapps.co.za',
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#020208;color:#f0f0f8;border-radius:12px;">
          <h2 style="color:#00FFD1;margin:0 0 8px;">New message from your portfolio</h2>
          <p style="color:#8888aa;font-size:13px;margin:0 0 32px;">Submitted via lucassemenya.co.za</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#8888aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:80px;">Name</td><td style="padding:8px 0;color:#f0f0f8;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#8888aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#00FFD1;">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding:8px 0;color:#8888aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Subject</td><td style="padding:8px 0;color:#f0f0f8;">${subject}</td></tr>` : ''}
          </table>

          <div style="background:#0d0d1a;border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:20px;">
            <p style="color:#8888aa;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Message</p>
            <p style="color:#f0f0f8;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
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
