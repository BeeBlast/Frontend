import React from 'react';
import { Discord, Twitter } from 'lucide-react';
import jungleImage from './2.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${jungleImage.src})` }}
      />
      <div className="absolute inset-0 bg-black/10 z-10" />

      <div className="relative z-20">
        <nav className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-white">
            <img src="/api/placeholder/150/50" alt="Bee Blast Logo" className="h-8" />
          </div>
          <div className="flex space-x-6 text-white">
            <a href="#" className="hover:opacity-80">Our Games</a>
            <a href="#" className="hover:opacity-80">Game Info</a>
            <a href="#" className="hover:opacity-80">Token</a>
            <a href="#" className="hover:opacity-80">About</a>
            <a href="#" className="hover:opacity-80">Document</a>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-700/30">
              <img src="/api/placeholder/24/24" alt="Sound Icon" className="h-6 w-6" />
            </button>
            <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500">
              PLAY NOW
            </button>
          </div>
        </nav>

        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center space-y-8">
          <h1 className="text-7xl font-bold text-yellow-400 filter drop-shadow-lg">
            BEE BLAST
          </h1>
          <div className="bg-black/50 px-8 py-4 rounded-xl">
            <p className="text-4xl font-bold text-white tracking-wider">COMING SOON</p>
          </div>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-white hover:text-yellow-200">
              <Twitter size={24} />
            </a>
            {/* <a href="#" className="text-white hover:text-yellow-200">
              <Discord size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-200">
              <img src="/api/placeholder/24/24" alt="Telegram" className="h-6 w-6" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;