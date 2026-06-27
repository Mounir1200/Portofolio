import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { staggerContainer } from '../lib/animations';
import { Locale, useI18n } from '../lib/i18n';

const LOCALES: Locale[] = ['fr', 'en'];

const mobilePanel = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const mobileLink = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={`flex h-12 shrink-0 items-center overflow-hidden bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}
    >
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={locale === option}
          onClick={() => setLocale(option)}
          className={`font-display h-full px-3 text-xs font-bold uppercase transition-colors sm:px-4 ${
            locale === option ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display max-w-[calc(100vw-11rem)] truncate bg-blue-600 px-3 py-2 text-sm font-bold uppercase text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 sm:max-w-[calc(100vw-13rem)] sm:px-4 sm:text-lg md:text-xl lg:max-w-none"
          >
            DABIRE Mounir.
          </motion.a>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex gap-4 whitespace-nowrap bg-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full"
          >
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-bold text-sm uppercase transition-colors hover:text-red-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>

          <div className="flex shrink-0 items-center gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <LanguageToggle />
            </motion.div>

          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t.nav.openMenu}
            aria-expanded={isMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex h-12 w-12 items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 active:translate-y-0 lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={3} />
          </motion.button>
          </div>
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
              <span className="font-display text-xl font-bold uppercase text-white">
                {t.nav.menu}
              </span>
              <LanguageToggle />
              <button
                type="button"
                onClick={closeMenu}
                aria-label={t.nav.closeMenu}
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
              {t.nav.links.map((link) => (
                <motion.li key={link.href} variants={mobileLink}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display block break-words border-l-8 border-white py-2 pl-5 text-3xl font-bold uppercase leading-tight text-white transition-all hover:translate-x-2 hover:text-black sm:text-4xl"
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
