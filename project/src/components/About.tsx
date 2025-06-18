import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating modern, 
              responsive applications using cutting-edge technologies. My journey began with a fascination 
              for problem-solving and has evolved into a career dedicated to crafting exceptional user experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or mentoring aspiring developers.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Code className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Clean Code</h3>
                <p className="text-sm text-slate-600 mt-2">Writing maintainable, scalable solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Palette className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Design Focus</h3>
                <p className="text-sm text-slate-600 mt-2">Creating beautiful, intuitive interfaces</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800">Performance</h3>
                <p className="text-sm text-slate-600 mt-2">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
              <Code className="w-12 h-12 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}