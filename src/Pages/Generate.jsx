import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, Wand2, Loader2, X, Sparkles, Image as ImageIcon, Share2 } from 'lucide-react';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const generateImage = async () => {
    if (!prompt) return;
    
    setLoading(true);
    setImageUrl(null); 

    // Random seed ensuring unique images
    const randomSeed = Math.floor(Math.random() * 100000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1024&height=1024&nologo=true`;

    // Simulate a slight delay for the animation to be appreciated (optional, remove in prod if needed)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setImageUrl(url);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const downloadImage = async () => {
    if (!imageUrl) return;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ai-generated-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <section id="generate" className="relative min-h-screen py-24 px-4 flex flex-col items-center bg-[#0a0a12] text-white overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>AI Powered Generation</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Masterpiece</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Enter a detailed prompt below and let our neural engine render your imagination into reality.
          </p>
        </div>

        {/* Input Bar - Premium Glassmorphism */}
        <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-[#13131f] rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl border border-white/10">
                
                <div className="flex-1 w-full relative">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && generateImage()}
                        placeholder="Ex: A cyberpunk cat wearing sunglasses in neon rain..."
                        className="w-full bg-transparent text-white pl-12 pr-4 py-4 outline-none placeholder-gray-600 text-lg font-light"
                    />
                </div>

                <button
                    onClick={generateImage}
                    disabled={loading || !prompt}
                    className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                    {loading ? (
                        <Loader2 className="animate-spin w-5 h-5" />
                    ) : (
                        <Wand2 className="w-5 h-5" />
                    )}
                    {loading ? 'Generating...' : 'Generate'}
                </button>
            </div>
        </div>

        {/* Canvas / Image Display Area */}
        <div className="relative w-full aspect-square md:aspect-[16/9] bg-[#0f0f16] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group">
          
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          {/* STATE 1: EMPTY */}
          {!imageUrl && !loading && (
            <div className="text-center p-8 z-10">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 animate-pulse">
                <ImageIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Ready to Imagine</h3>
              <p className="text-gray-500 text-sm">Your creation will appear here.</p>
            </div>
          )}

          {/* STATE 2: LOADING (SCANNING EFFECT) */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
              <div className="relative w-full h-1 bg-gray-800 overflow-hidden absolute top-0">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                  />
              </div>
              
              <div className="relative">
                  <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
                  </div>
              </div>
              <p className="mt-6 text-purple-300 font-mono text-sm tracking-widest animate-pulse">
                RENDERING PIXELS...
              </p>
            </div>
          )}

          {/* STATE 3: IMAGE LOADED */}
          {imageUrl && (
            <>
              <motion.img
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: loading ? 0 : 1, scale: loading ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
                src={imageUrl}
                alt={prompt}
                onLoad={handleImageLoad}
                className={`w-full h-full object-cover transition-transform duration-700 ${loading ? 'blur-lg' : 'blur-0'}`}
              />
              
              {/* Premium Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 md:p-8 ${loading ? 'hidden' : ''}`}>
                 
                 {/* Top Right Controls */}
                 <div className="flex justify-end gap-3 translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                     <button 
                        onClick={() => setIsFullScreen(true)}
                        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10 transition-all hover:scale-105"
                        title="Full Screen"
                     >
                        <Maximize2 className="w-5 h-5" />
                     </button>
                 </div>

                 {/* Bottom Info Bar */}
                 <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
                     <div className="flex-1 min-w-0">
                        <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Prompt</p>
                        <p className="text-white text-sm md:text-base font-medium truncate pr-4">
                           "{prompt}"
                        </p>
                     </div>
                     <button 
                        onClick={downloadImage}
                        className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
                     >
                        <Download className="w-4 h-4" /> Download
                     </button>
                 </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* --- FULL SCREEN MODAL (PREMIUM LIGHTBOX) --- */}
      <AnimatePresence>
        {isFullScreen && imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setIsFullScreen(false)}
          >
            {/* Close Button */}
            <button 
                onClick={() => setIsFullScreen(false)}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-all border border-white/5 z-50 group"
            >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Image Container with Glow */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-[90vw] max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl rounded-lg"></div>
                <img 
                    src={imageUrl} 
                    alt="Full Screen Art" 
                    className="relative max-h-[80vh] w-auto rounded-lg shadow-2xl border border-white/10"
                />
                
                {/* Modal Actions */}
                <div className="mt-8 flex justify-center gap-4">
                    <button 
                        onClick={downloadImage}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-bold shadow-lg shadow-purple-500/20 transition-all transform hover:-translate-y-1"
                    >
                        <Download className="w-4 h-4" /> Save High Res
                    </button>
                    {/* Optional: Share Button Logic can be added here */}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Generate;