'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Community Dreams Foundation',
    position: 'Software Engineer',
    period: 'May 2024 - Present',
    logo: '/images/cdf.jpg'
  },
  {
    company: 'Accenture',
    position: 'Associate Software Engineer',
    period: 'Jan 2021 - Nov 2021',
    logo: '/images/accenture_logo.jpg'
  },
  {
    company: 'NivePras IT Solutions',
    position: 'Full Stack Developer',
    period: 'Dec 2019 - Dec 2020',
    logo: ''
  },
  {
    company: 'NivePras IT Solutions',
    position: 'Frontend Developer Intern',
    period: 'Jul 2019 - Dec 2019',
    logo: ''
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-12"
        >
          <span className="text-primary">03.</span> Where I&apos;ve Worked
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
              
              <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                  </div>
                  <Image 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain ml-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}