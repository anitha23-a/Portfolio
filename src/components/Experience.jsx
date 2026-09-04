import React from 'react';
import { personalInfo } from '../data/info';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900/50">
      <div className="section-container">
        <h2 className="section-heading" data-aos="fade-up">Experience</h2>
        
        <div className="space-y-8">
          {personalInfo.experience.map((job, index) => (
            <div key={index} className="card p-8 group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="text-lg font-medium text-slate-300 mt-1 flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-500" />
                    {job.company}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium text-slate-400">
                  <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full">
                    <Calendar size={16} />
                    {job.period}
                    {job.ongoing && <span className="flex w-2 h-2 rounded-full bg-green-500 ml-1"></span>}
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <span className="text-blue-500 mr-3 mt-1.5 text-lg leading-none">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
