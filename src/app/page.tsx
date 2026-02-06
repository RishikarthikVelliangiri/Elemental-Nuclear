"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />

      {/* About Section - Minimalist Split */}
      <section id="why-nuclear" className="py-32 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl rounded-full" />
            <div className="relative h-[600px] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-black/40" />
              {/* Abstract graphic placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/20" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">
              Powering the <br />
              <span className="text-white font-bold">New Era</span>
            </h2>
            <div className="space-y-8 text-lg font-light text-muted-foreground/80 leading-relaxed">
              <p>
                Current energy infrastructure was built for a different time.
                As demand surges from electrification and AI data centers,
                the grid needs a backbone that is both clean and unshakeable.
              </p>
              <p>
                Elemental Nuclear reimagines deployment. We strip away the
                bloat of legacy construction, focusing on modularity, speed,
                and proven physics.
              </p>
              <a href="#technology" className="group flex items-center gap-4 text-white hover:text-primary transition-colors mt-8">
                <span className="border-b border-white/20 pb-1 group-hover:border-primary">Read our manifesto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Clean Typography */}
      <section id="technology" className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <span className="text-primary text-xs font-mono tracking-[0.2em] uppercase mb-8 block">Technology</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter text-white">
            Built on <br />
            <span className="text-primary/90">Proven Principles.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-16">
            We don't rely on experimental physics. We rely on <span className="text-white font-normal">experimental engineering</span>.
            Our reactor designs utilize established supply chains to deliver power in years, not decades.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { label: "Output", val: "300MW" },
              { label: "Footprint", val: "-40%" },
              { label: "Uptime", val: "99.9%" },
              { label: "Emissions", val: "0" }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-8 hover:bg-white/5 transition-colors">
                <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer id="contact" className="py-24 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-white mb-8">
              Elemental<span className="text-primary">.</span>
            </h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@elemental.energy" className="text-2xl font-light hover:text-primary transition-colors">hello@elemental.energy</a>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground font-mono">
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors">LEGAL</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
