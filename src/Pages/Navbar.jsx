import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
        >
          <Sparkles className="w-8 h-8 text-purple-500" />
          PixAI
        </motion.div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-8 text-gray-300 font-medium"
        >
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#generate" className="hover:text-purple-400 transition-colors">Create</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Gallery</a>
        </motion.div>

        {/* GitHub/Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30"
        >
          Sign In
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;