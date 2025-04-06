"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

function Earth(props) {
  const earthRef = useRef()
  const cloudRef = useRef()

  // Create basic materials instead of loading textures
  const earthMaterial = new THREE.MeshPhongMaterial({
    color: new THREE.Color("#1e6f50"),
    emissive: new THREE.Color("#0f3d2d"),
    specular: new THREE.Color("#4ade80"),
    shininess: 10,
  })

  const cloudMaterial = new THREE.MeshPhongMaterial({
    color: new THREE.Color("#ffffff"),
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  })

  // Slow rotation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 15
    cloudRef.current.rotation.y = elapsedTime / 10
  })

  return (
    <group {...props}>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={earthMaterial} attach="material" />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudRef} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={cloudMaterial} attach="material" />
      </mesh>
    </group>
  )
}

export default function HeroGlobe() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Earth position={[0, 0, 0]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

