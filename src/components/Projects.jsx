import React from 'react';
import { personalInfo } from '../data/info';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900">
      <div className="section-container">
        <h2 className="section-heading" data-aos="fade-up">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative aspect-video bg-slate-800 overflow-hidden border-b border-slate-700 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden bg-slate-800 flex-col items-center justify-center text-slate-500">
                  <Code size={48} className="mb-2 opacity-50" />
                  <span className="text-sm font-medium">Image Placeholder</span>
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur text-blue-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-slate-700">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-slate-300 bg-slate-700 border border-slate-600 px-2 py-1 rounded flex-shrink-0">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-6 text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Features</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-xs text-slate-500 italic mt-2">
                        + {project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
