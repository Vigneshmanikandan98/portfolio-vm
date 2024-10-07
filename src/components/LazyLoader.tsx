'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LazyLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-navy flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-6xl font-bold"
        >
          VM
        </motion.div>
      </div>
    )
  }

  return <>{children}</>
}