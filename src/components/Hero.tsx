'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/vigmanikandan1/', '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-primary mb-4"
        > 
          Hello, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl font-bold text-gray-900 mb-4"
        >
          Vignesh Manikandan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-4xl font-bold text-gray-700 mb-6"
        >
          I build seamless software that transforms ideas into reality.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
         I&apos;m a software engineer with a flair for crafting cool digital experiences! From websites to applications, I bring creativity and coding expertise to every project. Let&apos;s build something awesome together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={handleClick}
            className="inline-block border-2 border-primary text-primary font-semibold py-3 px-8 rounded hover:shadow-[5px_5px_0px_0px_rgba(9,109,217,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Check out my Profile!
          </button>
        </motion.div>
      </div>
    </section>
  )
}