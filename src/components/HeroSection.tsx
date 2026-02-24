import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroBackground } from "./HeroBackground";

const roles = [
  "Full-Stack Developer",
  "Web3 Developer",
  "Systems Engineer",
  "Performance-Focused Builder"
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      {/* Radial glow behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-foreground/[0.03] blur-[100px]" />

      <div className="relative z-10 section-container text-center">
        <h1 className="text-7xl sm:text-9xl lg:text-[12rem] font-bold leading-[0.85] tracking-tight mb-4 animate-fade-up">
          Kaushal
        </h1>

        {/* Animated Role Container */}
        <div
          className="h-[40px] sm:h-[48px] overflow-hidden mb-4 animate-fade-up flex justify-center items-center"
          style={{ animationDelay: "0.15s" }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight absolute"
            >
              {roles[index]}.
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-sm text-muted-foreground/70 max-w-md mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: "0.25s" }}>
          I build fast, scalable web apps and run blockchain infrastructure on cloud servers.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <Button size="lg" onClick={() => scrollTo("#projects")} className="rounded-full px-8 h-12 text-sm font-medium tracking-wide">
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")} className="rounded-full px-8 h-12 text-sm font-medium tracking-wide border-foreground/20 hover:bg-foreground/5">
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-5 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-flow">
            <Github size={18} />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Send an email" className="text-muted-foreground hover:text-foreground transition-all duration-300 ease-flow">
            <Mail size={18} />
          </a>
        </div>
      </div>


    </section>
  );
};
