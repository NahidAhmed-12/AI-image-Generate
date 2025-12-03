import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Gem, Sparkles } from 'lucide-react';

const featuresData = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
    shadow: "group-hover:shadow-yellow-500/20",
    title: "Lightning Fast",
    desc: "Generate high-quality images in seconds with our optimized AI engine."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50",
    shadow: "group-hover:shadow-green-500/20",
    title: "Secure & Private",
    desc: "Your prompts and generated images are private and secure with us."
  },
  {
    icon: <Gem className="w-6 h-6 text-pink-400" />,
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
    shadow: "group-hover:shadow-pink-500/20",
    title: "High Resolution",
    desc: "Download crystal clear HD images perfect for your projects."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20",
    title: "Unlimited Creativity",
    desc: "No limits on your imagination. Create any style you can dream of."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#0a0a12] relative overflow-hidden">
      
      {/* --- Background Effects (Consistent with Hero) --- */}
      
      {/* 1. Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* 2. Ambient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why use <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">PixAI?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Experience the next generation of AI art creation with features designed for professionals.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group p-6 rounded-2xl bg-[#13131f] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-transparent ${item.border} hover:shadow-2xl ${item.shadow}`}
            >
              {/* Icon Container with Glow */}
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;