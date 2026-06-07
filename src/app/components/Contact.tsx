import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const email = 'mounirdabire47@gmail.com';
  const [emailCopied, setEmailCopied] = useState(false);

  const confirmEmailCopied = () => {
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  };

  const copyEmailFallback = () => {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);

    if (copied) confirmEmailCopied();
  };

  const handleEmailClick = () => {
    if (!navigator.clipboard?.writeText) {
      copyEmailFallback();
      return;
    }

    navigator.clipboard.writeText(email)
      .then(confirmEmailCopied)
      .catch(copyEmailFallback);
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-blue-600 px-4 pb-10 pt-16 border-t-8 border-black sm:px-6 md:px-12 md:pt-20">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <h2 className="mb-12 break-words font-['Syne'] text-4xl font-black uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:text-5xl md:text-7xl md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          Parlons-en.
        </h2>
        
        <div className="mb-16 flex w-full flex-col items-center gap-6 md:mb-20 md:flex-row md:justify-center md:gap-8">
          <a href={`mailto:${email}`} onClick={handleEmailClick} className="group flex w-full max-w-xs items-center justify-center gap-4 bg-white px-6 py-4 text-lg font-bold uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:text-xl md:w-auto md:px-8">
            <Mail className="w-8 h-8 group-hover:text-red-600" />
            <span>{emailCopied ? 'Email copié' : 'Email'}</span>
          </a>
          
          <a href="https://www.linkedin.com/in/mounir-dabire" className="group flex w-full max-w-xs items-center justify-center gap-4 bg-white px-6 py-4 text-lg font-bold uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:text-xl md:w-auto md:px-8">
            <Linkedin className="w-8 h-8 group-hover:text-blue-600" />
            <span>LinkedIn</span>
          </a>
          
          <a href="https://github.com/Mounir1200" className="group flex w-full max-w-xs items-center justify-center gap-4 bg-white px-6 py-4 text-lg font-bold uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] sm:text-xl md:w-auto md:px-8">
            <Github className="w-8 h-8 group-hover:text-black" />
            <span>GitHub</span>
          </a>
        </div>
        
        <p className="w-full break-words border-t-4 border-black pt-8 text-base font-bold text-white sm:text-lg">
          © {new Date().getFullYear()} — Portfolio de Mounir DABIRE.
        </p>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-red-600 rounded-full border-8 border-black opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black border-8 border-white pointer-events-none transform rotate-12 opacity-20" />
    </footer>
  );
}
