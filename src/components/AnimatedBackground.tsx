import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

const COLORS_TOP = ['#B447C3']

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  const [canvasOpacity, setCanvasOpacity] = useState(0)

  useEffect(() => {
    setCanvasOpacity(0)
    const timeoutId = setTimeout(() => setCanvasOpacity(1), 50)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          opacity: canvasOpacity,
          transition: 'opacity 1.5s',
        }}
      >
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </motion.section>
  )
}
