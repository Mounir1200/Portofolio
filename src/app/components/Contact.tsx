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
    <footer id="contact" className="bg-blue-600 border-t-8 border-black pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <h2 className="text-5xl md:text-7xl font-black font-['Syne'] uppercase text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-12">
          Parlons-en.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <a href={`mailto:${email}`} onClick={handleEmailClick} className="flex items-center gap-4 bg-white border-4 border-black px-8 py-4 text-xl font-bold uppercase hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
            <Mail className="w-8 h-8 group-hover:text-red-600" />
            <span>{emailCopied ? 'Email copié' : 'Email'}</span>
          </a>
          
          <a href="https://www.linkedin.com/in/mounir-dabire" className="flex items-center gap-4 bg-white border-4 border-black px-8 py-4 text-xl font-bold uppercase hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
            <Linkedin className="w-8 h-8 group-hover:text-blue-600" />
            <span>LinkedIn</span>
          </a>
          
          <a href="https://github.com/Mounir1200" className="flex items-center gap-4 bg-white border-4 border-black px-8 py-4 text-xl font-bold uppercase hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,17,0,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
            <Github className="w-8 h-8 group-hover:text-black" />
            <span>GitHub</span>
          </a>
        </div>
        
        <p className="text-white font-bold text-lg border-t-4 border-black pt-8 w-full">
          © {new Date().getFullYear()} — Portofolio de Mounir DABIRE.
        </p>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-red-600 rounded-full border-8 border-black opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black border-8 border-white pointer-events-none transform rotate-12 opacity-20" />
    </footer>
  );
}
