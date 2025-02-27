import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import resume from '../public/Debika_Basu.pdf';
import logo from '../public/Up-pic.png';

export const Header = () => {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Header Name / Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {/* Show the name only on larger screens */}
            <span className="hidden lg:block">Debika Basu</span>

            {/* Show the logo on smaller screens (phones and tablets) */}
            <img
              src={logo}
              alt="Logo"
              className="block lg:hidden w-[45px] h-auto"
            />
          </motion.div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleScroll('#about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleScroll('#experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => handleScroll('#projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Links and Resume */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="https://github.com/DebikaBasu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/debikabasu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              id='resume-download'
              href={resume}
              download="Debika_Basu_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="flex hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <FileDown size={16} className="mr-1" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
