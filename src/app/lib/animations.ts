import type { Transition, Variants } from 'motion/react';

/**
 * Source unique de vérité pour le langage de mouvement du portfolio (DRY).
 * Centraliser les variants évite de redéfinir les mêmes objets initial/animate
 * dans chaque composant et garantit un rythme cohérent (motion-consistency).
 *
 * Note accessibilité : l'app est enveloppée dans <MotionConfig reducedMotion="user">,
 * donc Framer Motion neutralise automatiquement les animations de transform/layout
 * pour les utilisateurs ayant activé "prefers-reduced-motion". Inutile de dupliquer
 * cette logique ici.
 */

const REVEAL_DISTANCE = 28;

/** Spring naturel pour les entrées (spring-physics). */
export const springEntrance: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

/** Glissement fluide pour les éléments larges (images, blocs). */
export const easeEntrance: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1], // ease-out prononcé
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  show: { opacity: 1, y: 0, transition: springEntrance },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: easeEntrance },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -REVEAL_DISTANCE * 2 },
  show: { opacity: 1, x: 0, transition: easeEntrance },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: REVEAL_DISTANCE * 2 },
  show: { opacity: 1, x: 0, transition: easeEntrance },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -4 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: springEntrance },
};

/**
 * Conteneur orchestrant l'apparition échelonnée de ses enfants (stagger-sequence).
 * Le délai par défaut (~50ms) suit la recommandation Material Design.
 */
export function staggerContainer(staggerChildren = 0.05): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren: 0.1 } },
  };
}

/** Props partagées pour révéler un bloc une seule fois au scroll. */
export const revealOnce = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '-80px' },
} as const;
