import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToGenerate = () => {
    const element = document.getElementById('generate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Animated Glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <span className="px-4 py-1.5 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 inline-block">
          ✨ Powered by Pollinations.ai
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn your words into <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Incredible Art
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Create stunning visuals in seconds with our free AI image generator. 
          Just describe what you want to see, and watch the magic happen.
        </p>

        <motion.button
          onClick={scrollToGenerate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
        >
          Generate Now
          <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;