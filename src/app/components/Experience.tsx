import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, revealOnce, staggerContainer } from '../lib/animations';
import { useI18n } from '../lib/i18n';

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experiences" className="py-16 md:py-20">
      <div className="relative min-w-0 bg-black p-5 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(204,204,204,1)] sm:p-8 md:p-16 md:shadow-[16px_16px_0px_0px_rgba(204,204,204,1)]">
        <SectionHeading withUnderline={false} className="mb-10 md:mb-12">
          {t.experience.heading}
        </SectionHeading>

        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
        <div className="absolute top-20 right-24 w-12 h-12 bg-red-600 border-4 border-white hidden md:block transform rotate-45" />

        <motion.div
          variants={staggerContainer(0.1)}
          {...revealOnce}
          className="flex min-w-0 flex-col gap-0 border-t-4 border-white"
        >
          {t.experience.items.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group flex min-w-0 flex-col gap-4 border-b-4 border-white px-0 py-6 transition-colors hover:bg-white hover:text-black sm:px-4 sm:-mx-4 md:flex-row md:py-8"
            >
              <div className="w-full break-words pt-1 text-base font-bold group-hover:text-blue-600 sm:text-lg md:w-1/4">
                {exp.duration}
              </div>
              <div className="w-full min-w-0 md:w-3/4">
                <h3 className="font-display break-words text-lg font-bold uppercase sm:text-xl">{exp.role}</h3>
                <h4 className="text-lg font-bold text-gray-400 group-hover:text-red-600 mb-4">{exp.company}</h4>
                <ul className="max-w-2xl space-y-3 break-words font-medium">
                  {exp.desc.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full border-2 border-current bg-white group-hover:bg-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
