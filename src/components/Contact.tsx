import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { EmailRestAPI } from '../components/EmailRESTAPI';  

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Mail className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">abhishekpandit740@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Phone className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">+91 8709167947</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Bengaluru, India</p>
              </div>
            </div>
          </motion.div>

          {/* Using the EmailRestAPI component */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <EmailRestAPI />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


