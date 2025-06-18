import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="text-emerald-600">Alex</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & Designer crafting beautiful digital experiences
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">
            I build modern web applications with clean code, thoughtful design, and a focus on user experience.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToAbout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              className="border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-emerald-600 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}