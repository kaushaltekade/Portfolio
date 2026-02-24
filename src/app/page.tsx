"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AnimatePresence mode="wait">
                {showSplash && (
                    <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
                )}
            </AnimatePresence>

            {!showSplash && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <Navbar />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <SkillsSection />
                        <ProjectsSection />
                        <ServicesSection />
                        <ContactSection />
                    </main>
                    <Footer />
                </motion.div>
            )}
        </div>
    );
}
