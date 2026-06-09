import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, revealOnce } from '../lib/animations';

interface SectionHeadingProps {
  children: React.ReactNode;
  /** Affiche le soulignement brutaliste sous le titre (true par défaut). */
  withUnderline?: boolean;
  /** Classes additionnelles (ex. variante claire sur fond sombre). */
  className?: string;
}

/**
 * Titre de section uniformisé (DRY) : même typographie Syne, même comportement
 * de révélation au scroll. Le soulignement se déploie de gauche à droite.
 */
export function SectionHeading({
  children,
  withUnderline = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.h2
      variants={fadeUp}
      {...revealOnce}
      className={`relative break-words font-['Syne'] text-4xl font-black uppercase md:text-6xl ${className}`}
    >
      {children}
      {withUnderline && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-4 block h-2 w-full origin-left bg-current"
        />
      )}
    </motion.h2>
  );
}
