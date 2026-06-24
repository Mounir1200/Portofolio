import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { springEntrance } from '../lib/animations';
import profileImage from '../../imports/img1.jpg';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallaxe douce : le portrait remonte légèrement pendant le défilement.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      id="profil"
      className="mt-8 flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 md:mt-12 lg:flex-row lg:gap-12"
    >
      <div className="relative w-full min-w-0 flex-1">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="absolute -left-3 -top-5 h-16 w-16 rounded-full border-4 border-black bg-red-600 sm:-left-8 sm:-top-8 sm:h-28 sm:w-28 lg:-left-10 lg:-top-10 lg:h-32 lg:w-32"
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...springEntrance, delay: 0.2 }}
          className="relative z-10 w-full min-w-0"
        >
          <h1 className="max-w-full break-words font-['Syne'] text-3xl font-black uppercase leading-none sm:text-5xl lg:text-7xl">
            Bonjour,
            <br />
            <span className="text-blue-600 drop-shadow-[4px_4px_0px_#000]">je suis</span>
            <br />
            un profil
            <br />
            <span className="bg-black text-white px-4 inline-block transform -rotate-2">curieux.</span>
          </h1>
          <p className="mt-6 max-w-xs break-words border-l-4 border-red-600 pl-4 text-base font-bold sm:mt-8 sm:max-w-md sm:text-xl">
            Je m'appelle Mounir. Bienvenue dans mon portfolio. J'aime partir d'une idée, la comprendre, puis lui donner forme avec soin, méthode et simplicité.
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ y: portraitY, opacity: portraitOpacity }}
        className="relative w-full max-w-[18rem] flex-1 sm:max-w-sm lg:max-w-md"
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...springEntrance, delay: 0.4 }}
          whileHover={{ rotate: -1.5, scale: 1.02 }}
          className="relative w-full aspect-[3/4] overflow-hidden rounded-t-full border-4 border-black bg-gray-300 shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(255,17,0,1)]"
        >
          <ImageWithFallback
            src={profileImage}
            alt="Portrait de Mounir DABIRE"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Élément flottant décoratif (neutralisé par prefers-reduced-motion via MotionConfig). */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 -left-4 flex h-16 w-16 rotate-12 transform items-center justify-center border-4 border-black bg-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:-left-8 sm:h-20 sm:w-20 md:-left-12 md:h-24 md:w-24"
        >
          <span className="font-['Syne'] font-black text-white text-3xl">*</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
