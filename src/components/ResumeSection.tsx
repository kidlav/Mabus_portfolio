import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    period: "2022 — Настоящее время",
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    description: "Разработка и поддержка крупных веб-приложений. Руководство командой из 4 разработчиков."
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Digital Agency",
    description: "Создание лендингов, корпоративных сайтов и веб-приложений для клиентов из различных индустрий."
  },
  {
    period: "2019 — 2020",
    role: "Junior Frontend Developer",
    company: "StartUp Lab",
    description: "Работа над MVP продуктов, участие в code review, изучение best practices."
  }
];

const education = [
  {
    period: "2015 — 2019",
    degree: "Бакалавр, Информатика и вычислительная техника",
    institution: "Технический университет",
    description: "Специализация на разработке программного обеспечения"
  }
];

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16"
        >
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none">
            Резюме
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 w-fit"
          >
            <Download className="w-5 h-5" />
            Скачать PDF
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold">Опыт работы</h3>
            </div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
                  
                  <p className="text-sm text-accent mb-2">{job.period}</p>
                  <h4 className="text-xl font-bold mb-1">{job.role}</h4>
                  <p className="text-muted-foreground mb-3">{job.company}</p>
                  <p className="text-sm leading-relaxed">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold">Образование</h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
                  
                  <p className="text-sm text-accent mb-2">{edu.period}</p>
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  <p className="text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 p-6 bg-muted border border-border"
            >
              <h4 className="font-bold mb-4">Дополнительно</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Английский язык — Upper-Intermediate</li>
                <li>• Сертификат AWS Certified Developer</li>
                <li>• Спикер на 3+ технических конференциях</li>
                <li>• Contributor в Open Source проектах</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
