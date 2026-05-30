import React from 'react';
import { motion } from 'motion/react';

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20">
      <h2 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase border-b-8 border-black pb-4 mb-12">
        Hobbies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Centres d'intérêt */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 text-white p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600 rounded-full border-8 border-black opacity-90" />
          
          <h3 className="text-3xl font-black font-['Syne'] uppercase mb-8 relative z-10">Centres d'intérêt</h3>
          
          <ul className="flex flex-col gap-6 font-bold text-lg relative z-10">
            <li className="border-l-4 border-white pl-4 hover:pl-6 transition-all cursor-default">Actualités Tech & IA</li>
            <li className="border-l-4 border-white pl-4 hover:pl-6 transition-all cursor-default">Actualités Gaming</li>
            <li className="border-l-4 border-white pl-4 hover:pl-6 transition-all cursor-default">Actualités Sports</li>
            <li className="border-l-4 border-white pl-4 hover:pl-6 transition-all cursor-default">Typographie Expérimentale</li>
          </ul>
        </motion.div>

        {/* Loisirs */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,17,0,1)] transition-all relative overflow-hidden"
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black border-8 border-white transform rotate-45 opacity-10" />
          
          <h3 className="text-3xl font-black font-['Syne'] uppercase mb-8 relative z-10">Loisirs</h3>
          
          <ul className="flex flex-col gap-6 font-bold text-lg relative z-10">
            <li className="border-l-4 border-black pl-4 hover:pl-6 transition-all cursor-default">Lecture</li>
            <li className="border-l-4 border-black pl-4 hover:pl-6 transition-all cursor-default">Musculation</li>
            <li className="border-l-4 border-black pl-4 hover:pl-6 transition-all cursor-default">Gaming</li>
            <li className="border-l-4 border-black pl-4 hover:pl-6 transition-all cursor-default">Programmation/développement web, mobile</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
