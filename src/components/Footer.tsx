import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Vigneshmanikandan98" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-primary">
            <FiGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/vigmanikandan1/" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-primary">
            <FiLinkedin className="text-xl" />
          </a>
        </div>
        <p className="text-slate-light text-sm">
          Designed & Built by Vignesh Manikandan
        </p>
      </div>
    </footer>
  )
}