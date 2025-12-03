import React from 'react';
import { 
  Heart, 
  Twitter, 
  Instagram, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Zap,
  Shield,
  Image as ImageIcon
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
              PixAI Generator
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unleash your creativity with our state-of-the-art AI. 
              Turn your imagination into breathtaking visual realities in seconds.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Column 2: Product Features */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink href="#">Text to Image</FooterLink>
              <FooterLink href="#">Image Upscaler</FooterLink>
              <FooterLink href="#">Background Remover</FooterLink>
              <FooterLink href="#">AI Avatar</FooterLink>
              <FooterLink href="#">Pricing & Plans</FooterLink>
            </ul>
          </div>

          {/* Column 3: Resources & Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink href="#">Community Gallery</FooterLink>
              <FooterLink href="#">Prompt Guide</FooterLink>
              <FooterLink href="#">API Documentation</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest AI art trends and prompts delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PixAI Generator. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for clean code
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all border border-white/5 hover:border-purple-500/30"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-purple-400 transition-colors flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {children}
    </a>
  </li>
);

export default Footer;