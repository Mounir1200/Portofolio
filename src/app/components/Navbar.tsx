import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { staggerContainer } from '../lib/animations';

const NAV_LINKS = [
  { name: 'Profil', href: '#profil' },
  { name: 'Parcours', href: '#parcours' },
  { name: 'Projets', href: '#projets' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Compétences', href: '#competences' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

const mobilePanel = {
  hidden: { opacity: 0, y: '-100%' },
  show: { opacity: 1, y: '0%' },
};

const mobileLink = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Empêche le défilement de la page sous le panneau plein écran ouvert.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex min-w-0 justify-between items-center gap-3 pointer-events-auto">
          <motion.a
            href="#profil"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-[calc(100vw-6rem)] truncate bg-blue-600 px-3 py-2 font-['Syne'] text-base font-black uppercase text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-xl md:text-2xl"
          >
            DABIRE Mounir.
          </motion.a>

          <motion.ul
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex gap-4 whitespace-nowrap bg-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-bold text-sm uppercase transition-colors hover:text-red-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={isMenuOpen}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex h-12 w-12 items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 active:translate-y-0 lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={3} />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobilePanel}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-0 z-[70] flex flex-col bg-blue-600 lg:hidden"
          >
            <div className="flex items-center justify-between border-b-8 border-black p-4">
              <span className="font-['Syne'] text-2xl font-black uppercase text-white">
                Menu
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu de navigation"
                className="flex h-12 w-12 items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5"
              >
                <X className="h-6 w-6" strokeWidth={3} />
              </button>
            </div>

            <motion.ul
              variants={staggerContainer(0.06)}
              initial="hidden"
              animate="show"
              className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto p-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.name} variants={mobileLink}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block break-words border-l-8 border-white py-2 pl-5 font-['Syne'] text-4xl font-black uppercase text-white transition-all hover:translate-x-2 hover:text-black sm:text-5xl"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
