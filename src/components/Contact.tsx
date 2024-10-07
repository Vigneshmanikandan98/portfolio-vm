'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate mb-4"
        >
          <span className="text-primary">05.</span> What&apos;s Next?
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-slate-light mb-6"
        >
          Get In Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-light mb-8"
        >
          I&apos;m currently looking for new opportunities, my inbox is always open. Say Hi and I will get back to you!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="mailto:vigneshxmani1@gmail.com" 
            className="inline-block border-2 border-primary text-primary font-semibold py-3 px-8 rounded hover:shadow-[5px_5px_0px_0px_rgba(9,109,217,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Say Hello!
          </a>
        </motion.div>
      </div>
    </section>
  )
}