import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, revealOnce, staggerContainer } from '../lib/animations';

const skillGroups = [
  {
    category: "Développement",
    color: "bg-blue-600",
    textColor: "text-white",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "Python"]
  },
  {
    category: "IA",
    color: "bg-red-600",
    textColor: "text-white",
    items: ["Ollama", "Hugging Face", "OpenAI", "Claude AI", "Gemini", "ElevenLabs", "Deepgram", "Mistral AI"]
  },
  {
    category: "Data",
    color: "bg-gray-200",
    textColor: "text-black",
    items: ["SQL", "MariaDB", "NoSQL", "MongoDB", "Oracle", "SQL Server", "Neon", "Mistral AI", "Apache Hadoop", "Apache Spark", "Apache Kafka", "Power BI"]
  },
  {
    category: "Outils",
    color: "bg-gray-200",
    textColor: "text-black",
    items: ["Figma", "Git", "PyCharm", "VS Code", "Google Stitch", "Codex", "Claude Code", "Antigravity", "Claude Design"]
  },
  {
    category: "DevOps & Cloud",
    color: "bg-red-600",
    textColor: "text-white",
    items: ["GitHub Workflow", "Azure (DevOps, Web App, AI Foundry)", "Render", "LiveKit"]
  },
  {
    category: "Atouts",
    color: "bg-blue-600",
    textColor: "text-white",
    items: ["Autonomie", "Adaptabilité", "Curiosité"]
  }
];

export function Skills() {
  return (
    <section id="competences" className="overflow-hidden py-16 md:py-20">
      <SectionHeading className="mb-12">Compétences</SectionHeading>

      <motion.div
        variants={staggerContainer(0.1)}
        {...revealOnce}
        className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className={`${group.color} ${group.textColor} flex min-w-0 flex-col border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-6 md:p-8 md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
          >
            <h3 className="mb-6 break-words border-b-4 border-current pb-2 font-['Syne'] text-xl font-black uppercase sm:text-2xl">
              {group.category}
            </h3>
            <div className="flex min-w-0 flex-wrap gap-3">
              {group.items.map((item, itemIdx) => (
                <motion.span
                  key={itemIdx}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className={`max-w-full break-words px-3 py-2 text-sm font-bold border-2 sm:px-4 sm:text-base md:text-lg ${group.textColor === 'text-white' ? 'border-white bg-black/20' : 'border-black bg-white'} shadow-[2px_2px_0px_0px_currentColor]`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex w-full overflow-hidden bg-black py-4 border-y-4 border-black transform -rotate-2 scale-105 md:mt-20 md:scale-110">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 text-2xl md:text-3xl font-black font-['Syne'] text-white uppercase"
        >
          {Array(10).fill("SIMPLE - CURIEUX - ATTENTIF - ").map((t, i) => <span key={i}>{t}</span>)}
        </motion.div>
      </div>
    </section>
  );
}
