import { ScrollReveal } from "@/components/ScrollReveal";
import { Hammer, BookOpen, Target } from "lucide-react";

const proofCards = [
  {
    icon: Hammer,
    title: "What I've Built",
    description: "Production websites, VPS-hosted blockchain nodes, automation tools, and cloud-deployed web apps.",
  },
  {
    icon: BookOpen,
    title: "What I'm Learning",
    description: "Advanced DevOps workflows, Web3 infrastructure scaling, and frontend performance optimization.",
  },
  {
    icon: Target,
    title: "Career Direction",
    description: "Full-stack development roles with a focus on infrastructure, cloud systems, and decentralized tech.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase text-center mb-6">About</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-20 text-sm leading-relaxed">
            I'm a self-taught developer who chose building over textbooks. I learn by shipping real projects,
            breaking things, and fixing them — over and over.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden mb-20">
          {proofCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="bg-background p-8 h-full group cursor-pointer hover:bg-foreground/[0.02] transition-colors duration-500">
                <card.icon className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300" size={22} strokeWidth={1.5} />
                <h3 className="text-base font-medium text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="border border-border/50 rounded-2xl p-8 text-center">
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              "Currently running multiple blockchain nodes on VPS and building performance-optimized web apps."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
