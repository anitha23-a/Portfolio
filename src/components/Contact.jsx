import React from 'react';
import { personalInfo } from '../data/info';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900/50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700" data-aos="zoom-in" data-aos-duration="1000">
          <div className="grid md:grid-cols-5 h-full">
            
            <div className="md:col-span-2 bg-blue-600 text-white p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Let's Build Something Useful</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Whether you're a recruiter looking for a software developer or a business looking for a custom software solution, I'd be happy to connect.
                </p>
              </div>
              
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 hover:text-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium break-all">{personalInfo.email}</span>
                </a>
                
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 hover:text-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">{personalInfo.phone}</span>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3 p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 font-semibold transition-all shadow-sm">
                  <Mail className="text-blue-400" />
                  Email Me
                </a>
                <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-600 hover:border-green-500 hover:bg-green-500/10 text-slate-300 hover:text-green-400 font-semibold transition-all shadow-sm">
                  <Send className="text-green-400" />
                  WhatsApp
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 text-slate-300 hover:text-blue-400 font-semibold transition-all shadow-sm">
                  <Linkedin className="text-blue-400" />
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold transition-all shadow-sm">
                  <Github className="text-slate-400 group-hover:text-white" />
                  GitHub
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
