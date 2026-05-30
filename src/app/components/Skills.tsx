import React from 'react';
import { motion } from 'motion/react';

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
    items: ["Ollama", "Hugging Face", "OpenAI", "Claude AI", "Gemini", "ElevenLabs", "DeepGram", "Mistral AI"]
  },
  {
    category: "Data",
    color: "bg-gray-200",
    textColor: "text-black",
    items: ["SQL", "MariaDB", "NoSQL", "MongoDB", "Oracle", "SQL Server", "Neon", "Mistral AI", "Apache Hadoop", "Apache Spark", "Apache Kafka", "PowerBI"]
  },
  {
    category: "Outils",
    color: "bg-gray-200",
    textColor: "text-black",
    items: ["Figma", "Git", "PyCharm", "VS Code", "Google Stich", "Codex", "Claude Code", "Antigravity", "Claude Design"]
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
    <section id="competences" className="py-20 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-black font-['Syne'] uppercase border-b-8 border-black pb-4 mb-12">
        Compétences
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${group.color} ${group.textColor} border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col`}
          >
            <h3 className="text-2xl font-black font-['Syne'] uppercase border-b-4 border-current pb-2 mb-6">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, itemIdx) => (
                <motion.span
                  key={itemIdx}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 text-base md:text-lg font-bold border-2 ${group.textColor === 'text-white' ? 'border-white bg-black/20' : 'border-black bg-white'} shadow-[2px_2px_0px_0px_currentColor]`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 w-full bg-black py-4 border-y-4 border-black transform -rotate-2 scale-110 flex overflow-hidden">
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
