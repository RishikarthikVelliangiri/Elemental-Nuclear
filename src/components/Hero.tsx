"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Ethereal Background */}
            <div className="absolute inset-0 z-0">
                {/* Deep void backing */}
                <div className="absolute inset-0 bg-background" />

                {/* Slow moving fluid gradients */}
                <motion.div
                    style={{ y: y1, x: -100 }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px]"
                />
                <motion.div
                    style={{ y: y2, x: 100 }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px]"
                />

                {/* Subtle noise/grain overlay for texture */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <motion.div
                style={{ opacity }}
                className="container relative z-10 px-6 flex flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-medium tracking-widest text-primary/80 uppercase backdrop-blur-sm">
                        Future of Energy
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8"
                >
                    Reliability <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                        Redefined.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
                >
                    We are deploying next-generation nuclear power.
                    <br className="hidden md:block" />
                    Faster, safer, and built for the reality of modern demand.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105">
                        Discover
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="px-8 py-4 text-white hover:text-primary transition-colors font-medium text-sm tracking-wide uppercase border-b border-transparent hover:border-primary/50">
                        Our Technology
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
