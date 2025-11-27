import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Maximize2, Wand2, Loader2 } from 'lucide-react';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt) return;
    
    setLoading(true);
    setImageUrl(null); // Clear previous image

    // Random seed to ensure new image every time
    const randomSeed = Math.floor(Math.random() * 100000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1024&height=1024&nologo=true`;

    // We set the URL directly, the <img> onLoad will handle the loading state
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

  const toggleFullScreen = () => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
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

        {/* Input Area */}
        <div className="bg-gray-800/50 p-2 rounded-2xl border border-gray-700 shadow-2xl flex flex-col md:flex-row gap-2 mb-12 backdrop-blur-sm">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateImage()}
            placeholder="A futuristic city with flying cars at sunset, cyberpunk style..."
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

        {/* Image Display Area */}
        <div className="relative w-full aspect-square md:aspect-[16/9] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center group">
          
          {!imageUrl && !loading && (
            <div className="text-center p-8 text-gray-500">
              <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-10 h-10 opacity-50" />
              </div>
              <p>Your imagination is the limit. <br/> Start by typing a prompt above.</p>
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

          {/* Hidden Image tag to handle loading */}
          {imageUrl && (
            <>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.9 : 1 }}
                transition={{ duration: 0.5 }}
                src={imageUrl}
                alt={prompt}
                onLoad={handleImageLoad}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Actions */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${loading ? 'hidden' : ''}`}>
                 <div className="text-white text-sm truncate max-w-[60%] opacity-80">
                    {prompt}
                 </div>
                 <div className="flex gap-3">
                    <button 
                        onClick={downloadImage}
                        className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all"
                        title="Download"
                    >
                        <Download className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={toggleFullScreen}
                        className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all"
                        title="Full Screen"
                    >
                        <Maximize2 className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Generate;