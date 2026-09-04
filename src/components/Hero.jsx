import React from 'react';
import { personalInfo } from '../data/info';
import { FileText, Briefcase, User, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-6xl mx-auto overflow-hidden md:overflow-visible">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-40 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="flex-1 space-y-8" data-aos="fade-right" data-aos-duration="1000">
          <div className="space-y-4">
            <h2 className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold tracking-wide uppercase text-sm border border-blue-500/20 mb-2">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              {personalInfo.name}
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-slate-300 border-l-4 border-blue-500 pl-4 py-1 bg-gradient-to-r from-blue-500/10 to-transparent">
              {personalInfo.title}
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            {personalInfo.shortDesc}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#projects" className="btn-primary">
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <User className="w-5 h-5 mr-2" />
              Hire Me
            </a>
            <a href="/Anitha-Jeevanantham-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 hidden lg:flex justify-center relative animate-float" data-aos="zoom-in" data-aos-duration="1200">
          {/* Main animated photo container */}
          <div className="relative w-72 md:w-[320px] aspect-[3/4] z-10 group">
            {/* Spinning gradient border behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-[4px]"></div>
            
            {/* The actual image container */}
            <div className="absolute inset-[4px] bg-slate-900 rounded-3xl overflow-hidden border-2 border-slate-700 z-10 shadow-[0_0_40px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-shadow duration-500">
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Soft overlay to blend the gray background slightly with the dark theme */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
          
          {/* Decorative background glow (replacing the spinning rings since it's no longer a circle) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
