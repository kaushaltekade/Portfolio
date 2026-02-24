"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// List of photos we imported
const photos = [
    "20251217_023413.jpg", "20251217_023414(0).jpg", "20251217_023414.jpg",
    "20251217_023415(0).jpg", "20251217_023415(1).jpg", "20251217_023415(2).jpg",
    "20251217_023415.jpg", "20251217_023416(0).jpg", "20251217_023416(2).jpg",
    "20251217_023416(3).jpg", "20251217_023417(1).jpg", "20251217_023417(2).jpg",
    "20251217_023418(0).jpg", "20251217_023419.jpg", "20251217_023421.jpg",
    "20251217_023422.jpg", "20251217_023423.jpg", "20251217_023424.jpg",
    "20251217_023433.jpg", "20251217_023434.jpg", "20251217_023436.jpg",
    "20251217_023437.jpg", "20251217_023440.jpg", "20251217_023441.jpg",
    "20251217_023442.jpg"
];

const Column = ({ images, y }: { images: string[], y: MotionValue<number> }) => {
    return (
        <motion.div
            style={{ y }}
            className="flex flex-col gap-4 w-full relative"
        >
            {images.map((src, i) => (
                <div key={i} className="relative w-full overflow-hidden rounded-xl border border-white/10 pt-[120%] group">
                    <Image
                        src={`/photos/${src}`}
                        alt="Gallery Photo"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 hidden md:block" />
                </div>
            ))}
        </motion.div>
    );
};

export const CreativeGallery = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    // Parallax effects for different columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

    // Mobile doesn't have parallax for better usability
    const mbY = useTransform(scrollYProgress, [0, 1], [0, 0]);

    // Split photos into 3 columns
    const col1 = photos.slice(0, 8);
    const col2 = photos.slice(8, 16);
    const col3 = photos.slice(16, 25);

    return (
        <section id="gallery" className="relative py-24 md:py-32 overflow-hidden bg-black text-white">
            {/* Background ambient lighting */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Moments</span>
                        </h2>
                        <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed mx-auto">
                            A creative glimpse into my world. Through the lens of my camera.
                        </p>
                    </motion.div>
                </div>

                {/* Gallery container */}
                <div
                    ref={container}
                    className="h-[1000px] md:h-[1200px] overflow-hidden flex flex-row gap-4 px-2"
                >
                    <div className="w-full md:w-1/3">
                        <Column images={col1} y={y1} />
                    </div>
                    <div className="w-full md:w-1/3 hidden md:block">
                        <Column images={col2} y={y2} />
                    </div>
                    <div className="w-full md:w-1/3 hidden md:block">
                        <Column images={col3} y={y3} />
                    </div>
                </div>

                {/* Mobile grid fallback below the first column for photos that were hidden */}
                <div className="md:hidden mt-4 flex flex-col gap-4">
                    {col2.concat(col3).map((src, i) => (
                        <div key={`mob-${i}`} className="relative w-full overflow-hidden rounded-xl border border-white/10 pt-[120%]">
                            <Image
                                src={`/photos/${src}`}
                                alt="Gallery Photo"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
