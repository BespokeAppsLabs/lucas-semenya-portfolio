'use client'

import { useEffect, useRef } from 'react'
import type { InstancedMesh, Vector3, Quaternion } from 'three'
import { STACK_MARKS } from '@/lib/stackMarks'

const ACCENT = '#12C98A'
const NODE_COUNT = 460

/* Marks mode needs far fewer, far larger nodes than boxes do — a logo at the
   box scale is unreadable mush, and at a readable scale 460 of them overlap
   into noise. 11 per mark is the most that stays legible. */
const MARK_PER_LOGO = 4

/**
 * The agent swarm as line-work on paper: a bounded shell, a decision core,
 * and N independent nodes pulsing on their own phase.
 *
 * MeshBasicMaterial throughout — no lights, no shadows, no post. Rendering it
 * as pen-plotter output is the single decision that keeps the hero out of the
 * glowing-particle-field trope.
 *
 * `three` is imported dynamically so it stays out of the initial chunk; the
 * page is fully functional if it never arrives.
 */
export default function AgentLattice({ marks = false }: { marks?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let disposed = false
    const cleanups: Array<() => void> = []

    ;(async () => {
      let THREE: typeof import('three')
      try {
        THREE = await import('three')
      } catch (err) {
        console.warn('three load failed', err)
        return
      }
      if (disposed) return

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
      camera.position.set(0, 0, 7.2)

      const group = new THREE.Group()
      scene.add(group)

      const shell = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.55, 3)),
        new THREE.LineBasicMaterial({ color: 0x14120e, transparent: true, opacity: 0.1 }),
      )
      group.add(shell)

      const core = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.15, 1)),
        new THREE.LineBasicMaterial({
          color: new THREE.Color(ACCENT),
          transparent: true,
          opacity: 0.55,
        }),
      )
      group.add(core)

      const count = marks ? STACK_MARKS.length * MARK_PER_LOGO : NODE_COUNT

      // One InstancedMesh per logo in marks mode (instancing can't vary
      // geometry or map per instance); a single box mesh otherwise.
      const meshes: InstancedMesh[] = []
      const disposables: Array<{ dispose: () => void }> = []

      if (marks) {
        for (const mark of STACK_MARKS) {
          const c = document.createElement('canvas')
          c.width = c.height = 128
          const ctx = c.getContext('2d')!
          // Marks come from three icon sets on different grids, so fit each
          // viewBox into the square uniformly and centre it rather than
          // assuming 24x24 — otherwise the 512-grid marks render as specks.
          const [vx, vy, vw, vh] = mark.viewBox.split(/\s+/).map(Number)
          const k = 128 / Math.max(vw, vh)
          ctx.translate((128 - vw * k) / 2, (128 - vh * k) / 2)
          ctx.scale(k, k)
          ctx.translate(-vx, -vy)
          ctx.fillStyle = '#fff'
          ctx.fill(new Path2D(mark.path))

          const tex = new THREE.CanvasTexture(c)
          tex.colorSpace = THREE.SRGBColorSpace
          const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            depthWrite: false,
          })
          const mesh = new THREE.InstancedMesh(
            new THREE.PlaneGeometry(1, 1),
            mat,
            MARK_PER_LOGO,
          )
          meshes.push(mesh)
          disposables.push(tex, mat, mesh.geometry)
          group.add(mesh)
        }
      } else {
        const mesh = new THREE.InstancedMesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial(),
          NODE_COUNT,
        )
        meshes.push(mesh)
        disposables.push(mesh.geometry, mesh.material)
        group.add(mesh)
      }

      const m = new THREE.Matrix4()
      const q = new THREE.Quaternion()
      const pos = new THREE.Vector3()
      const scl = new THREE.Vector3()
      const dark = new THREE.Color(0x14120e)
      const hot = new THREE.Color(ACCENT)

      // mesh + slot within that mesh, so both modes share one seed loop
      const seeds: Array<{
        base: Vector3
        q: Quaternion
        s: number
        off: number
        mesh: InstancedMesh
        slot: number
      }> = []

      for (let i = 0; i < count; i++) {
        // Fibonacci sphere — even spacing, no clustering at the poles.
        const t = (i + 0.5) / count
        const phi = Math.acos(1 - 2 * t)
        const theta = Math.PI * (1 + Math.sqrt(5)) * i
        const r = 2.15 + (i % 7) * 0.13
        pos.set(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        )
        const s = marks ? 0.2 + (i % 5) * 0.035 : 0.018 + (i % 5) * 0.012
        scl.set(s, s, s)
        q.setFromEuler(new THREE.Euler(theta, phi, 0))
        m.compose(pos, q, scl)

        const mesh = marks ? meshes[i % meshes.length] : meshes[0]
        const slot = marks ? Math.floor(i / meshes.length) : i
        mesh.setMatrixAt(slot, m)
        mesh.setColorAt(slot, i % 11 === 0 ? hot : dark)

        seeds.push({
          base: pos.clone(),
          q: q.clone(),
          s,
          off: Math.random() * Math.PI * 2,
          mesh,
          slot,
        })
      }

      for (const mesh of meshes) {
        mesh.instanceMatrix.needsUpdate = true
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
      }

      const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
      const onPointer = (e: PointerEvent) => {
        mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2
        mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('pointermove', onPointer, { passive: true })
      cleanups.push(() => window.removeEventListener('pointermove', onPointer))

      const onResize = () => {
        const w = canvas.clientWidth || window.innerWidth
        const h = canvas.clientHeight || window.innerHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', onResize)
      cleanups.push(() => window.removeEventListener('resize', onResize))
      onResize()
      const settle = setTimeout(onResize, 300)
      cleanups.push(() => clearTimeout(settle))

      const clock = new THREE.Clock()
      const billboard = new THREE.Quaternion()
      let raf = 0
      const tick = () => {
        raf = requestAnimationFrame(tick)
        const t = clock.getElapsedTime()

        // Heavy damping — the lattice follows the cursor with weight.
        mouse.x += (mouse.tx - mouse.x) * 0.045
        mouse.y += (mouse.ty - mouse.y) * 0.045

        group.rotation.y = t * 0.09 + mouse.x * 0.5
        group.rotation.x = Math.sin(t * 0.16) * 0.12 + mouse.y * 0.3

        const sy = window.scrollY / (window.innerHeight || 1)
        group.position.y = sy * 1.6
        group.scale.setScalar(1 - Math.min(sy, 1) * 0.18)

        core.rotation.y = -t * 0.35
        core.rotation.z = t * 0.2

        // Marks have to face the camera or half of them are edge-on and
        // mirrored. Cancel the group's own rotation, then adopt the camera's.
        if (marks) {
          group.getWorldQuaternion(billboard).invert().multiply(camera.quaternion)
        }

        for (let i = 0; i < seeds.length; i++) {
          const sd = seeds[i]
          // Gentler pulse for marks — a logo throbbing ±45% reads as a glitch.
          const amp = marks ? 0.14 : 0.45
          const pulse = 1 + Math.sin(t * 1.5 + sd.off) * amp
          scl.set(sd.s * pulse, sd.s * pulse, sd.s * pulse)
          pos.copy(sd.base).multiplyScalar(1 + Math.sin(t * 0.7 + sd.off) * 0.022)
          m.compose(pos, marks ? billboard : sd.q, scl)
          sd.mesh.setMatrixAt(sd.slot, m)
        }
        for (const mesh of meshes) mesh.instanceMatrix.needsUpdate = true

        renderer.render(scene, camera)
      }
      tick()

      cleanups.push(() => {
        cancelAnimationFrame(raf)
        disposables.forEach((d) => d.dispose())
        shell.geometry.dispose()
        shell.material.dispose()
        core.geometry.dispose()
        core.material.dispose()
        renderer.dispose()
      })
    })()

    return () => {
      disposed = true
      cleanups.forEach((fn) => fn())
    }
  }, [marks])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  )
}
