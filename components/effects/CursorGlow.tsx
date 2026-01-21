'use client'

import { useState, useEffect } from 'react'

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-10 blur-3xl opacity-20 transition-all duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
    />
  )
}