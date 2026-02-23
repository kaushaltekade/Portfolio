import { ScrollReveal } from "@/components/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, RefreshCw, BookOpen } from "lucide-react";

type SkillLevel = "production" | "active" | "learning";

interface Skill {
  name: string;
  context: string;
  level: SkillLevel;
}

const levelConfig: Record<SkillLevel, { label: string; icon: LucideIcon }> = {
  production: { label: "Production", icon: CheckCircle2 },
  active: { label: "Active Use", icon: RefreshCw },
  learning: { label: "Learning", icon: BookOpen },
};

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS/JS", context: "Core stack", level: "production" },
      { name: "React", context: "3 live projects", level: "production" },
      { name: "Next.js", context: "Active learning", level: "learning" },
      { name: "Node.js", context: "Basic backend", level: "active" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Linux", context: "Daily use", level: "production" },
      { name: "Docker", context: "5+ VPS deployments", level: "production" },
      { name: "Git & GitHub", context: "All projects", level: "production" },
      { name: "VPS Management", context: "Multiple servers", level: "active" },
    ],
  },
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Ethereum", context: "Testnet operator", level: "active" },
      { name: "Node Deployment", context: "Sepolia, AI nodes", level: "production" },
      { name: "RPC & Validators", context: "Setup & monitoring", level: "active" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", context: "Primary editor", level: "production" },
      { name: "AI Coding Tools", context: "Lovable, Gemini", level: "active" },
      { name: "NPM", context: "Package management", level: "active" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 border-t border-border/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase text-center mb-6">Capabilities</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-tight">
            Skills & Experience
          </h2>
          <p className="text-center text-muted-foreground max-w-md mx-auto mb-20 text-sm leading-relaxed">
            No fake progress bars. Real context for each skill.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 80}>
              <div className="border border-border/40 rounded-2xl p-6">
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const config = levelConfig[skill.level];
                    const Icon = config.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1.5 hover:text-foreground hover:border-foreground/20 transition-colors duration-300 cursor-default"
                      >
                        <Icon size={10} strokeWidth={1.5} />
                        {skill.name} — {skill.context}
                      </span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
