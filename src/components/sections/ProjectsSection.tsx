'use client';

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan real-time notifications.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛍️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim, drag & drop, dan integrasi calendar.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    image: '📋',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Dashboard analytics untuk mengelola multiple social media accounts dengan real-time metrics.',
    tech: ['Next.js', 'Chart.js', 'REST API'],
    image: '📊',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Platform blogging dengan markdown support, SEO optimization, dan comment system.',
    tech: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    image: '✍️',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Aplikasi cuaca dengan forecast 7 hari, maps integration, dan notifikasi cuaca ekstrem.',
    tech: ['React', 'OpenWeather API', 'Mapbox'],
    image: '🌤️',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'Content Management System untuk portfolio dengan drag & drop editor dan customizable themes.',
    tech: ['Next.js', 'MongoDB', 'AWS S3'],
    image: '🎨',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berikut adalah beberapa project yang telah saya kerjakan. 
            Setiap project dibuat dengan dedikasi dan perhatian terhadap detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image/Icon */}
              <div className={`bg-gradient-to-br ${project.color} p-12 flex items-center justify-center`}>
                <span className="text-7xl">{project.image}</span>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-slate-700 text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                    Live Demo
                  </button>
                  <button className="flex-1 px-4 py-2 border border-slate-600 text-gray-300 rounded-lg text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-slate-800 border border-slate-700 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
            Lihat Semua Project →
          </button>
        </div>
      </div>
    </section>
  );
}
