'use client';

import React from 'react';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'PostgreSQL', level: 75 },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siapa Saya?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Saya adalah seorang Full Stack Developer yang passionate dalam menciptakan 
                aplikasi web yang tidak hanya fungsional, tetapi juga memberikan pengalaman 
                pengguna yang luar biasa.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dengan pengalaman dalam berbagai teknologi modern, saya fokus pada 
                pengembangan solusi yang scalable, maintainable, dan user-friendly. 
                Saya selalu antusias untuk belajar teknologi baru dan menghadapi tantangan baru.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">2+</div>
                <div className="text-gray-400 text-sm">Years Exp</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center hover:border-purple-500 transition-all duration-300">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">
              Keahlian Saya
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
