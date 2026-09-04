import React from 'react';
import { personalInfo } from '../data/info';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6">AJ<span className="text-blue-500">.</span></h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </div>
        
        <p className="text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
