'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop/Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/50 hover:bg-red-500 text-white transition-all duration-300"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

            <motion.div 
              className="relative p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
                <Image
                  src="/aldi.jpeg"
                  alt="Aldi Putra Nugraha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Aldi Putra Nugraha
                </span>
              </h2>
              <p className="text-xl text-purple-400 mb-4 font-medium">
                Full Stack Developer
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate developer yang fokus pada pembuatan aplikasi web modern 
                dengan teknologi terkini. Saya suka menciptakan solusi yang 
                inovatif dan user-friendly.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-700/50 rounded-xl p-3 backdrop-blur-sm border border-slate-600">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-3 backdrop-blur-sm border border-slate-600">
                  <div className="text-2xl font-bold text-pink-400">2+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-3 backdrop-blur-sm border border-slate-600">
                  <div className="text-2xl font-bold text-yellow-400">10+</div>
                  <div className="text-xs text-gray-400">Skills</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="https://github.com/AldiPutraNugraha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-gray-600 rounded-lg transition-all duration-300 text-white text-sm"
                  >
                    <span>🐙</span>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aldi-p-800aaa1a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-all duration-300 text-white text-sm"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:aldiputra430@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-red-600 rounded-lg transition-all duration-300 text-white text-sm"
                  >
                    <span>✉️</span>
                    <span>Email</span>
                  </a>
                  <a
                    href="https://www.instagram.com/aldiptrngrh_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-pink-600 rounded-lg transition-all duration-300 text-white text-sm"
                  >
                    <span>📷</span>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="mt-8 flex gap-4 justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Saya
            </motion.a>
            <motion.a
              href="#projects"
              onClick={onClose}
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
