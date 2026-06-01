'use client'

import { useRef, useMemo, useEffect, MutableRefObject } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const PARTICLE_COUNT = 180
const CONNECTION_THRESHOLD = 2.2
const BOUNDS = 10

function Network({ mouseRef }: { mouseRef: MutableRefObject<{ x: number; y: number }> }) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const { camera } = useThree()

  const { positions, velocities, lineBuffer } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    const maxLines = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2
    const lineBuffer = new Float32Array(maxLines * 6)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = Math.random() * BOUNDS * 0.9 + BOUNDS * 0.1
      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.4
      velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004
    }
    return { positions, velocities, lineBuffer }
  }, [])

  useEffect(() => {
    if (!pointsRef.current || !linesRef.current) return

    const pointGeo = new THREE.BufferGeometry()
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsRef.current.geometry = pointGeo

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(lineBuffer, 3))
    lineGeo.setDrawRange(0, 0)
    linesRef.current.geometry = lineGeo
  }, [positions, lineBuffer])

  useFrame((_, delta) => {
    if (!pointsRef.current?.geometry || !linesRef.current?.geometry) return
    if (!pointsRef.current.geometry.attributes.position) return

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array

    // Move particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 0] += velocities[i * 3 + 0]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]

      if (Math.abs(pos[i * 3 + 0]) > BOUNDS) velocities[i * 3 + 0] *= -1
      if (Math.abs(pos[i * 3 + 1]) > BOUNDS) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > BOUNDS * 0.4) velocities[i * 3 + 2] *= -1
    }

    // Compute connections
    let lineCount = 0
    const maxLines = lineBuffer.length / 6

    for (let i = 0; i < PARTICLE_COUNT && lineCount < maxLines; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && lineCount < maxLines; j++) {
        const dx = pos[i * 3 + 0] - pos[j * 3 + 0]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const distSq = dx * dx + dy * dy + dz * dz
        if (distSq < CONNECTION_THRESHOLD * CONNECTION_THRESHOLD) {
          const base = lineCount * 6
          lineBuffer[base + 0] = pos[i * 3 + 0]
          lineBuffer[base + 1] = pos[i * 3 + 1]
          lineBuffer[base + 2] = pos[i * 3 + 2]
          lineBuffer[base + 3] = pos[j * 3 + 0]
          lineBuffer[base + 4] = pos[j * 3 + 1]
          lineBuffer[base + 5] = pos[j * 3 + 2]
          lineCount++
        }
      }
    }

    linesRef.current.geometry.setDrawRange(0, lineCount * 2)
    ;(linesRef.current.geometry.attributes.position.array as Float32Array).set(lineBuffer)
    linesRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Smooth camera drift based on mouse
    const cam = camera as THREE.PerspectiveCamera
    cam.position.x += (mouseRef.current.x * 3 - cam.position.x) * 0.04 * delta * 60
    cam.position.y += (-mouseRef.current.y * 2 - cam.position.y) * 0.04 * delta * 60
    cam.lookAt(0, 0, 0)
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          color="#00FFD1"
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#00FFD1"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </lineSegments>

      {/* Ambient floating orbs for depth */}
      {[
        [0, 0, -2, '#00FFD1', 0.25],
        [-4, 3, -1, '#FFB800', 0.15],
        [5, -2, 0, '#A855F7', 0.12],
      ].map(([x, y, z, color, intensity], i) => (
        <mesh key={i} position={[x as number, y as number, z as number]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={color as string} />
          <pointLight color={color as string} intensity={intensity as number} distance={6} />
        </mesh>
      ))}
    </>
  )
}

export default function ParticleNetwork({
  mouseRef,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>
}) {

  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.1} />
      <Network mouseRef={mouseRef} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.05}
          luminanceSmoothing={0.9}
          intensity={2.5}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  )
}
