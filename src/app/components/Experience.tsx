import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, revealOnce, staggerContainer } from '../lib/animations';

const experiences = [
  { role: "Développeur AI", company: "ESSCA Angers", duration: "Avril 2026 - Présent", desc: "Conception, développement et maintenance d'agents conversationnels et de systèmes RAG avancés pour la recherche d'informations en langage naturel.\nSélection, ingénierie de prompt et déploiement de modèles de pointe (OpenAI, Claude AI)\nConception d'interfaces utilisateur modernes et réactives sous React et Tailwind CSS connectées de bout en bout à des API et pipelines d'IA générative.\nIndustrialisation et mise en production sécurisée des solutions d'intelligence artificielle sur l'infrastructure Azure." },
  { role: "Projet de Fin D'étude - Développeur IA", company: "ESSCA Angers", duration: "Septembre 2025 - Février 2026", desc: "Développement, déploiement et maintenance d'applications internes" },
  { role: "Stagiaire Développeur", company: "ESSCA Angers", duration: "Avril - Juin 2025", desc: "Mise à jour et déploiement d'un chatbot\nDéveloppement et déploiement d'un annuaire RH sous IA pour la recherche d'information en langage naturel" },
  { role: "Stagiaire Data Engineer", company: "Moov Africa Burkina", duration: "Juin - Août 2024", desc:"Etude et analyse des systèmes de stockage de données à grande échelle\nIntégration des données OpenSource et simulation statique d'un data lakehouse\nIntégration des données CDR (Call Details Records) et simulation dynamique avec stockage en flux continus"},
  { role: "Opérateur de ligne de production", company: "ELYVIA SA", duration: "Juillet - Août 2023", desc:"Contrôle des formeuses et operculeuses\nContrôle qualité des barquettes de steaks\nRespect du cahier des charges et des règles d'hygiène"}
];

export function Experience() {
  return (
    <section id="experiences" className="py-16 md:py-20">
      <div className="relative min-w-0 bg-black p-5 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(204,204,204,1)] sm:p-8 md:p-16 md:shadow-[16px_16px_0px_0px_rgba(204,204,204,1)]">
        <SectionHeading withUnderline={false} className="mb-10 md:mb-12">
          Expériences
        </SectionHeading>

        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
        <div className="absolute top-20 right-24 w-12 h-12 bg-red-600 border-4 border-white hidden md:block transform rotate-45" />

        <motion.div
          variants={staggerContainer(0.1)}
          {...revealOnce}
          className="flex min-w-0 flex-col gap-0 border-t-4 border-white"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group flex min-w-0 flex-col gap-4 border-b-4 border-white px-0 py-6 transition-colors hover:bg-white hover:text-black sm:px-4 sm:-mx-4 md:flex-row md:py-8"
            >
              <div className="w-full break-words pt-1 text-base font-bold group-hover:text-blue-600 sm:text-lg md:w-1/4">
                {exp.duration}
              </div>
              <div className="w-full min-w-0 md:w-3/4">
                <h3 className="break-words font-['Syne'] text-xl font-black uppercase sm:text-2xl">{exp.role}</h3>
                <h4 className="text-lg font-bold text-gray-400 group-hover:text-red-600 mb-4">{exp.company}</h4>
                <p className="max-w-2xl whitespace-pre-line break-words font-medium">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
