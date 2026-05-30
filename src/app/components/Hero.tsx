import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="profil" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
      <div className="flex-1 relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-red-600 rounded-full border-4 border-black"
        />
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black font-['Syne'] leading-none uppercase tracking-tighter">
            Bonjour,
            <br />
            <span className="text-blue-600 drop-shadow-[4px_4px_0px_#000]">je suis</span>
            <br />
            un profil
            <br />
            <span className="bg-black text-white px-4 inline-block transform -rotate-2">curieux.</span>
          </h1>
          <p className="mt-8 text-xl font-bold max-w-md border-l-4 border-red-600 pl-4">
            Bienvenue dans mon portfolio. J’aime partir d’une idée, la comprendre, puis lui donner forme avec soin, méthode et simplicité.
          </p>
        </motion.div>
      </div>

      <div className="flex-1 relative w-full max-w-md">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full aspect-[3/4] rounded-t-full border-4 border-black overflow-hidden shadow-[16px_16px_0px_0px_rgba(255,17,0,1)] bg-gray-300"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBlcnNvbiUyMHNvbGlkJTIwYmFja2dyb3VuZCUyMGNyZWF0aXZlfGVufDF8fHx8MTc4MDEzODQwNXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Portrait de profil"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Floating element */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-12 w-24 h-24 bg-blue-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform rotate-12"
        >
          <span className="font-['Syne'] font-black text-white text-3xl">*</span>
        </motion.div>
      </div>
    </section>
  );
}
