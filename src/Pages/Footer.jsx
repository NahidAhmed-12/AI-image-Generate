import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black/40 border-t border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} PixAI Generator. All rights reserved.</p>
        
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
        </div>
        
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;