'use client'

import { useRef, MutableRefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Single signature moment: a slow ink wireframe sphere. No bloom, no glow. */
function Orb({ mouseRef }: { mouseRef: MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null)
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return
    groupRef.current.rotation.y = t * 0.08
    groupRef.current.position.x += (mouseRef.current.x * 0.5 - groupRef.current.position.x) * 0.03
    groupRef.current.position.y += (-mouseRef.current.y * 0.35 - groupRef.current.position.y) * 0.03
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.12
      outerRef.current.rotation.z = t * 0.06
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshBasicMaterial color="#171512" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.1, 0.004, 4, 96]} />
        <meshBasicMaterial color="#171512" transparent opacity={0.22} />
      </mesh>
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
    </Canvas>
  )
}
