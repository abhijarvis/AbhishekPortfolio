// import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import iph from '../public/iPhone15.png';
import aww from '../public/Awwards-website.png';
import lumi from '../public/Luminamind.png';
import flipkart from '../public/flipkart_clone.png';
import freecode from '../public/freeCodeCamp_clone.png';
import RAORBA from '../public/RAORBA.png';

const projects = [
  {
    title: "Awwards Animated Website",
    description: "Awwards Animated Website",
    image: aww,
    tech: ["React", " Tailwind CSS", "GSAP"],
    github: "https://github.com/DebikaBasu/Awwards-animated-website",
    live: "http://awwards-animated-website.vercel.app",
  },
  {
    title: "LuminaMind",
    description: "A modern website featuring sleek design",
    image: lumi,
    tech: ["React", "Vite", "Framer-motion"],
    github: "https://github.com/DebikaBasu/Luminamind",
    live: "https://luminamind.vercel.app",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform built with React and Redux",
    image: flipkart, 
    tech: ["React", "Redux", "Express", "MongoDB"],
    github: "https://github.com/DebikaBasu/E-KartCom",
    live: "https://ezeptkart-ecom.onrender.com/",
  },
  {
    title: "RAORBA-2024",
    description: "Website for International Conference",
    image: RAORBA,
    tech: ["Bootstrap", "HTML5", "JavaScript"],
    github: "https://github.com/DebikaBasu/RAORBA-2024",
    live: "https://raorba-2024.vercel.app",
  },
  {
    title: "iPhone 15 Pro Max Website Clone",
    description: "iPhone 15 Pro Max Website Clone",
    image: iph, 
    tech: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/DebikaBasu/iPhone-15-Pro-Max-Website-Clone",
    live: "http://appleiphone-hazel.vercel.app",
  },
  {
    title: "FreeCodeCamp Website Clone",
    description: "FreeCodeCamp Website Clone",
    image: freecode, 
    tech: ["React", "JavaScript", "Material-UI"],
    github: "https://github.com/DebikaBasu/FreeCodeCamp",
    live: "https://free-code-camp-clone-xi.vercel.app",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 dark:from-purple-500/80 dark:to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
