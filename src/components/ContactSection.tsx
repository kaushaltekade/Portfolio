import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 border-t border-border/30">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase text-center mb-6">Contact</p>
          <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground max-w-md mx-auto mb-4 text-sm leading-relaxed">
            Have a project in mind or want to collaborate?
          </p>
          <div className="text-center mb-16">
            <span className="inline-block text-xs text-muted-foreground border border-border/50 px-4 py-2 rounded-full">
              Open to freelance and junior developer opportunities
            </span>
          </div>
        </ScrollReveal>

        <div className="max-w-md mx-auto">
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border-border/50 rounded-xl h-12 text-sm focus:border-foreground/30 transition-colors placeholder:text-muted-foreground/50"
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border-border/50 rounded-xl h-12 text-sm focus:border-foreground/30 transition-colors placeholder:text-muted-foreground/50"
              />
              <Textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-transparent border-border/50 rounded-xl text-sm focus:border-foreground/30 transition-colors resize-none placeholder:text-muted-foreground/50"
              />
              <Button type="submit" className="w-full rounded-full h-12 text-sm font-medium tracking-wide">
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex justify-center gap-5 mt-12">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer">
                <Github size={16} />
              </a>
              <a href="mailto:your-email@example.com" aria-label="Send an email" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer">
                <Mail size={16} />
              </a>
              <a href="https://yourdomain.com" target="_blank" rel="noopener noreferrer" aria-label="Personal Website" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer">
                <Globe size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
