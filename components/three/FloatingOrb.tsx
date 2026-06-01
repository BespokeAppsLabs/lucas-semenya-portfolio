'use client'

import { useRef, MutableRefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function Orb({ mouseRef }: { mouseRef: MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return

    // Slow rotation
    groupRef.current.rotation.y = t * 0.12
    groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.15

    // Mouse parallax on group
    groupRef.current.position.x +=
      (mouseRef.current.x * 1.2 - groupRef.current.position.x) * 0.04
    groupRef.current.position.y +=
      (-mouseRef.current.y * 0.8 - groupRef.current.position.y) * 0.04

    // Inner sphere breathe
    if (innerRef.current) {
      const s = 1 + Math.sin(t * 0.9) * 0.06
      innerRef.current.scale.setScalar(s)
    }

    // Outer wireframe counter-rotate
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.3
      outerRef.current.rotation.z = t * 0.2
    }

    // Rings orbit
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.5
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.35
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Core glow sphere */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#00FFD1" transparent opacity={0.15} />
      </mesh>

      {/* Bright core point */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#00FFD1" />
      </mesh>

      {/* Wireframe icosphere */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#00FFD1" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Torus ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.008, 4, 80]} />
        <meshBasicMaterial color="#00FFD1" transparent opacity={0.35} />
      </mesh>

      {/* Torus ring 2 — amber */}
      <mesh ref={ring2Ref} rotation={[0.4, 0.2, 0]}>
        <torusGeometry args={[2.0, 0.006, 4, 80]} />
        <meshBasicMaterial color="#FFB800" transparent opacity={0.2} />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial color="#00FFD1" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      {/* Ambient point light */}
      <pointLight color="#00FFD1" intensity={0.8} distance={8} />
      <pointLight color="#FFB800" intensity={0.3} distance={6} position={[2, 1, 0]} />
    </group>
  )
}

export default function FloatingOrb({
  mouseRef,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Orb mouseRef={mouseRef} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.9} intensity={3} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
