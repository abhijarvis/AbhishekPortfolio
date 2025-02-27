import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-purple-600/10 dark:bg-purple-400/10"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      )}
    </motion.button>
  );
};