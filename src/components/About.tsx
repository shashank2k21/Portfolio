import { Download } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <img
                src="images/anout me.png"
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Software Developer 
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I’m a passionate software developer who loves turning ideas into real, working solutions. With experience across Python, Machine Learning, Java, and modern frontend technologies, I enjoy building reliable, scalable and user-friendly digital products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey started with curiosity about how software works, and over time it turned into a full-time passion. I’ve worked on multiple real-world projects — from frontend interfaces to backend logic — and I’m constantly learning new tools, frameworks, and best practices to build smarter and better applications.
        
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-1">
                <p className="text-cyan-400 font-semibold">Experience</p>
                <p className="text-white text-2xl font-bold">5+ Years</p>
              </div>
              <div className="space-y-1">
                <p className="text-cyan-400 font-semibold">Projects</p>
                <p className="text-white text-2xl font-bold">50+ Completed</p>
              </div>
            </div>

            <a
  href="resume.pdf"
  download
>
  <Button variant="primary" className="flex items-center gap-2">
    <Download className="w-5 h-5" />
    Download Resume
  </Button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
