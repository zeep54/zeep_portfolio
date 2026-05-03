"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: portfolioData.email,
      link: `mailto:${portfolioData.email}`,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      link: portfolioData.linkedin,
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "View my code",
      link: portfolioData.github,
    },
  ];

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
    <section id="contact" className="py-20 bg-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your embedded systems project to life? Let's connect and discuss your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="p-8 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={portfolioData.resume}
            download
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
