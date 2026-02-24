"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const HeroBackground = () => {
    const { scrollY } = useScroll();
    // Move upward more on scroll to reveal the bottom part of the image
    const y = useTransform(scrollY, [0, 800], [0, -400]);

    // We are using the main portrait photo here
    const photo = "main-2.webp";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none h-[200vh]">
            <motion.div
                className="sticky top-0 w-full h-screen overflow-hidden"
            >
                <motion.div
                    style={{ y }}
                    className="w-full h-[130%] absolute inset-0 flex items-center justify-center -mt-20 lg:mt-0"
                >
                    <div className="relative w-full h-full lg:h-full lg:w-full mx-auto flex items-center justify-center">
                        {/* The photo */}
                        <Image
                            src={`/photos/${photo}`}
                            alt="Background Portrait"
                            fill
                            className="object-contain lg:object-cover object-center opacity-100"
                            sizes="100vw"
                            priority
                        />
                        {/* Only a bottom gradient to gently fade into the next section */}
                        <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
