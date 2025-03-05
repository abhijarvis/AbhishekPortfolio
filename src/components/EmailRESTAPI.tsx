import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const EmailRestAPI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Check if any fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('All fields are required. Please fill out the form completely.');
      setTimeout(() => {
        setStatusMessage('');
      }, 5000); // Clear the message after 5 seconds
      return; // Stop further execution
    }
  
    setIsSending(true);
    setStatusMessage('Sending your message...');
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Web Wizard',
        message: formData.message,
      },
    };
  
    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      setStatusMessage('Message sent successfully!');
      setTimeout(() => {
        setStatusMessage('');
      }, 2000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('Failed to send the message. Please try again.');
      setTimeout(() => {
        setStatusMessage('');
      }, 10000);
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent text-gray-900 dark:text-white"
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
      >
        {isSending ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </motion.button>
      {statusMessage && <p className="mt-4 text-center text-gray-900 dark:text-white">{statusMessage}</p>}
    </form>
  );
};

