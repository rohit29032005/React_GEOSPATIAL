"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

function Earth(props: any) {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudRef = useRef<THREE.Mesh>(null)

  // Load Earth textures
  const [earthTexture, earthNormal, earthSpecular, cloudTexture] = useLoader(THREE.TextureLoader, [
    '/earth-texture.jpg',
    '/earth-normal.jpg', 
    '/earth-specular.jpg',
    '/earth-clouds.jpg'
  ])

  // Create realistic Earth material with enhanced properties
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: earthNormal,
    specularMap: earthSpecular,
    shininess: 120,
    transparent: false,
    // More natural color and lighting properties
    color: new THREE.Color(1.0, 1.0, 1.0), // Natural base color
    emissive: new THREE.Color(0.02, 0.02, 0.03), // Very subtle blue glow
    normalScale: new THREE.Vector2(0.3, 0.3), // Subtle normal mapping
  })

  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.25,
    depthWrite: false,
    color: new THREE.Color(0.95, 0.95, 0.95), // More natural cloud color
    emissive: new THREE.Color(0.01, 0.01, 0.01), // Minimal glow
  })

  // Slow rotation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 15
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y = elapsedTime / 10
    }
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
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#6bb6ff" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffeb9c" castShadow />
      <hemisphereLight args={["#87ceeb", "#362d1d", 0.3]} />
      <Earth position={[0, 0, 0]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

