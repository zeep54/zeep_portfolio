"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function Stats() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    portfolioData.stats.forEach((stat) => {
      const numValue = parseInt(stat.value);
      if (!isNaN(numValue)) {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(numValue / 30);
          if (count >= numValue) {
            setCounts((prev) => ({ ...prev, [stat.label]: numValue }));
            clearInterval(interval);
          } else {
            setCounts((prev) => ({ ...prev, [stat.label]: count }));
          }
        }, 30);
      }
    });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center p-8 rounded-lg bg-slate-900/50 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                {counts[stat.label] !== undefined ? (
                  <>
                    {counts[stat.label]}
                    {stat.value.includes("+") ? "+" : ""}
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
