import React from 'react';
import { motion } from 'framer-motion';
import picofme from '../../public/Up-pic.png';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-12 gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Debika Basu
            <span className="block text-purple-600">Frontend Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I craft beautiful and performant web experiences with modern technologies.
            Specialized in React, TypeScript, and modern CSS.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1" // Hide on small screens, show on large screens
        >
          <img
            src={picofme}
            alt="Debika Basu"
            className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover mx-auto shadow-2xl mb-8 lg:mb-0"
          />
        </motion.div>
      </div>
    </section>
  );
};
