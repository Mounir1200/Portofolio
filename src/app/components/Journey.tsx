import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const education = [
  { year: "2022 - 2026", title: "Diplôme d'Ingénieur", school: "ESAIP, Angers, France", color: "bg-blue-600" },
  { year: "Septembre 2024 - Février 2025", title: "Programme d'échange ERASMUS", school:"RWU, Hochschule Ravensburg-Weingarten, Ravensburg, Allemagne", color: "bg-blue-600"},
  { year: "Janvier - Juin 2023", title: "Programme d'échange ERASMUS", school: "KTU, Kaunas University of Technology, Kaunas, Lituanie", color: "bg-red-600" },
  { year: "2020 - 2022", title: "Classes Préparatoires aux Grandes Ecoles", school: "CPGE - La Salle, Ouagadougou, Burkina Faso", color: "bg-black" }
];

export function Journey() {
  return (
    <section id="parcours" className="relative py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-1/3 relative">
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/5] border-4 border-black bg-white shadow-[-16px_16px_0px_0px_rgba(0,85,255,1)] relative z-10"
          >
             <ImageWithFallback 
                src="src/imports/img2.jpg" 
                alt="En marche vers l'avenir"
                className="w-full h-full object-cover"
              />
          </motion.div>
          <div className="absolute -z-0 top-1/2 -right-20 w-40 h-40 bg-gray-300 rounded-full border-4 border-black" />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase border-b-8 border-black pb-4">
            Mon Parcours
          </h2>
          
          <div className="relative pl-8 border-l-8 border-black flex flex-col gap-12 mt-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className={`absolute -left-[52px] top-0 w-8 h-8 rounded-full border-4 border-black ${edu.color}`} />
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <span className="inline-block px-3 py-1 bg-gray-200 border-2 border-black font-bold mb-4">{edu.year}</span>
                  <h3 className="text-xl font-black font-['Syne'] uppercase">{edu.title}</h3>
                  <p className="font-bold text-gray-600 mt-2">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
