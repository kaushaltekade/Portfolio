"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SplashScreen } from "@/components/SplashScreen";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection").then(m => m.AboutSection));
const SkillsSection = dynamic(() => import("@/components/SkillsSection").then(m => m.SkillsSection));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection").then(m => m.ProjectsSection));
const ServicesSection = dynamic(() => import("@/components/ServicesSection").then(m => m.ServicesSection));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(m => m.ContactSection));
const Footer = dynamic(() => import("@/components/Footer").then(m => m.Footer));

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
