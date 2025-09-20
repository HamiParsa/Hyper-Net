"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed text-black top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold">
            IS
          </div>
          <div>
            <h1 className="text-lg font-semibold">HyperNet</h1>
            <p className="text-xs text-slate-500">
              Faster speeds, lower latency
            </p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="#features"
            className="hover:text-indigo-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#plans"
            className="hover:text-indigo-600 transition-colors"
          >
            Plans
          </Link>
          <Link href="#faq" className="hover:text-indigo-600 transition-colors">
            FAQ
          </Link>
          <Link
            href="/modem"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-600 font-bold"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md w-full text-center"
        >
          <a
            href="#features"
            className="block py-2 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#plans"
            className="block py-2 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Plans
          </a>
          <a
            href="#faq"
            className="block py-2 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 mx-4 bg-indigo-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </motion.nav>
      )}
    </header>
  );
}
