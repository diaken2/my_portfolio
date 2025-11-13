'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export function HolographicCard({ children, className = "", simplified = false }) {
  const cardRef = useRef()
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  // Упрощенная версия для режима производительности
  if (simplified) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-gray-900/80 backdrop-blur-sm border border-white/10 ${className}`}>
        {children}
      </div>
    )
  }

  // Полная версия с эффектами
  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 20 // Уменьшаем эффект
    const rotateY = (centerX - x) / 20
    
    setRotate({ x: rotateX, y: rotateY })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10">
        {children}
      </div>
    </motion.div>
  )
}