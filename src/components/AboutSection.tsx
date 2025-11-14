import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "REST API",
  "GraphQL"
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 bg-secondary">
      <div className="max-w-5xl w-full mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold mb-16 leading-none"
        >
          Обо мне
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          <p className="text-xl leading-relaxed">
            Я разработчик с опытом создания современных веб-приложений. 
            Специализируюсь на фронтенд-разработке с использованием React и TypeScript, 
            но также имею опыт работы с бэкенд-технологиями.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Моя цель — создавать интуитивные, производительные и масштабируемые 
            решения, которые решают реальные бизнес-задачи.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Навыки</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-4 py-3 border border-border hover:border-accent transition-colors duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
