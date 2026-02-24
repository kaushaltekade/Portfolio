"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

// Base array of 26 photos
const basePhotos = [
    "20251217_023413.webp",
    "20251217_023440.webp",
    "20251217_023414(0).webp",
    "main.webp",
    "20251217_023437.webp",
    "20251217_023415(0).webp",
    "main-2.webp",
    "20251217_023415(1).webp",
    "20251217_023436.webp",
    "20251217_023415(2).webp",
    "20251217_023415.webp",
    "main-3.webp",
    "20251217_023416(0).webp",
    "20251217_023434.webp",
    "20251217_023416(2).webp",
    "20251217_023416(3).webp",
    "20251217_023433.webp",
    "20251217_023417(1).webp",
    "20251217_023424.webp",
    "20251217_023417(2).webp",
    "20251217_023418(0).webp",
    "20251217_023423.webp",
    "20251217_023419.webp",
    "20251217_023421.webp",
    "20251217_023422.webp",
    "20251217_023414.webp",
];

// Duplicate the array to create a massive wall of photos (e.g., 4 times 26 = 104 photos)
const photos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos]

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        // Total wait time for the intro animation is a bit longer now
        const timeout = setTimeout(() => {
            document.body.style.overflow = "";
            onComplete();
        }, 4500);

        return () => {
            clearTimeout(timeout);
            document.body.style.overflow = "";
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {/* Background Interactive Masonry/Grid Wall */}
            <motion.div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                initial={{ scale: 1.1, rotate: -2 }}
                // Zoom past the camera drastically as exiting
                animate={{ scale: 3, rotate: 0, opacity: 0, filter: "blur(40px)" }}
                transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
            >
                {/* We use grid auto-rows and dense packing to make a thick masonry grid */}
                <div className="w-[150vw] h-[150vh] grid grid-flow-dense grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 auto-rows-[100px] sm:auto-rows-[140px] gap-2 sm:gap-4 p-2 sm:p-4 opacity-70 flex-shrink-0">
                    {photos.map((photo, i) => {
                        // Pseudo-random sizing based on index
                        const isLarge = i % 11 === 0;
                        const isMediumV = i % 7 === 0 && !isLarge;
                        const isMediumH = i % 5 === 0 && !isLarge && !isMediumV;

                        return (
                            <motion.div
                                key={i}
                                className={`relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 ${isLarge ? "col-span-2 row-span-2" :
                                    isMediumV ? "col-span-1 row-span-2" :
                                        isMediumH ? "col-span-2 row-span-1" :
                                            "col-span-1 row-span-1"
                                    }`}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 0.5, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    // create a sweeping delay pattern
                                    delay: (i % 20) * 0.05
                                }}
                            >
                                <Image
                                    src={`/photos/${photo}`}
                                    alt={`Photo ${i}`}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                    sizes="(max-width: 640px) 30vw, 15vw"
                                    priority={i < 15}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Central Identity Text overlapping the grid */}
            <motion.div
                className="z-10 mix-blend-difference pointer-events-none flex flex-col items-center justify-center p-12 bg-black/20 backdrop-blur-sm rounded-3xl"
            >
                <motion.h1
                    className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white tracking-tighter leading-[0.8]"
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    KAUSHAL
                </motion.h1>

                <div className="overflow-hidden mt-6">
                    <motion.p
                        className="text-white sm:tracking-[1em] tracking-[0.5em] text-xs sm:text-sm font-mono uppercase"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    >
                        The Portfolio
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};
