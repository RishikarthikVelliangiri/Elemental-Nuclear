"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Clock, LucideIcon, ArrowUpRight } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    id: string;
}

const features: Feature[] = [
    {
        id: "01",
        title: "Speed",
        description:
            "Traditional nuclear takes decades. We focus on streamlined systems and modular execution to cut timelines in half.",
    },
    {
        id: "02",
        title: "Reliability",
        description:
            "Consistent, carbon-free baseload energy. 24/7/365 availability when modern infrastructure demands it most.",
    },
    {
        id: "03",
        title: "Efficiency",
        description:
            "Disciplined engineering and cost-aware development. Minimizing financial risk through proven component integration.",
    },
];

export default function Features() {
    return (
        <section className="py-32 bg-background relative z-20">
            <div className="container px-6 mx-auto">
                <div className="border-t border-white/10 mb-16" />

                <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                            className="group relative"
                        >
                            <div className="text-xs font-mono text-muted-foreground/60 mb-6 flex items-center gap-2">
                                <span>/{feature.id}</span>
                                <div className="h-[1px] w-8 bg-white/10" />
                            </div>

                            <h3 className="text-3xl font-light text-white mb-6 group-hover:text-primary transition-colors duration-500">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                <ArrowUpRight className="w-5 h-5 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
