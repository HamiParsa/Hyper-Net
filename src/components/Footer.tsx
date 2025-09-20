'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-slate-200 py-6"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#plans" className="hover:text-indigo-600 transition-colors">Plans</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400 text-center md:text-right">
          © {new Date().getFullYear()} HyperNet — All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
