import React from 'react';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Generate from './Pages/Generate';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500 selection:text-white">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-gray-950 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <Navbar />
      <Hero />
      <Generate />
      <Footer />
    </div>
  );
}

export default App;