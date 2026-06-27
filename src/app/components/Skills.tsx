import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, revealOnce, staggerContainer } from '../lib/animations';
import { useI18n } from '../lib/i18n';

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="competences" className="overflow-hidden py-16 md:py-20">
      <SectionHeading className="mb-12">{t.skills.heading}</SectionHeading>

      <motion.div
        variants={staggerContainer(0.1)}
        {...revealOnce}
        className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2"
      >
        {t.skills.groups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className={`${group.color} ${group.textColor} flex min-w-0 flex-col border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 md:p-8 md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
          >
            <h3 className="font-display mb-6 break-words border-b-4 border-current pb-2 text-lg font-bold uppercase sm:text-xl">
              {group.category}
            </h3>
            <div className="flex min-w-0 flex-wrap gap-3">
              {group.items.map((item, itemIdx) => (
                <motion.span
                  key={itemIdx}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className={`max-w-full break-words px-3 py-2 text-sm font-bold border-2 sm:px-4 sm:text-base ${group.textColor === 'text-white' ? 'border-white bg-black/20' : 'border-black bg-white'} shadow-[2px_2px_0px_0px_currentColor]`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex w-full overflow-hidden bg-black py-4 border-y-4 border-black transform -rotate-2 scale-105 md:mt-20 md:scale-110">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="font-display flex whitespace-nowrap gap-8 text-xl font-bold text-white uppercase md:text-2xl"
        >
          {Array(10).fill(t.skills.marquee).map((text, i) => <span key={i}>{text}</span>)}
        </motion.div>
      </div>
    </section>
  );
}
