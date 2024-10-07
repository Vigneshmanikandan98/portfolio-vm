'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      controls.start({
        y: visible ? 0 : -100,
        transition: { duration: 0.3 }
      })

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, controls])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white shadow-lg"
      initial={{ y: 0 }}
      animate={controls}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-primary font-bold text-xl">VM</Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-gray-700 hover:text-primary transition-colors text-[13px]"
                >
                  <span className="text-primary">{index + 1}. </span>{item.name}
                </a>
              </motion.div>
            ))}
          </nav>
          <button className="md:hidden text-gray-700 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}