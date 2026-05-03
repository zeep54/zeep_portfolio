"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Logo/Name */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              {portfolioData.name}
            </div>
            <p className="text-gray-400">{portfolioData.title}</p>
          </div>

          {/* Middle - Navigation */}
          <div className="flex gap-8">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
