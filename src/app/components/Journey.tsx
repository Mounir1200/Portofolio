import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionHeading } from './SectionHeading';
import { popIn, revealOnce, slideInRight, staggerContainer } from '../lib/animations';
import journeyImage from '../../imports/img2.jpg';

const education = [
  { year: "2022 - 2026", title: "Diplôme d'ingénieur", school: "ESAIP, Angers, France", color: "bg-blue-600" },
  { year: "Septembre 2024 - Février 2025", title: "Programme d'échange ERASMUS", school:"RWU, Hochschule Ravensburg-Weingarten, Ravensburg, Allemagne", color: "bg-blue-600"},
  { year: "Janvier - Juin 2023", title: "Programme d'échange ERASMUS", school: "KTU, Kaunas University of Technology, Kaunas, Lituanie", color: "bg-red-600" },
  { year: "2020 - 2022", title: "Classes préparatoires aux grandes écoles", school: "CPGE - La Salle, Ouagadougou, Burkina Faso", color: "bg-black" }
];

export function Journey() {
  return (
    <section id="parcours" className="relative py-16 md:py-20">
      <div className="flex min-w-0 flex-col items-center gap-10 md:flex-row md:gap-12">

        <div className="relative w-full max-w-[18rem] sm:max-w-sm md:w-1/3 md:max-w-none">
          <motion.div
            variants={popIn}
            {...revealOnce}
            whileHover={{ rotate: 1.5, scale: 1.02 }}
            className="relative z-10 aspect-[4/5] w-full border-4 border-black bg-white shadow-[-8px_8px_0px_0px_rgba(0,85,255,1)] sm:shadow-[-16px_16px_0px_0px_rgba(0,85,255,1)]"
          >
             <ImageWithFallback
                src={journeyImage}
                alt="En marche vers l'avenir"
                className="w-full h-full object-cover"
              />
          </motion.div>
          <div className="absolute -z-0 top-1/2 -right-10 hidden h-32 w-32 rounded-full border-4 border-black bg-gray-300 sm:block md:-right-20 md:h-40 md:w-40" />
        </div>

        <div className="flex w-full min-w-0 flex-col gap-8 md:w-2/3">
          <SectionHeading>Mon Parcours</SectionHeading>

          <motion.div
            variants={staggerContainer(0.12)}
            {...revealOnce}
            className="relative mt-8 flex min-w-0 flex-col gap-10 border-l-4 border-black pl-5 sm:border-l-8 sm:pl-8 md:gap-12"
          >
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={slideInRight} className="relative min-w-0">
                <div className={`absolute -left-[35px] top-0 h-6 w-6 rounded-full border-4 border-black sm:-left-[52px] sm:h-8 sm:w-8 ${edu.color}`} />
                <div className="min-w-0 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-6 sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <span className="mb-4 inline-block max-w-full break-words bg-gray-200 px-3 py-1 font-bold border-2 border-black">{edu.year}</span>
                  <h3 className="break-words font-['Syne'] text-base font-black uppercase [overflow-wrap:anywhere] sm:text-xl">{edu.title}</h3>
                  <p className="mt-2 break-words font-bold text-gray-600 [overflow-wrap:anywhere]">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
