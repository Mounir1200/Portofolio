import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import projectImage from '../../imports/img3.png';

const projects = [
  {
    title: "Modèle de Machine Learning d'identification faciale",
    type: "Projet Académique",
    color: "bg-blue-600",
    description: "Développement d'un modèle de Machine Learning permettant de distinguer les visages réels des visages modifiés via un logiciel ou une intelligence artificielle."
  },
  {
    title: "Projet Activ'ESAIP",
    type: "Projet Académique",
    color: "bg-red-600",
    description: "Réalisation d'un outil en ligne intuitif d'estimations précises et personnalisées du coût de fabrication et de service de l'entreprise TIT, spécialisée dans la pose de réseaux de chauffage urbain."
  },
  {
    title: "Projet d'Ecoconception Numérique Design4Green D4G",
    type: "Projet Académique",
    color: "bg-black",
    description: "Réalisation d'un site web écoresponsable d'évaluation de sites web selon le RGAA (Référentiel Général d'Amélioration de l'Accessibilité)."
  },
  {
    title: "Développement d'une application web et mobile : ChartMind (en cours)",
    type: "Projet Personnel",
    color: "bg-red-600",
    description: "Développement d'une application web et mobile d'aide à la décision pour le trading (Forex, Bourse, Crypto) qui utilise l'intelligence artificielle pour assister les traders dans leur analyse technique"
  }
];

export function Projects() {
  const [flippedProjects, setFlippedProjects] = useState<Record<number, boolean>>({});

  const toggleProject = (idx: number) => {
    setFlippedProjects((current) => ({
      ...current,
      [idx]: !current[idx],
    }));
  };

  return (
    <section id="projets" className="py-16 md:py-20">
      <div className="flex flex-col gap-12">
        <div className="flex min-w-0 items-end justify-between border-b-8 border-black pb-4">
          <h2 className="break-words font-['Syne'] text-4xl font-black uppercase md:text-6xl">
            Mes Projets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          <div className="relative h-[340px] md:col-span-2 md:h-[360px] xl:col-span-1">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="w-full h-full border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
             >
               <ImageWithFallback 
                 src={projectImage}
                 alt="Regarde ce projet"
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center p-6 bg-red-600/20">
                 <div className="max-w-full break-words bg-white px-4 py-3 text-center text-base font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 sm:px-6 sm:py-4 sm:text-xl">
                   "C'est ici que la magie opère."
                 </div>
               </div>
             </motion.div>
          </div>

          {projects.map((proj, idx) => {
            const isDark = proj.color === 'bg-black';
            const isFlipped = Boolean(flippedProjects[idx]);
            const shadowColor = isDark ? '#0055FF' : proj.color === 'bg-blue-600' ? '#FF1100' : '#000000';
            const faceClasses = `absolute inset-0 min-w-0 overflow-hidden p-5 border-4 border-black flex flex-col justify-between [backface-visibility:hidden] sm:p-6 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`;

            return (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-[410px] sm:h-[380px] lg:h-[360px] [perspective:1200px]"
              >
                <motion.button
                  type="button"
                  aria-pressed={isFlipped}
                  aria-label={`${isFlipped ? 'Masquer' : 'Afficher'} la description : ${proj.title}`}
                  onClick={() => toggleProject(idx)}
                  whileHover={{ x: 8, y: -8 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="relative h-full w-full cursor-pointer text-left outline-none [transform-style:preserve-3d] focus-visible:ring-4 focus-visible:ring-blue-600"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className={faceClasses}
                    style={{ boxShadow: `8px 8px 0px 0px ${shadowColor}` }}
                  >
                    <div className="min-w-0">
                      <span className={`inline-block px-3 py-1 font-bold text-xs border-2 mb-6 uppercase ${isDark ? 'border-white' : 'border-black'}`}>
                        {proj.type}
                      </span>
                      <h3 className="max-w-full break-words font-['Syne'] text-lg font-black uppercase leading-[1.05] hyphens-auto [text-wrap:balance] sm:text-xl lg:text-2xl">
                        {proj.title}
                      </h3>
                    </div>

                    <div className={`mt-auto w-12 h-12 rounded-full border-4 flex items-center justify-center ${isDark ? 'border-white bg-blue-600' : 'border-black ' + proj.color}`}>
                      <span className="text-white font-black font-['Syne'] text-xl">→</span>
                    </div>
                  </div>

                  <div
                    className={`${faceClasses} [transform:rotateY(180deg)]`}
                    style={{ boxShadow: `8px 8px 0px 0px ${shadowColor}` }}
                  >
                    <div className="min-w-0">
                      <h3 className="mb-5 max-w-full break-words font-['Syne'] text-base font-black uppercase leading-[1.05] hyphens-auto sm:text-lg lg:text-xl">
                        {proj.title}
                      </h3>
                      <p className={`text-sm md:text-base font-bold leading-relaxed break-words ${isDark ? 'text-white/85' : 'text-black/75'}`}>
                        {proj.description}
                      </p>
                    </div>

                    <div className={`mt-6 w-12 h-12 rounded-full border-4 flex items-center justify-center ${isDark ? 'border-white bg-blue-600' : 'border-black ' + proj.color}`}>
                      <span className="text-white font-black font-['Syne'] text-xl">←</span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
