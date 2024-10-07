'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LazyLoader from '../components/LazyLoader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import TechStack from '@/components/TechStack'

function Section({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <LazyLoader>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Section><Hero /></Section>
          <Section><About /></Section>
          <Section><TechStack /></Section>
          <Section><Experience /></Section>
          <Section><Projects /></Section>
          <Section><Contact /></Section>
        </main>
        <Footer />
      </div>
    </LazyLoader>
  )
}