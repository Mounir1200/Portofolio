import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'fr' | 'en';

const LOCALE_STORAGE_KEY = 'portfolio-locale';

export const translations = {
  fr: {
    meta: {
      title: 'Portfolio - Mounir DABIRE',
      description: 'Portfolio personnel de Mounir DABIRE : profil, parcours, projets, compétences et contact.',
    },
    nav: {
      links: [
        { name: 'Profil', href: '#profil' },
        { name: 'Parcours', href: '#parcours' },
        { name: 'Projets', href: '#projets' },
        { name: 'Expériences', href: '#experiences' },
        { name: 'Compétences', href: '#competences' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Contact', href: '#contact' },
      ],
      menu: 'Menu',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
      languageLabel: 'Choisir la langue du portfolio',
    },
    hero: {
      greeting: 'Bonjour,',
      iAm: 'je suis',
      profile: 'un profil',
      adjective: 'curieux.',
      intro: "Je m'appelle Mounir. Bienvenue dans mon portfolio. J'aime partir d'une idée, la comprendre, puis lui donner forme avec soin, méthode et simplicité.",
      imageAlt: 'Portrait de Mounir DABIRE',
    },
    journey: {
      heading: 'Mon Parcours',
      imageAlt: "En marche vers l'avenir",
      education: [
        { year: '2022 - 2026', title: "Diplôme d'ingénieur", school: 'ESAIP, Angers, France', color: 'bg-blue-600' },
        { year: 'Septembre 2024 - Février 2025', title: "Programme d'échange ERASMUS", school: 'RWU, Hochschule Ravensburg-Weingarten, Ravensburg, Allemagne', color: 'bg-blue-600' },
        { year: 'Janvier - Juin 2023', title: "Programme d'échange ERASMUS", school: 'KTU, Kaunas University of Technology, Kaunas, Lituanie', color: 'bg-red-600' },
        { year: '2020 - 2022', title: 'Classes préparatoires aux grandes écoles', school: 'CPGE - La Salle, Ouagadougou, Burkina Faso', color: 'bg-black' },
      ],
    },
    projects: {
      heading: 'Mes Projets',
      imageAlt: 'Regarde ce projet',
      featureQuote: "C'est ici que la magie opère.",
      showDescription: 'Afficher',
      hideDescription: 'Masquer',
      descriptionLabel: 'la description',
      items: [
        {
          title: "Modèle de machine learning pour l'identification faciale",
          type: 'Projet académique',
          color: 'bg-blue-600',
          description: "Développement d'un modèle de machine learning permettant de distinguer les visages réels des visages modifiés via un logiciel ou une intelligence artificielle.",
        },
        {
          title: "Projet Activ'ESAIP",
          type: 'Projet académique',
          color: 'bg-red-600',
          description: "Réalisation d'un outil en ligne intuitif permettant d'obtenir des estimations précises et personnalisées du coût de fabrication et de service de l'entreprise TIT, spécialisée dans la pose de réseaux de chauffage urbain.",
        },
        {
          title: "Projet d'écoconception numérique Design4Green D4G",
          type: 'Projet académique',
          color: 'bg-black',
          description: "Réalisation d'un site web écoresponsable d'évaluation de sites web selon le RGAA (Référentiel général d'amélioration de l'accessibilité).",
        },
        {
          title: "Développement d'une application web et mobile : ChartMind (en cours)",
          type: 'Projet personnel',
          color: 'bg-red-600',
          description: "Développement d'une application web et mobile d'aide à la décision pour le trading (Forex, Bourse, Crypto) qui utilise l'intelligence artificielle (Mistral AI) pour assister les traders en herbe dans leur analyse technique.",
        },
        {
          title: "Développement d'un serveur MCP de mémoire à long terme pour agents de code : UrdWell",
          type: 'Projet personnel · Open source',
          color: 'bg-blue-600',
          description: "Développement d'un serveur MCP de mémoire à long terme pour agents de code, conçu pour conserver un contexte utile entre les sessions. UrdWell a pour but d'aider les agents à retrouver des informations pertinentes, actuelles et exploitables dans un projet logiciel.",
        },
      ],
    },
    experience: {
      heading: 'Expériences',
      items: [
        {
          role: 'Développeur IA',
          company: 'ESSCA Angers',
          duration: 'Avril 2026 - présent',
          desc: [
            "Conception, développement et maintenance d'agents conversationnels et de systèmes RAG avancés pour la recherche d'informations en langage naturel.",
            'Sélection, ingénierie de prompts et déploiement de modèles de pointe (OpenAI, Claude AI)',
            "Conception d'interfaces utilisateur modernes et réactives sous React et Tailwind CSS connectées de bout en bout à des API et pipelines d'IA générative.",
            "Industrialisation et mise en production sécurisée des solutions d'intelligence artificielle sur l'infrastructure Azure.",
            "Conception, développement et maintenance d'outils internes basés sur l'IA",
          ],
        },
        {
          role: "Projet de fin d'études - Développeur IA",
          company: 'ESSCA Angers',
          duration: 'Septembre 2025 - Février 2026',
          desc: [
            "Conception et développement d'un écosystème d'agents conversationnels basé sur une architecture RAG.",
            "Réalisation de l'interface utilisateur réactive sous React à partir de maquettes Figma.",
            "Déploiement sur l'infrastructure interne Azure et interfaçage de la solution avec les plateformes internes.",
          ],
        },
        {
          role: 'Stagiaire Développeur',
          company: 'ESSCA Angers',
          duration: 'Avril - Juin 2025',
          desc: [
            "Mise à jour et déploiement d'un agent conversationnel",
            "Développement et déploiement d'un annuaire RH sous IA pour la recherche d'informations en langage naturel",
          ],
        },
        {
          role: 'Stagiaire Data Engineer',
          company: 'Moov Africa Burkina',
          duration: 'Juin - Août 2024',
          desc: [
            "Étude et analyse des systèmes de stockage de données à grande échelle",
            "Intégration des données open source et simulation statique d'un data lakehouse",
            'Intégration des données CDR (Call Details Records) et simulation dynamique avec stockage en flux continu',
          ],
        },
        {
          role: 'Opérateur de ligne de production',
          company: 'ELYVIA SA',
          duration: 'Juillet - Août 2023',
          desc: [
            'Contrôle des formeuses et operculeuses',
            'Contrôle qualité des barquettes de steaks',
            "Respect du cahier des charges et des règles d'hygiène",
          ],
        },
      ],
    },
    skills: {
      heading: 'Compétences',
      marquee: 'SIMPLE - CURIEUX - ATTENTIF - ',
      groups: [
        { category: 'Développement', color: 'bg-blue-600', textColor: 'text-white', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'Python'] },
        { category: 'IA', color: 'bg-red-600', textColor: 'text-white', items: ['Ollama', 'Hugging Face', 'OpenAI', 'Claude AI', 'Gemini', 'ElevenLabs', 'Deepgram', 'Mistral AI'] },
        { category: 'Data', color: 'bg-gray-200', textColor: 'text-black', items: ['SQL', 'MariaDB', 'NoSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Neon', 'Mistral AI', 'Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Power BI'] },
        { category: 'Outils', color: 'bg-gray-200', textColor: 'text-black', items: ['Figma', 'Git', 'PyCharm', 'VS Code', 'Google Stitch', 'Codex', 'Claude Code', 'Antigravity', 'Claude Design'] },
        { category: 'DevOps & Cloud', color: 'bg-red-600', textColor: 'text-white', items: ['GitHub Workflow', 'Azure (DevOps, Web App, AI Foundry)', 'Render', 'LiveKit'] },
        { category: 'Atouts', color: 'bg-blue-600', textColor: 'text-white', items: ['Autonomie', 'Adaptabilité', 'Curiosité'] },
      ],
    },
    hobbies: {
      heading: 'Hobbies',
      interestsHeading: "Centres d'intérêt",
      leisuresHeading: 'Loisirs',
      interests: ['Actualités tech & IA', 'Actualités jeux vidéo', 'Actualités sportives', 'Cuisine'],
      leisures: ['Lecture', 'Musculation', 'Gaming', 'Programmation et développement web/mobile'],
    },
    contact: {
      heading: 'Parlons-en.',
      emailCopied: 'Email copié',
      copyright: 'Portfolio de Mounir DABIRE.',
    },
  },
  en: {
    meta: {
      title: 'Portfolio - Mounir DABIRE',
      description: "Mounir DABIRE's personal portfolio: profile, journey, projects, skills, and contact.",
    },
    nav: {
      links: [
        { name: 'Profile', href: '#profil' },
        { name: 'Journey', href: '#parcours' },
        { name: 'Projects', href: '#projets' },
        { name: 'Experience', href: '#experiences' },
        { name: 'Skills', href: '#competences' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Contact', href: '#contact' },
      ],
      menu: 'Menu',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      languageLabel: 'Choose the portfolio language',
    },
    hero: {
      greeting: 'Hello,',
      iAm: 'I am',
      profile: 'a curious',
      adjective: 'profile.',
      intro: "I'm Mounir. Welcome to my portfolio. I like starting from an idea, understanding it, then shaping it with care, method, and simplicity.",
      imageAlt: 'Portrait of Mounir DABIRE',
    },
    journey: {
      heading: 'My Journey',
      imageAlt: 'Moving toward the future',
      education: [
        { year: '2022 - 2026', title: 'Engineering degree', school: 'ESAIP, Angers, France', color: 'bg-blue-600' },
        { year: 'September 2024 - February 2025', title: 'ERASMUS exchange program', school: 'RWU, Hochschule Ravensburg-Weingarten, Ravensburg, Germany', color: 'bg-blue-600' },
        { year: 'January - June 2023', title: 'ERASMUS exchange program', school: 'KTU, Kaunas University of Technology, Kaunas, Lithuania', color: 'bg-red-600' },
        { year: '2020 - 2022', title: 'Preparatory classes for engineering schools', school: 'CPGE - La Salle, Ouagadougou, Burkina Faso', color: 'bg-black' },
      ],
    },
    projects: {
      heading: 'My Projects',
      imageAlt: 'Take a look at this project',
      featureQuote: 'This is where the work takes shape.',
      showDescription: 'Show',
      hideDescription: 'Hide',
      descriptionLabel: 'the description',
      items: [
        {
          title: 'Machine learning model for facial identification',
          type: 'Academic project',
          color: 'bg-blue-600',
          description: 'Development of a machine learning model designed to distinguish real faces from faces modified with software or artificial intelligence.',
        },
        {
          title: "Activ'ESAIP project",
          type: 'Academic project',
          color: 'bg-red-600',
          description: "Creation of an intuitive online tool that produces accurate, personalized estimates for TIT's manufacturing and service costs in district heating network installation.",
        },
        {
          title: 'Digital eco-design project Design4Green D4G',
          type: 'Academic project',
          color: 'bg-black',
          description: 'Creation of an eco-responsible website for assessing websites according to RGAA accessibility guidelines.',
        },
        {
          title: 'Web and mobile application development: ChartMind (in progress)',
          type: 'Personal project',
          color: 'bg-red-600',
          description: 'Development of a web and mobile decision-support app for trading (Forex, stocks, crypto), using artificial intelligence (Mistral AI) to assist beginner traders with technical analysis.',
        },
        {
          title: 'Long-term memory MCP server for coding agents: UrdWell',
          type: 'Personal project · Open source',
          color: 'bg-blue-600',
          description: 'Development of a long-term memory MCP server for coding agents, designed to preserve useful context across sessions. UrdWell aims to help agents retrieve relevant, current, and actionable information inside a software project.',
        },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          role: 'AI Developer',
          company: 'ESSCA Angers',
          duration: 'April 2026 - present',
          desc: [
            'Design, development, and maintenance of conversational agents and advanced RAG systems for natural-language information retrieval.',
            'Model selection, prompt engineering, and deployment of state-of-the-art models (OpenAI, Claude AI)',
            'Design of modern, responsive React and Tailwind CSS interfaces connected end-to-end to APIs and generative AI pipelines.',
            'Secure industrialization and production deployment of AI solutions on Azure infrastructure.',
            'Design, development, and maintenance of internal AI-based tools',
          ],
        },
        {
          role: 'Final-year project - AI Developer',
          company: 'ESSCA Angers',
          duration: 'September 2025 - February 2026',
          desc: [
            'Design and development of a conversational-agent ecosystem based on a RAG architecture.',
            'Implementation of the responsive user interface in React from Figma mockups.',
            'Deployment on internal Azure infrastructure and integration with internal platforms.',
          ],
        },
        {
          role: 'Developer Intern',
          company: 'ESSCA Angers',
          duration: 'April - June 2025',
          desc: [
            'Update and deployment of a conversational agent',
            'Development and deployment of an AI-powered HR directory for natural-language information retrieval',
          ],
        },
        {
          role: 'Data Engineer Intern',
          company: 'Moov Africa Burkina',
          duration: 'June - August 2024',
          desc: [
            'Study and analysis of large-scale data storage systems',
            'Open-source data integration and static data lakehouse simulation',
            'CDR (Call Details Records) data integration and dynamic simulation with streaming storage',
          ],
        },
        {
          role: 'Production line operator',
          company: 'ELYVIA SA',
          duration: 'July - August 2023',
          desc: [
            'Monitoring of forming and sealing machines',
            'Quality control of steak trays',
            'Compliance with specifications and hygiene rules',
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      marquee: 'SIMPLE - CURIOUS - THOUGHTFUL - ',
      groups: [
        { category: 'Development', color: 'bg-blue-600', textColor: 'text-white', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'Python'] },
        { category: 'AI', color: 'bg-red-600', textColor: 'text-white', items: ['Ollama', 'Hugging Face', 'OpenAI', 'Claude AI', 'Gemini', 'ElevenLabs', 'Deepgram', 'Mistral AI'] },
        { category: 'Data', color: 'bg-gray-200', textColor: 'text-black', items: ['SQL', 'MariaDB', 'NoSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Neon', 'Mistral AI', 'Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Power BI'] },
        { category: 'Tools', color: 'bg-gray-200', textColor: 'text-black', items: ['Figma', 'Git', 'PyCharm', 'VS Code', 'Google Stitch', 'Codex', 'Claude Code', 'Antigravity', 'Claude Design'] },
        { category: 'DevOps & Cloud', color: 'bg-red-600', textColor: 'text-white', items: ['GitHub Workflow', 'Azure (DevOps, Web App, AI Foundry)', 'Render', 'LiveKit'] },
        { category: 'Strengths', color: 'bg-blue-600', textColor: 'text-white', items: ['Autonomy', 'Adaptability', 'Curiosity'] },
      ],
    },
    hobbies: {
      heading: 'Hobbies',
      interestsHeading: 'Interests',
      leisuresHeading: 'Leisure',
      interests: ['Tech & AI news', 'Video game news', 'Sports news', 'Cooking'],
      leisures: ['Reading', 'Strength training', 'Gaming', 'Web/mobile programming and development'],
    },
    contact: {
      heading: "Let's talk.",
      emailCopied: 'Email copied',
      copyright: 'Portfolio of Mounir DABIRE.',
    },
  },
} as const;

type Translation = (typeof translations)[Locale];

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === 'fr' || value === 'en';
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'fr';

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLanguages.some((language) => language.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'fr';

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(storedLocale) ? storedLocale : detectBrowserLocale();
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  };

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t: translations[locale],
    toggleLocale: () => setLocale(locale === 'fr' ? 'en' : 'fr'),
  }), [locale]);

  useEffect(() => {
    const currentTranslations = translations[locale];
    document.documentElement.lang = locale;
    document.title = currentTranslations.meta.title;

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    metaDescription?.setAttribute('content', currentTranslations.meta.description);
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
}
