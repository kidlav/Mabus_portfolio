import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Send,
      label: "Telegram",
      value: "@mabus",
      link: "https://t.me/mabus",
      color: "hover:text-[#0088cc]"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mabus@example.com",
      link: "mailto:mabus@example.com",
      color: "hover:text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MabusTFC",
      link: "https://github.com/MabusTFC",
      color: "hover:text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mabus",
      link: "https://linkedin.com",
      color: "hover:text-[#0077b5]"
    }
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold mb-16 leading-none"
        >
          Контакты
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed">
              Открыт для новых возможностей и интересных проектов.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Если у вас есть вакансия, проект или просто хотите обсудить 
              сотрудничество — буду рад пообщаться.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`group flex items-center gap-4 p-6 bg-card border border-border hover:border-accent transition-all duration-300 ${contact.color}`}
                  whileHover={{ x: 8 }}
                >
                  <div className="p-3 bg-muted group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    <p className="font-medium">{contact.value}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-border text-center"
        >
          <p className="text-muted-foreground">
            © 2025 Mabus. Все права защищены.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
