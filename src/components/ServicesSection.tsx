import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe, Cloud, Link, Bot, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Design, build, and deploy responsive modern websites and web applications." },
  { icon: Cloud, title: "Cloud & VPS", description: "Set up, manage, and optimize Ubuntu servers with Docker and automated deployments." },
  { icon: Link, title: "Blockchain Infra", description: "Deploy and maintain Ethereum nodes, testnets, validators, and RPC endpoints." },
  { icon: Bot, title: "AI Automation", description: "Build AI-powered tools, prompt engineering workflows, and automation scripts." },
  { icon: BarChart3, title: "Optimization", description: "Audit and improve web performance, hosting, security, and Core Web Vitals." },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 border-t border-border/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase text-center mb-6">Services</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-tight">
            What I Build
          </h2>
          <p className="text-center text-muted-foreground max-w-md mx-auto mb-20 text-sm leading-relaxed">
            From idea to production.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div className="bg-background p-8 h-full group cursor-pointer hover:bg-foreground/[0.02] transition-colors duration-500">
                <service.icon className="text-muted-foreground/40 mb-6 group-hover:text-foreground transition-colors duration-300" size={22} strokeWidth={1.5} />
                <h3 className="text-base font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
