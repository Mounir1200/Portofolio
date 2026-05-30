import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  { title: "Modèle de Machine Learning d'identification faciale", type: "Projet Académique", color: "bg-blue-600" },
  { title: "Projet Activ'ESAIP", type: "Projet Académique", color: "bg-red-600" },
  { title: "Projet d'Ecoconception Numérique Design4Green D4G", type: "Projet Académique", color: "bg-black" },
  { title: "Développement d'une application web et mobile : ChartMind (en cours)", type: "Projet Personnel", color: "bg-red-600"}
];

export function Projects() {
  return (
    <section id="projets" className="py-20">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-end border-b-8 border-black pb-4">
          <h2 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase">
            Mes Projets
          </h2>
          <span className="text-xl font-bold uppercase hidden md:block">* Explorations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 lg:col-span-1 relative h-[400px]">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="w-full h-full border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
             >
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1689143947647-062e1a24bf2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb2ludGluZyUyMG9yJTIwaG9sZGluZyUyMHNvbWV0aGluZyUyMHNvbGlkJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3ODAxMzg0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Regarde ce projet"
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center p-6 bg-red-600/20">
                 <div className="bg-white px-6 py-4 border-4 border-black transform -rotate-3 font-black uppercase text-xl text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   "C'est ici que la magie opère."
                 </div>
               </div>
             </motion.div>
          </div>

          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 border-4 border-black flex flex-col justify-between h-[400px] hover:translate-x-2 hover:-translate-y-2 transition-transform ${proj.color === 'bg-black' ? 'bg-black text-white' : 'bg-white text-black'}`}
              style={{
                boxShadow: `8px 8px 0px 0px ${proj.color === 'bg-black' ? '#0055FF' : proj.color === 'bg-blue-600' ? '#FF1100' : '#000000'}`
              }}
            >
              <div>
                <span className={`inline-block px-3 py-1 font-bold text-xs border-2 mb-6 uppercase ${proj.color === 'bg-black' ? 'border-white' : 'border-black'}`}>
                  {proj.type}
                </span>
                <h3 className="text-2xl font-black font-['Syne'] uppercase leading-tight">{proj.title}</h3>
              </div>
              
              <div className={`mt-auto w-12 h-12 rounded-full border-4 flex items-center justify-center ${proj.color === 'bg-black' ? 'border-white bg-blue-600' : 'border-black ' + proj.color}`}>
                <span className="text-white font-black font-['Syne'] text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
