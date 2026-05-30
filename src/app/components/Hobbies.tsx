import React from 'react';
import { motion } from 'motion/react';

export function Hobbies() {
  return (
    <section id="hobbies" className="py-16 md:py-20">
      <h2 className="mb-12 break-words border-b-8 border-black pb-4 font-['Syne'] text-4xl font-black uppercase md:text-6xl">
        Hobbies
      </h2>

      <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
        {/* Centres d'intérêt */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-w-0 overflow-hidden bg-blue-600 p-5 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:p-12 md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600 rounded-full border-8 border-black opacity-90" />

          <h3 className="relative z-10 mb-8 break-words font-['Syne'] text-2xl font-black uppercase sm:text-3xl">Centres d'intérêt</h3>

          <ul className="relative z-10 flex min-w-0 flex-col gap-6 text-base font-bold sm:text-lg">
            <li className="break-words border-l-4 border-white pl-4 transition-all hover:pl-6 cursor-default">Actualités Tech & IA</li>
            <li className="break-words border-l-4 border-white pl-4 transition-all hover:pl-6 cursor-default">Actualités Gaming</li>
            <li className="break-words border-l-4 border-white pl-4 transition-all hover:pl-6 cursor-default">Actualités Sports</li>
            <li className="break-words border-l-4 border-white pl-4 transition-all hover:pl-6 cursor-default">Cuisine</li>
          </ul>
        </motion.div>

        {/* Loisirs */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-w-0 overflow-hidden bg-white p-5 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,17,0,1)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:p-8 md:p-12 md:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(255,17,0,1)]"
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black border-8 border-white transform rotate-45 opacity-10" />

          <h3 className="relative z-10 mb-8 break-words font-['Syne'] text-2xl font-black uppercase sm:text-3xl">Loisirs</h3>

          <ul className="relative z-10 flex min-w-0 flex-col gap-6 text-base font-bold sm:text-lg">
            <li className="break-words border-l-4 border-black pl-4 transition-all hover:pl-6 cursor-default">Lecture</li>
            <li className="break-words border-l-4 border-black pl-4 transition-all hover:pl-6 cursor-default">Musculation</li>
            <li className="break-words border-l-4 border-black pl-4 transition-all hover:pl-6 cursor-default">Gaming</li>
            <li className="break-words border-l-4 border-black pl-4 transition-all hover:pl-6 cursor-default">Programmation/développement web, mobile</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
