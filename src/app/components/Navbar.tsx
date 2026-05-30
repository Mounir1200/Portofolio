import React from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const links = [
    { name: 'Profil', href: '#profil' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Projets', href: '#projets' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-black font-['Syne'] uppercase tracking-tighter bg-blue-600 text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          DABIRE Mounir.
        </motion.div>
        
        <motion.ul 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex gap-4 bg-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full"
        >
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="font-bold text-sm uppercase hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
