"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

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
    <section id="skills" className="py-20 bg-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Specialized in embedded systems development with deep expertise across multiple technology stacks
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{category}</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
