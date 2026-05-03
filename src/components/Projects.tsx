"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            A selection of projects showcasing embedded systems expertise and technical depth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 border border-cyan-500/30 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-700">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-gray-500 capitalize">{key}</p>
                      <p className="text-sm font-semibold text-cyan-400">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
