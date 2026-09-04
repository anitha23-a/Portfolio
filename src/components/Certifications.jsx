import React from 'react';
import { personalInfo } from '../data/info';
import { Award, Trophy } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="bg-slate-900">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Certifications */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Award size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {personalInfo.certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all flex items-start gap-4 shadow-sm" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  <p className="text-slate-300 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div data-aos="fade-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                <Trophy size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Achievements</h2>
            </div>
            
            <div className="space-y-4">
              {personalInfo.achievements.map((achievement, index) => (
                <div key={index} className="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all flex items-start gap-4 shadow-sm" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                  <p className="text-slate-300 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Certifications;
