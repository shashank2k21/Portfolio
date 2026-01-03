// 
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "API / Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="What I Do"
          subtitle="Technologies and tools I work with"
        />

        <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10 font-semibold text-lg tracking-wide hover:text-black dark:hover:text-white transition-all duration-300">
  Building, breaking, fixing — learning faster every commit.
</p>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-gray-900/80 border border-white/10 rounded-xl p-6
                flex flex-col items-center gap-3 shadow-xl
                transition-all duration-300 hover:-translate-y-1 
                hover:border-cyan-400/40 hover:shadow-cyan-500/20
              "
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />

              <p className="text-black dark:text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
