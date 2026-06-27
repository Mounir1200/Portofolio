import React from 'react';
import { MotionConfig } from 'motion/react';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { I18nProvider } from './lib/i18n';

export default function App() {
  // reducedMotion="user" : Framer Motion neutralise les animations de transform/layout
  // dès que l'utilisateur a activé "prefers-reduced-motion" (accessibilité, une seule source).
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <div className="font-body min-h-screen w-full overflow-x-hidden bg-[#ebebeb] text-black selection:bg-red-600 selection:text-white">
          <ScrollProgress />
          <Navbar />
          <main className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-20 overflow-x-hidden px-4 pb-24 pt-24 sm:gap-24 sm:px-6 md:gap-32 md:px-12 md:pb-32">
            <Hero />
            <Journey />
            <Projects />
            <Experience />
            <Skills />
            <Hobbies />
          </main>
          <Contact />
        </div>
      </MotionConfig>
    </I18nProvider>
  );
}
