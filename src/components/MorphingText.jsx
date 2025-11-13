'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const texts = [
  "ИННОВАТОР",
  "ГЕНИЙ",
  "ВИЗИОНЕР", 
  "ТВОРЕЦ",
  "ПЕРФЕКЦИОНИСТ"
]

export function MorphingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-block">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black"
      >
        {texts[index]}
      </motion.span>
    </div>
  )
}