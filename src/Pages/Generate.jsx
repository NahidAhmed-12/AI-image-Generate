import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, Wand2, Loader2, X } from 'lucide-react';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); // State for modal

  const generateImage = async () => {
    if (!prompt) return;
    
    setLoading(true);
    setImageUrl(null); 

    // Random seed ensuring unique images
    const randomSeed = Math.floor(Math.random() * 100000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1024&height=1024&nologo=true`;

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
    <section id="generate" className="min-h-screen py-20 px-4 flex flex-col items-center justify-start bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Create Your Masterpiece
          </h2>
          <p className="text-gray-400">Enter a detailed prompt below to get the best results.</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800/50 p-2 rounded-2xl border border-gray-700 shadow-2xl flex flex-col md:flex-row gap-2 mb-12 backdrop-blur-sm">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateImage()}
            placeholder="A futuristic city with flying cars at sunset..."
            className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder-gray-500 w-full"
          />
          <button
            onClick={generateImage}
            disabled={loading || !prompt}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" /> Generate
              </>
            )}
          </button>
        </div>

        {/* Image Display Card */}
        <div className="relative w-full aspect-square md:aspect-[16/9] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center group">
          
          {!imageUrl && !loading && (
            <div className="text-center p-8 text-gray-500">
              <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-10 h-10 opacity-50" />
              </div>
              <p>Type a prompt to start creating.</p>
            </div>
          )}

          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-20">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-t-4 border-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-t-4 border-pink-500 rounded-full animate-spin reverse"></div>
              </div>
              <p className="mt-4 text-purple-300 animate-pulse font-medium">Creating Magic...</p>
            </div>
          )}

          {imageUrl && (
            <>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.9 : 1 }}
                src={imageUrl}
                alt={prompt}
                onLoad={handleImageLoad}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Controls */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${loading ? 'hidden' : ''}`}>
                 <div className="text-white text-sm truncate max-w-[60%] opacity-80">
                    {prompt}
                 </div>
                 <div className="flex gap-3">
                    <button 
                        onClick={downloadImage}
                        className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
                        title="Download"
                    >
                        <Download className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setIsFullScreen(true)}
                        className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
                        title="View Full Screen"
                    >
                        <Maximize2 className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* FULL SCREEN MODAL (LIGHTBOX) */}
      <AnimatePresence>
        {isFullScreen && imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setIsFullScreen(false)} // Click outside to close
          >
            {/* Close Button */}
            <button 
                onClick={() => setIsFullScreen(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            >
                <img 
                    src={imageUrl} 
                    alt="Full Screen AI Art" 
                    className="max-h-[85vh] max-w-full rounded-lg shadow-2xl border border-gray-700/50"
                />
                
                {/* Download Button inside Fullscreen */}
                <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex gap-4">
                    <button 
                        onClick={downloadImage}
                        className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-full text-white font-medium shadow-lg transition-all"
                    >
                        <Download className="w-4 h-4" /> Download High Res
                    </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Generate;