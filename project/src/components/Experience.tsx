import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led a team of 4 developers in building scalable React applications',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovators',
      location: 'Remote',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Built RESTful APIs serving 10k+ daily active users',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Integrated third-party services including payment processors and analytics'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: [
        'Created responsive web applications using modern JavaScript frameworks',
        'Worked closely with UX/UI team to implement design systems',
        'Optimized web applications for mobile devices and accessibility',
        'Participated in agile development processes and sprint planning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                      <p className="text-emerald-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-slate-500 mt-2 sm:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-600 flex items-start">
                        <span className="text-emerald-600 mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}