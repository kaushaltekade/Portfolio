import { ScrollReveal } from "@/components/ScrollReveal";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  result: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Blockchain Node Setup",
    category: "Node Infrastructure",
    problem: "Need for reliable Ethereum testnet node with fast sync and high RPC uptime.",
    solution: "Deployed Sepolia node on Ubuntu VPS using Docker with optimized configuration.",
    tech: ["Docker", "Ethereum", "Linux", "VPS"],
    result: "Reduced sync time by 30%, improved RPC uptime to 99%+.",
  },
  {
    title: "Portfolio & Landing Sites",
    category: "Web Apps",
    problem: "Clients needed fast, responsive, modern web presence.",
    solution: "Built custom React-based sites with Tailwind CSS, deployed on cloud hosting.",
    tech: ["React", "Tailwind CSS", "Vercel", "HTML/CSS"],
    result: "Delivered production-ready sites with sub-2s load times.",
  },
  {
    title: "AI/Crypto Node Automation",
    category: "Automation",
    problem: "Manual node deployment was slow and error-prone across multiple VPS.",
    solution: "Created automated deployment scripts for spinning up AI and crypto nodes.",
    tech: ["Bash", "Docker", "Linux", "Git"],
    result: "Cut deployment time by 60%, managing 5+ nodes efficiently.",
  },
  {
    title: "Face-Swap & OpenCV Tools",
    category: "Computer Vision",
    problem: "Needed real-time face detection and swap functionality for a demo project.",
    solution: "Built Python-based tool using OpenCV for face detection and manipulation.",
    tech: ["Python", "OpenCV", "NumPy"],
    result: "Working prototype with real-time processing capability.",
  },
  {
    title: "Web Performance Optimization",
    category: "Performance",
    problem: "Existing sites had poor Core Web Vitals and slow load times.",
    solution: "Audited and optimized assets, lazy loading, caching, and hosting configs.",
    tech: ["Lighthouse", "Webpack", "CDN", "Caching"],
    result: "Improved performance scores by 40–60 points on Lighthouse.",
  },
  {
    title: "Cloud-Hosted Web Apps",
    category: "Web Apps",
    problem: "Applications needed reliable, scalable cloud deployment.",
    solution: "Configured VPS environments with Docker, NGINX, and SSL for production hosting.",
    tech: ["Docker", "NGINX", "Ubuntu", "SSL"],
    result: "Zero-downtime deployments with automated SSL renewal.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 border-t border-border/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase text-center mb-6">Work</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground max-w-md mx-auto mb-20 text-sm leading-relaxed">
            Real projects with real outcomes.
          </p>
        </ScrollReveal>

        <div className="space-y-px rounded-2xl overflow-hidden border border-border/40">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 50}>
              <div className="bg-background p-6 sm:p-8 group cursor-pointer hover:bg-foreground/[0.02] transition-colors duration-500 border-b border-border/20 last:border-b-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-muted-foreground/60">{project.category}</span>
                    <h3 className="text-lg font-medium text-foreground mt-1 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground/20 group-hover:text-foreground transition-all duration-300 mt-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1">Problem</p>
                    <p className="leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1">Solution</p>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1">Result</p>
                    <p className="leading-relaxed text-foreground/80">{project.result}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] text-muted-foreground/50 border border-border/30 rounded-full px-2.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-colors duration-300">
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-colors duration-300">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
