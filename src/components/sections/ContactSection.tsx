'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/AldiPutraNugraha',
    color: 'hover:text-gray-400',
    bgHover: 'hover:bg-gray-600',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/aldi-p-800aaa1a7/',
    color: 'hover:text-blue-400',
    bgHover: 'hover:bg-blue-600',
  },
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://www.instagram.com/aldiptrngrh_/',
    color: 'hover:text-pink-400',
    bgHover: 'hover:bg-pink-600',
  },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:aldiputra430@gmail.com',
    color: 'hover:text-red-400',
    bgHover: 'hover:bg-red-600',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mari <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Berkolaborasi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Punya project atau ide menarik? Saya siap membantu mewujudkannya. 
            Mari diskusi dan ciptakan sesuatu yang luar biasa bersama!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Nama Anda"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ceritakan tentang project atau ide Anda..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kirim Pesan 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="text-white font-medium">Lokasi</h4>
                    <p className="text-gray-400">Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">aldiputra430@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="text-white font-medium">Availability</h4>
                    <p className="text-gray-400">Sen - Jum, 9:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-purple-500 ${social.bgHover} transition-all duration-300 group`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <span className="text-3xl">{social.icon}</span>
                    <span className="text-gray-300 font-medium group-hover:text-white">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
