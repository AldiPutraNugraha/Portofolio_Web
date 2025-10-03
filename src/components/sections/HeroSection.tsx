'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-down">
          <span className="text-purple-400 text-lg font-medium tracking-wider">
            Halo, Saya
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Aldi Putra Nugraha
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-up animation-delay-200">
          Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Saya membuat pengalaman digital yang indah dan fungsional.
          Spesialisasi dalam web development modern dengan teknologi terkini.
        </p>
        
        <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Lihat Karya Saya
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
