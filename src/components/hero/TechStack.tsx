import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { FaJs, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiDotnet } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

// Floating animation variants
const floatingVariants = (duration:number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // Moving slightly up and down
    transition: {
      duration: duration, // Slow movement
      ease: 'easeInOut', // Smooth easing
      repeat: Infinity, // Infinite looping
    },
  },
});

export const TechStack = () => {
  const technologies = [
    { name: 'C', icon: <RiReactjsLine className="text-5xl text-cyan-400" />, delay: 3 },
    { name: 'JavaScript', icon: <FaJs className="text-5xl text-yellow-400" />, delay: 3.5 },
    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-5xl text-blue-500" />, delay: 4 },
    { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-500" />, delay: 3 },
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-blue-600" />, delay: 4.5 },
    { name: 'Java', icon: <FaJava className="text-5xl text-orange-400" />, delay: 3.5 },
    { name: '.NET', icon: <SiDotnet className="text-5xl text-purple-500" />, delay: 3.5 },
    { name: 'Git', icon: <FaGitAlt className="text-5xl text-red-500" />, delay: 3.5 },
  ];

  return (
    <div className="w-full">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4 gap-4 mt-8 justify-center" // Reduced gap to gap-4
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={floatingVariants(tech.delay)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center space-y-1"
          >
            <div className="bg-gray-800 text-white rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-md">
              {tech.icon}
            </div>
            <span className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
