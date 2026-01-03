import { ExternalLink, Github } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function Portfolio() {
  const projects = [
    {
      title: 'NeckEase',
      description: 'NeckEase: an AI-powered posture monitor that tracks head movement and alerts users to prevent neck pain and strain.',
      image: 'images/neckease.png',
      tags: ['HTML', 'CSS', 'PYTHON(ML)'],
      githubUrl: 'https://github.com/shashank2k21/Neckease.git',
    },
    {
      title: 'Driver Drowsiness Detection',
      description: 'A machine-learning system that tracks a driver’s eye movement and alerts them with alarms when signs of fatigue are detected.',
      image: 'images/driverdrowsiness.png',
      tags: ['javascript', 'Python', 'Machine learning'],
      githubUrl: 'https://github.com/shashank2k21/Driver-Drowsiness-System.git',
    },
    {
      title: 'RvhInfratech',
      description: 'Built a modern real-estate website for RVH Infratech to help clients easily browse properties, explore details, and connect faster.',
      image: 'images/rvhinfratech.png',
      tags: ['JavaScript', 'API', 'CSS3', 'React'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations',
      image: 'images/PORTFOLIO.png',
      tags: ['React', 'TypeScript', 'Framer', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
    },
  
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Portfolio"
          subtitle="Check out some of my recent projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-110"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tag}
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
}
