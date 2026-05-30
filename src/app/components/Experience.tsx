import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  { role: "Développeur AI", company: "ESSCA Angers", duration: "Avril 2026 - Présent", desc: "Miantenance et développement d'applications internes" },
  { role: "Projet de Fin D'étude - Développeur IA", company: "ESSCA Angers", duration: "Septembre 2025 - Février 2026", desc: "Développement, déploiement et maintenance d'applications internes" },
  { role: "Stagiaire Développeur", company: "ESSCA Angers", duration: "Avril - Juin 2025", desc: "Mise à jour et déploiement d'un chatbot\nDéveloppement et déploiement d'un annuaire RH sous IA pour la recherche d'information en langage naturel" },
  { role: "Stagiaire Data Engineer", company: "Moov Africa Burkina", duration: "Juin - Août 2024", desc:"Etude et analyse des systèmes de stockage de données à grande échelle\nIntégration des données OpenSource et simulation statique d'un data lakehouse\nIntégration des données CDR (Call Details Records) et simulation dynamique avec stockage en flux continus"},
  { role: "Opérateur de ligne de production", company: "ELYVIA SA", duration: "Juillet - Août 2023", desc:"Contrôle des formeuses et operculeuses\nContrôle qualité des barquettes de steaks\nRespect du cahier des charges et des règles d'hygiène"}
];

export function Experience() {
  return (
    <section id="experiences" className="py-20">
      <div className="bg-black text-white p-8 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(204,204,204,1)] relative">
        <h2 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase mb-12">
          Expériences
        </h2>
        
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
        <div className="absolute top-20 right-24 w-12 h-12 bg-red-600 border-4 border-white hidden md:block transform rotate-45" />

        <div className="flex flex-col gap-0 border-t-4 border-white">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col md:flex-row border-b-4 border-white py-8 gap-4 hover:bg-white hover:text-black transition-colors group px-4 -mx-4"
            >
              <div className="w-full md:w-1/4 font-bold text-lg pt-1 group-hover:text-blue-600">
                {exp.duration}
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-black font-['Syne'] uppercase">{exp.role}</h3>
                <h4 className="text-lg font-bold text-gray-400 group-hover:text-red-600 mb-4">{exp.company}</h4>
                <p className="font-medium max-w-2xl whitespace-pre-line">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
