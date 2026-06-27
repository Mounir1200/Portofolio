import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionHeading } from './SectionHeading';
import { fadeUp, revealOnce, staggerContainer } from '../lib/animations';
import projectImage from '../../imports/img3.png';
import { useI18n } from '../lib/i18n';

export function Projects() {
  const [flippedProjects, setFlippedProjects] = useState<Record<number, boolean>>({});
  const { t } = useI18n();

  const toggleProject = (idx: number) => {
    setFlippedProjects((current) => ({
      ...current,
      [idx]: !current[idx],
    }));
  };

  return (
    <section id="projets" className="py-16 md:py-20">
      <div className="flex flex-col gap-12">
        <div className="flex min-w-0 items-end justify-between">
          <SectionHeading>{t.projects.heading}</SectionHeading>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          {...revealOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >

          <motion.div variants={fadeUp} className="relative h-[340px] md:col-span-2 md:h-[360px] xl:col-span-1">
             <motion.div
               whileHover={{ scale: 1.02 }}
               className="w-full h-full border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
             >
               <ImageWithFallback
                 src={projectImage}
                 alt={t.projects.imageAlt}
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center p-6 bg-red-600/20">
                 <div className="font-display max-w-full break-words bg-white px-4 py-3 text-center text-base font-bold uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 sm:px-6 sm:py-4 sm:text-lg">
                   "{t.projects.featureQuote}"
                 </div>
               </div>
             </motion.div>
          </motion.div>

          {t.projects.items.map((proj, idx) => {
            const isDark = proj.color === 'bg-black';
            const isFlipped = Boolean(flippedProjects[idx]);
            const shadowColor = isDark ? '#0055FF' : proj.color === 'bg-blue-600' ? '#FF1100' : '#000000';
            const faceClasses = `group absolute inset-0 min-w-0 overflow-hidden p-5 border-4 border-black flex flex-col justify-between [backface-visibility:hidden] sm:p-6 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="h-[430px] sm:h-[410px] lg:h-[400px] [perspective:1200px]"
              >
                <motion.button
                  type="button"
                  aria-pressed={isFlipped}
                  aria-label={`${isFlipped ? t.projects.hideDescription : t.projects.showDescription} ${t.projects.descriptionLabel} : ${proj.title}`}
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
                    <div className="relative min-w-0">
                      <span className={`inline-block px-3 py-1 font-bold text-xs border-2 mb-6 uppercase ${isDark ? 'border-white' : 'border-black'}`}>
                        {proj.type}
                      </span>
                      <h3 className="font-display max-w-full break-words text-base font-bold uppercase leading-[1.12] [text-wrap:balance] sm:text-lg lg:text-xl">
                        {proj.title}
                      </h3>
                    </div>

                    <div className={`relative mt-auto w-12 h-12 rounded-full border-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-90 ${isDark ? 'border-white bg-blue-600' : 'border-black ' + proj.color}`}>
                      <span className="font-display text-xl font-bold text-white">→</span>
                    </div>
                  </div>

                  <div
                    className={`${faceClasses} [transform:rotateY(180deg)]`}
                    style={{ boxShadow: `8px 8px 0px 0px ${shadowColor}` }}
                  >
                    <div className="min-w-0">
                      <h3 className="font-display mb-4 max-w-full break-words text-sm font-bold uppercase leading-[1.15] sm:text-base lg:text-lg">
                        {proj.title}
                      </h3>
                      <p className={`break-words text-sm font-semibold leading-[1.55] ${isDark ? 'text-white/85' : 'text-black/75'}`}>
                        {proj.description}
                      </p>
                    </div>

                    <div className={`mt-6 w-12 h-12 rounded-full border-4 flex items-center justify-center ${isDark ? 'border-white bg-blue-600' : 'border-black ' + proj.color}`}>
                      <span className="font-display text-xl font-bold text-white">←</span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
