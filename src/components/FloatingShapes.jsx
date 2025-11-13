'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function FloatingShapes() {
  const shapes = [
    { 
      type: 'circle', 
      color: 'bg-cyan-400',
      size: 'w-32 h-32',
      position: 'top-20 left-10',
      animation: { y: [0, -30, 0], rotate: 360 }
    },
    { 
      type: 'square', 
      color: 'bg-purple-500',
      size: 'w-24 h-24',
      position: 'bottom-40 right-20',
      animation: { y: [0, 40, 0], rotate: -360 }
    },
    { 
      type: 'triangle', 
      color: 'bg-pink-400',
      size: 'w-28 h-28',
      position: 'top-1/2 right-1/4',
      animation: { x: [0, 20, 0], scale: [1, 1.2, 1] }
    }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.position} ${shape.size} ${shape.color} opacity-20 blur-xl rounded-${
            shape.type === 'circle' ? 'full' : shape.type === 'triangle' ? 'lg' : 'lg'
          }`}
          animate={shape.animation}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prev => [
        ...prev.slice(-8),
        { id: Date.now(), x: e.clientX, y: e.clientY }
      ])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 bg-cyan-300 rounded-full pointer-events-none z-40"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        />
      ))}
    </>
  )
}