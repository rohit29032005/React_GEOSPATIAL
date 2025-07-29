"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useTheme } from "next-themes"
import * as THREE from "three"

function Earth(props: any) {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()
  
  // Determine if we're in dark mode
  const isDarkMode = resolvedTheme === 'dark'

  // Load all Earth textures
  const earthTexture = useLoader(THREE.TextureLoader, '/earth_texture.jpg')
  const cloudsTexture = useLoader(THREE.TextureLoader, '/earth_clouds.jpg')
  
  // Create enhanced Earth material with theme-responsive properties
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: isDarkMode ? 80 : 100,
    transparent: false,
    specular: new THREE.Color(isDarkMode ? 0x333333 : 0x222222), // Adjust specular for theme
  })

  // Create clouds material with theme-responsive opacity
  const cloudsMaterial = new THREE.MeshLambertMaterial({
    map: cloudsTexture,
    transparent: true,
    opacity: isDarkMode ? 0.3 : 0.4, // Slightly more transparent in dark mode
    depthWrite: false,
  })

  // Apply texture wrapping and filtering for better quality
  earthTexture.wrapS = THREE.RepeatWrapping
  earthTexture.wrapT = THREE.RepeatWrapping
  earthTexture.minFilter = THREE.LinearFilter
  earthTexture.magFilter = THREE.LinearFilter

  cloudsTexture.wrapS = THREE.RepeatWrapping
  cloudsTexture.wrapT = THREE.RepeatWrapping
  cloudsTexture.minFilter = THREE.LinearFilter
  cloudsTexture.magFilter = THREE.LinearFilter

  // Update materials when theme changes
  useEffect(() => {
    if (earthRef.current) {
      earthMaterial.shininess = isDarkMode ? 80 : 100
      earthMaterial.specular = new THREE.Color(isDarkMode ? 0x333333 : 0x222222)
      earthMaterial.needsUpdate = true
    }
    if (cloudsRef.current) {
      cloudsMaterial.opacity = isDarkMode ? 0.3 : 0.4
      cloudsMaterial.needsUpdate = true
    }
  }, [isDarkMode, earthMaterial, cloudsMaterial])

  // Smooth rotation animation with different speeds for Earth and clouds
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 20
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 18 // Clouds rotate slightly faster
    }
  })

  return (
    <group {...props}>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={earthMaterial} attach="material" />
      </mesh>
      
      {/* Clouds layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <primitive object={cloudsMaterial} attach="material" />
      </mesh>
    </group>
  )
}

export default function HeroGlobe() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  // Determine if we're in dark mode
  const isDarkMode = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 8], fov: 45 }}>
      {/* Theme-responsive ambient lighting */}
      <ambientLight 
        intensity={isDarkMode ? 0.6 : 0.9} 
        color={isDarkMode ? "#ffffff" : "#ffffff"} 
      />
      
      {/* Optional directional light for better contrast in dark mode */}
      {isDarkMode && (
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.3}
          color="#ffffff"
        />
      )}
      
      <Earth position={[0, 0, 0]} />
      <Stars 
        radius={100} 
        depth={50} 
        count={isDarkMode ? 6000 : 5000} // More stars in dark mode
        factor={isDarkMode ? 5 : 4} 
        saturation={0} 
        fade 
        speed={0.5} 
      />
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        rotateSpeed={0.3} 
        autoRotate 
        autoRotateSpeed={0.2}
        minDistance={6}
        maxDistance={12}
      />
    </Canvas>
  )
}

