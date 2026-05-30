import React from 'react';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ebebeb] font-['Inter',sans-serif] text-black selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="flex flex-col gap-32 pb-32 pt-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <Hero />
        <Journey />
        <Projects />
        <Experience />
        <Skills />
        <Hobbies />
      </main>
      <Contact />
    </div>
  );
}
