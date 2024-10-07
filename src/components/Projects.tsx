'use client'

import { motion } from 'framer-motion'
import { FiFolder, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Sentiment Analysis on Financial News using Llama 3',
    description: 'Developed a model which categorizes financial news into sentiments using Meta Llama 3. ',
    tech: ['Python', 'Llama 3', 'NumPy', 'Torch'],
    github: 'https://github.com/Vigneshmanikandan98/Sentiment-Analysis-on-Financial-News',
  },
  {
    title: 'Spotify Clone Web App',
    description: 'Built a Spotify Web app using React.js and Spotify WebAPI to display user and playlist details.',
    tech: ['React.js', 'CSS'],
    github: 'https://github.com/Vigneshmanikandan98/voughtify',
  },
  {
    title: 'AWS Elastic Kubernetes Service',
    description: 'Orchestrated the deployment process of any application on AWS EKS.',
    tech: ['Terraform', 'Docker', 'Kubernetes', 'Jenkins'],
    github: 'https://github.com/Vigneshmanikandan98/AWS-EKS-deployment',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Developed a model which recommends movies using Collaborative Filtering method. ',
    tech: ['Python', 'ML', 'NumPy', 'Torch'],
    github: 'https://github.com/Vigneshmanikandan98/Movie-Recommendation-System',
  },
  {
    title: 'Realtime Streaming Election System',
    description: 'Built a Streaming Data Pipeline for a voting system using Apache Kafka, PostgreSQL and Spark.',
    tech: ['Python', 'Kafka', 'Spark', 'PostgreSQL'],
    github: 'https://github.com/Vigneshmanikandan98/realtime-voting-data-streaming-main',
  },
  {
    title: 'Sentiment Analysis of Product Reviews',
    description: 'Categorizes product reviews sourced from X (Twitter) into Positive, Negative, and Neutral sentiments.',
    tech: ['Python', 'NLP', 'NumPy'],
    github: 'https://github.com/Vigneshmanikandan98/Sentiment-analysis-model',
  },
]

export default function Projects() { 
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          <span className="text-primary">04.</span> Some Things I&apos;ve Built
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden group h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-[#096dd9] opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <FiFolder className="text-primary text-3xl" />
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                        <FiGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex} className="text-primary text-sm">{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}