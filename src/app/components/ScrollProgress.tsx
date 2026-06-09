import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Barre de progression de lecture fixée en haut de page.
 * SRP : ce composant n'a qu'une responsabilité — refléter l'avancement du scroll.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-2 origin-left bg-red-600 border-b-4 border-black"
    />
  );
}
