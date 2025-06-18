import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-slate-400">
              Building digital experiences with passion and precision
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Alex</span>
            <span className="mx-2">•</span>
            <span>© 2025 All rights reserved</span>
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}