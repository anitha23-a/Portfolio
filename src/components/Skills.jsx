import React from 'react';
import { personalInfo } from '../data/info';

const Skills = () => {
  const categories = [
    { name: 'Programming', keys: personalInfo.skills.programming },
    { name: 'Frontend', keys: personalInfo.skills.frontend },
    { name: 'Backend', keys: personalInfo.skills.backend },
    { name: 'Database', keys: personalInfo.skills.database },
    { name: 'Tools & DevOps', keys: personalInfo.skills.tools },
    { name: 'Security / Networking', keys: personalInfo.skills.security },
    { name: 'Design', keys: personalInfo.skills.design }
  ];

  return (
    <section id="skills" className="bg-slate-900/50">
      <div className="section-container">
        <h2 className="section-heading" data-aos="fade-up">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card p-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-700">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.keys.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-800 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg shadow-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
