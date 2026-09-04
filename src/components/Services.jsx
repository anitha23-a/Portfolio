import React from 'react';
import { personalInfo } from '../data/info';
import { Code2, MonitorSmartphone, Settings, Server, LayoutDashboard, Send } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-slate-900/50 text-white py-20 md:py-32 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Need a Custom Software Solution?</h2>
          <p className="text-lg text-slate-400">
            I develop customized web applications and business software solutions based on specific business requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {personalInfo.services.map((service, index) => (
            <div key={index} className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all shadow-md group" data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckIcon index={index} />
                </div>
                <h3 className="font-medium text-slate-200 group-hover:text-white transition-colors">{service}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 text-lg">
            <Send className="w-5 h-5 mr-3" />
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

// Helper for varied icons
const CheckIcon = ({ index }) => {
  const icons = [
    <LayoutDashboard size={20} />,
    <Settings size={20} />,
    <MonitorSmartphone size={20} />,
    <Server size={20} />,
    <Code2 size={20} />
  ];
  return icons[index % icons.length];
};

export default Services;
