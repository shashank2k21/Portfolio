import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashank2k21', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ss7991', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/whojimmysingh', label: 'Twitter' },
    { icon: Mail, href: 'mailto:shashanksinghworkspace@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Shashank Singh
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400 font-light">
                Software Developer
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
              I’m a software developer with a strong focus on building reliable, scalable, and user-friendly applications. I enjoy turning ideas into real, working solutions using modern tools and clean code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#contact">
                Hire Me
              </Button>
              <Button variant="secondary" href="#contact">
                Let's Talk
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
                <img
                  src="images/pfp.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
