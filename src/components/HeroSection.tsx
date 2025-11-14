import { motion } from "motion/react";
import { Github, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import LetterGlitch from "./LetterGlitch";
import { relative } from "path";

export function HeroSection() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    updateTheme();

    window.addEventListener("theme-change", updateTheme);
    return () => window.removeEventListener("theme-change", updateTheme);
  }, []);

  const darkColors = ["#2b4539", "#61dca3", "#61b3dc"];
  const lightColors = [
    "#F9E79F", // светлое золото
    "#F1C40F", // золотой цвет
    "#B7950B"  // тёмное матовое золото
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen border flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          top: "-0.5%",
          position: "absolute",
          opacity: "0.15",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <LetterGlitch
          key={theme} // 🎯 перерендер анимации при смене темы
          glitchColors={theme === "dark" ? darkColors : lightColors}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h1 className="text-[clamp(4rem,12vw,10rem)] z-10 font-bold leading-none tracking-tight">
            Mabus
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground">
            Разработчик, создающий современные веб-приложения с акцентом на
            производительность и пользовательский опыт.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <motion.a
              href="https://github.com/MabusTFC?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-foreground text-background overflow-hidden transition-all duration-300 hover:bg-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </span>
            </motion.a>

            <motion.button
              className="group relative px-8 py-4 border-2 border-foreground overflow-hidden transition-all duration-300 hover:bg-foreground hover:text-background"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Скачать резюме
              </span>
            </motion.button>

            <motion.a
              href="#contact"
              className="group relative px-8 py-4 border-2 border-accent text-accent overflow-hidden transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Связаться
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}