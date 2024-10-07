'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-slate mb-8 text-left"
        >
          <span className="text-primary">01.</span> About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-2/3"
          >
            <p className="text-slate-light mb-4">
            Hi, I’m Vignesh Manikandan, a passionate software engineer with a diverse skill set in building innovative software solutions. With over two years of experience, I specialize in developing backend systems using Java, Spring Boot, REST APIs and GraphQL, while also exploring a range of technologies that enhance user experiences and system performance.
            </p>
            <p className="text-slate-light mb-4">
            My journey in software engineering has equipped me with a solid foundation in cloud technologies like AWS, database management with SQL and NoSQL, and an understanding of machine learning principles. I thrive on tackling complex challenges and continuously seek to learn and grow in this dynamic field.
            </p>
            <p className="text-slate-light mb-4">
            Thank you for visiting my portfolio! I look forward to connecting and collaborating on innovative software solutions that make a difference.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: -10 }}
            className="md:w-1/3 flex justify-center"
          >
           <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-2 border-primary rounded-md transform translate-x-5 translate-y-5 z-0"></div>
              <div className="relative z-10 ">
                <Image
                  src="https://vigneshmanikandan98.github.io/portfolio-vm/images/VigneshPort.jpg" 
                  alt="Vignesh Manikandan"
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}