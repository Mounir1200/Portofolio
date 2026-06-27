import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { revealOnce, slideInLeft, slideInRight } from '../lib/animations';
import { useI18n } from '../lib/i18n';

export function Hobbies() {
  const { t } = useI18n();

  return (
    <section id="hobbies" className="py-16 md:py-20">
      <SectionHeading className="mb-12">{t.hobbies.heading}</SectionHeading>

      <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
        {/* Centres d'intérêt */}
        <motion.div
          variants={slideInLeft}
          {...revealOnce}
          className="relative min-w-0 overflow-hidden bg-blue-600 p-5 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:p-12 md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600 rounded-full border-8 border-black opacity-90" />

          <h3 className="font-display relative z-10 mb-8 break-words text-xl font-bold uppercase sm:text-2xl">{t.hobbies.interestsHeading}</h3>

          <ul className="relative z-10 flex min-w-0 flex-col gap-6 text-base font-bold sm:text-lg">
            {t.hobbies.interests.map((interest, idx) => (
              <li
                key={idx}
                className="break-words border-l-4 border-white pl-4 transition-all hover:pl-6 cursor-default"
              >
                {interest}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Loisirs */}
        <motion.div
          variants={slideInRight}
          {...revealOnce}
          className="relative min-w-0 overflow-hidden bg-white p-5 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,17,0,1)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:p-8 md:p-12 md:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(255,17,0,1)]"
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black border-8 border-white transform rotate-45 opacity-10" />

          <h3 className="font-display relative z-10 mb-8 break-words text-xl font-bold uppercase sm:text-2xl">{t.hobbies.leisuresHeading}</h3>

          <ul className="relative z-10 flex min-w-0 flex-col gap-6 text-base font-bold sm:text-lg">
            {t.hobbies.leisures.map((leisure, idx) => (
              <li
                key={idx}
                className="break-words border-l-4 border-black pl-4 transition-all hover:pl-6 cursor-default"
              >
                {leisure}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
