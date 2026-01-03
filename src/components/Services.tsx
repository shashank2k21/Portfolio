// 
import { Code, Palette, Smartphone, Globe } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive, scalable web applications using modern technologies and best practices.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive user interfaces with a focus on user experience and accessibility.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ensuring seamless experience across devices with mobile-first, adaptive design principles.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Web Optimization",
      description:
        "Optimizing performance, SEO and accessibility to ensure fast, discoverable applications.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Services"
          subtitle="What I offer to bring your ideas to life"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className="
                  group cursor-pointer relative overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-cyan-500/25 hover:shadow-xl
                "
              >
                {/* glowing border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-2xl" />
                </div>

                <div className="space-y-4 relative z-10">
                  <div
                    className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient}
                      flex items-center justify-center
                      group-hover:scale-110 transition-all duration-300
                      animate-[float_4s_ease-in-out_infinite]
                    `}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <style>
                  {`
                    @keyframes float {
                      0% { transform: translateY(0px); }
                      50% { transform: translateY(-6px); }
                      100% { transform: translateY(0px); }
                    }
                  `}
                </style>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
