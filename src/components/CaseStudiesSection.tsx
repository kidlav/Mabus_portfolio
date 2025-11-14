import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Target, User, Wrench, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Редизайн корпоративного портала",
    subtitle: "Крупная IT-компания",
    problem: "Устаревший интерфейс, низкая скорость работы, проблемы с масштабируемостью.",
    role: "Frontend Lead",
    tech: ["React", "TypeScript", "GraphQL", "Webpack"],
    result: "Увеличение производительности на 60%, снижение времени загрузки на 40%",
    metrics: [
      { label: "Производительность", value: "+60%" },
      { label: "Время загрузки", value: "-40%" },
      { label: "Удовлетворённость", value: "+85%" }
    ]
  },
  {
    id: 2,
    title: "Платформа онлайн-обучения",
    subtitle: "EdTech стартап",
    problem: "Необходимость создания интерактивной платформы с видео, тестами и прогрессом студентов.",
    role: "Full-stack Developer",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    result: "Запуск MVP за 3 месяца, 5000+ активных пользователей в первый месяц",
    metrics: [
      { label: "Срок разработки", value: "3 мес" },
      { label: "Пользователи", value: "5000+" },
      { label: "Конверсия", value: "23%" }
    ]
  }
];

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32 bg-secondary">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold mb-24 leading-none"
        >
          Кейсы
        </motion.h2>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group"
            >
              {/* Header */}
              <div className="mb-12">
                <p className="text-accent mb-3 uppercase tracking-wider text-sm">{study.subtitle}</p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {study.title}
                </h3>
              </div>

              {/* Main Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Problem & Role */}
                <div className="lg:col-span-1 space-y-8">
                  <div className="bg-background p-8 border border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <h4 className="text-xl font-bold">Проблема</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="bg-background p-8 border border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <User className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <h4 className="text-xl font-bold">Моя роль</h4>
                    </div>
                    <p className="text-muted-foreground">{study.role}</p>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-background border border-border flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <span className="text-muted-foreground">Скриншот проекта</span>
                  </div>
                </div>
              </div>

              {/* Tech & Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-8 border border-border">
                  <div className="flex items-start gap-3 mb-6">
                    <Wrench className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold">Технологии</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-secondary border border-border hover:border-accent transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-background p-8 border border-border">
                  <div className="flex items-start gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold">Результаты</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-accent mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="group/btn inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-300">
                  <span className="border-b-2 border-transparent group-hover/btn:border-accent transition-all duration-300">
                    Подробнее о проекте
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && (
                <div className="mt-32 h-px bg-border"></div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
