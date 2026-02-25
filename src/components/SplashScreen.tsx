"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

// HOW IT WORKS: These are the filenames of the images used in the background grid.
// WHAT HAPPENS IF YOU CHANGE IT: 
// - Adding more files: The grid will have more unique images, but it will increase memory usage and loading times.
// - Removing files: The grid will have fewer images to display. If you remove too many, the grid might look empty.
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

// WHAT HAPPENS IF YOU DUPLICATE PHOTOS (e.g., photos = [...basePhotos, ...basePhotos]):
// The grid will be larger and denser, but rendering 52+ images at once can severely lag the browser
// and lower the Lighthouse performance score. Performance > visual density here.
const photos = basePhotos;

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        // HOW IT WORKS: Temporarily disables scrolling while the splash screen is visible.
        document.body.style.overflow = "hidden";

        // HOW IT WORKS: This timer controls exactly when the splash screen unmounts and tells the parent component to show the main site.
        // WHAT HAPPENS IF YOU CHANGE "4500":
        // - Lower number (e.g., 2000): The splash screen will disappear abruptly before the animations finish.
        // - Higher number (e.g., 8000): The user will be stuck waiting a very long time before they can see your website.
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
            // HOW IT WORKS: The main container covering the whole screen. z-[100] keeps it above everything else (like your navbar/hero).
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {/* Background Interactive Masonry/Grid Wall */}
            <motion.div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                // HOW IT WORKS: Starts slightly zoomed in (scale 1.1) and slightly tilted (rotate -2 degrees).
                // WHAT HAPPENS IF YOU CHANGE THIS: If you remove `rotate: -2`, the grid will align perfectly straight boxy.
                initial={{ scale: 1.1, rotate: -2 }}

                // HOW IT WORKS: This is the massive "zoom-in" effect that happens right before the splash screen disappears.
                // WHAT HAPPENS IF YOU CHANGE `delay: 2.5` to `delay: 0`: The zoom-in effect will start immediately, ruining the reading time for the central text.
                animate={{ scale: 3, rotate: 0, opacity: 0, filter: "blur(40px)" }}
                transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
            >
                {/* We use grid auto-rows and dense packing to make a thick masonry grid */}
                <div className="w-[150vw] h-[150vh] grid grid-flow-dense grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 auto-rows-[100px] sm:auto-rows-[140px] gap-2 sm:gap-4 p-2 sm:p-4 opacity-70 flex-shrink-0">
                    {photos.map((photo, i) => {
                        // HOW IT WORKS: This logic decides the size of each image tile based on its index (i).
                        // WHAT HAPPENS IF YOU CHANGE THIS:
                        // - If you make everything `isLarge = true`, all boxes will be huge, and the grid will look bulky.
                        // - If you remove these entirely, all boxes will be small, uniform squares.
                        const isLarge = i % 11 === 0;
                        const isMediumV = i % 7 === 0 && !isLarge;
                        const isMediumH = i % 5 === 0 && !isLarge && !isMediumV;

                        // HOW IT WORKS: We only prioritize loading the first 12 images. 
                        // WHAT HAPPENS IF YOU CHANGE `12` to `26`: The browser will try to download all 26 high-res images immediately,
                        // blocking the main thread and severely hurting your Core Web Vitals (LCP) score.
                        const isPriority = i < 12;

                        return (
                            <div
                                key={i}
                                // HOW IT WORKS: `animate-splash-appear` is a custom CSS animation (defined in globals.css) that fades/slides the boxes in.
                                className={`relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 opacity-0 animate-splash-appear ${isLarge ? "col-span-2 row-span-2" :
                                    isMediumV ? "col-span-1 row-span-2" :
                                        isMediumH ? "col-span-2 row-span-1" :
                                            "col-span-1 row-span-1"
                                    }`}
                                // HOW IT WORKS: Staggers the appearance of the boxes so they don't all pop in at once.
                                // WHAT HAPPENS IF YOU REMOVE THIS: All grid boxes will appear simultaneously instead of a cool cascading effect.
                                style={{ animationDelay: `${(i % 20) * 0.05}s` }}
                            >
                                <Image
                                    src={`/photos/${photo}`}
                                    alt={`Photo ${i}`}
                                    fill
                                    // HOW IT WORKS: Images start `grayscale` (black & white) and turn colored on hover.
                                    // WHAT HAPPENS IF YOU REMOVE `grayscale`: The background will be fully colored from the start, making the white "KAUSHAL" text much harder to read.
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                    sizes="(max-width: 640px) 30vw, 15vw"
                                    priority={isPriority}
                                    fetchPriority={isPriority ? "high" : "auto"}
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Central Identity Text overlapping the grid */}
            <motion.div
                // HOW IT WORKS: `mix-blend-difference` ensures the text remains readable even if a bright image passes behind it by inverting colors dynamically.
                className="z-10 mix-blend-difference pointer-events-none flex flex-col items-center justify-center p-12 bg-black/20 backdrop-blur-sm rounded-3xl"
            >
                <motion.h1
                    className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white tracking-tighter leading-[0.8]"
                    // HOW IT WORKS: Starts blurry and small.
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                    // HOW IT WORKS: Fades in, sharpens, and scales to normal size.
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    // WHAT HAPPENS IF YOU CHANGE `duration`: You can make the text animation faster or slower.
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    KAUSHAL
                </motion.h1>

                <div className="overflow-hidden mt-6">
                    <motion.p
                        // HOW IT WORKS: Sets widespread letter spacing (`tracking-[0.5em] / trackig-[1em]`)
                        className="text-white sm:tracking-[1em] tracking-[0.5em] text-xs sm:text-sm font-mono uppercase"
                        // HOW IT WORKS: Slides the text up from below its container to appear.
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
