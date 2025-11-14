import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Полнофункциональная платформа электронной коммерции с корзиной, платежами и административной панелью.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Приложение для управления задачами с drag-and-drop, real-time обновлениями и командной работой.",
    tech: ["Next.js", "TypeScript", "MongoDB", "WebSocket"],
    link: "#"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Дашборд для визуализации данных с интерактивными графиками и фильтрами в реальном времени.",
    tech: ["React", "D3.js", "Tailwind CSS", "REST API"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Социальная сеть с постами, комментариями, лайками и системой подписок.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    link: "#"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold mb-16 leading-none"
        >
          Проекты
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.1, delay: 0 * index }}
              className="group bg-card border border-border p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold relative inline-block">
                  {project.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-muted text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300"
                >
                  Подробнее
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center pt-8"
        >
          <a
            href="https://github.com/MabusTFC?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Все проекты на GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
