import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToGenerate = () => {
    const element = document.getElementById('generate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a12] text-white selection:bg-purple-500/30">
      
      {/* --- Background Effects --- */}
      
      {/* 1. Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* 2. Top Spotlight Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* 3. Floating Abstract Art Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-20 -z-10"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[5%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 blur-3xl opacity-20 -z-10"
      />

      {/* --- Main Content --- */}
      <div className="z-10 max-w-4xl mx-auto px-4 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            AI Engine V2.0 Live
          </span>
        </motion.div>

        {/* Main Title - Font Size Adjusted */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
        >
          Imagine. Describe. <br />
          <span className="relative inline-block mt-1 md:mt-2">
            <span className="absolute -inset-2 blur-xl bg-purple-600/30 rounded-full"></span>
            <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Create Reality.
            </span>
          </span>
        </motion.h1>

        {/* Description - Size Adjusted */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Transform your wildest thoughts into breathtaking visuals with our 
          <span className="text-gray-200 font-medium"> Neural Art Engine</span>. 
          High-quality, fast, and free.
        </motion.p>

        {/* Fake Search Bar - Compact Version */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative max-w-md mx-auto mb-10 hidden md:block"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20"></div>
          <div className="relative flex items-center bg-[#151520] border border-white/10 rounded-lg py-2.5 px-4 shadow-xl">
            <Sparkles className="w-4 h-4 text-purple-400 mr-3" />
            <div className="text-gray-500 text-left flex-1 font-mono text-xs md:text-sm">
              "A futuristic cyberpunk city..."
            </div>
            <div className="h-4 w-[1px] bg-purple-500 animate-pulse ml-1"></div>
          </div>
        </motion.div>

        {/* Action Buttons - Size Adjusted */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            onClick={scrollToGenerate}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-6 py-3 bg-white text-black font-semibold rounded-full text-base shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all overflow-hidden w-full sm:w-auto min-w-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="flex items-center justify-center gap-2">
              <Wand2 className="w-4 h-4" />
              Start Creating
            </span>
          </motion.button>

          <button className="px-6 py-3 text-gray-300 font-medium rounded-full text-base hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center min-w-[160px]">
            View Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0a12] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;