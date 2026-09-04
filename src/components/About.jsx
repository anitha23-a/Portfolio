import React from 'react';
import { personalInfo } from '../data/info';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-900">
      <div className="section-container">
        <h2 className="section-heading" data-aos="fade-up">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-white">
              Passionate about building scalable software solutions.
            </h3>
            <div className="space-y-4">
              {personalInfo.about.map((item, index) => (
                <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-inner" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 text-white">Education</h3>
            {personalInfo.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-500/30 pl-6 relative mb-6 last:mb-0 pb-1">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                <p className="text-blue-400 font-medium my-1">{edu.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-slate-400 text-sm">
                  <span>{edu.period}</span>
                  {edu.location && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.location}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
