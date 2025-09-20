"use client";
import React, { useState } from "react";
import { FaWifi, FaGamepad, FaHeadset, FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const faqs = [
    {
      question: "Can I change my plan?",
      answer: "Yes, you can change your plan anytime depending on your needs.",
    },
    {
      question: "How can I pay?",
      answer: "Online monthly payments or annual payments with discount.",
    },
    {
      question: "Do you offer installation?",
      answer: "Yes! Free installation is included in every plan.",
    },
    {
      question: "Is there a contract?",
      answer: "No long-term contracts. You can cancel anytime.",
    },
    {
      question: "What is the network coverage?",
      answer: "We provide nationwide coverage with high reliability.",
    },
    {
      question: "Is customer support available 24/7?",
      answer:
        "Yes, our team is available around the clock via chat, call, or ticket.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased overflow-x-hidden">
        {/* HERO IMAGE + SPEED CARD */}
        <section className="relative mt-20">
          <Image
            width={1000}
            height={1000}
            src="https://wallpapercave.com/wp/wp12676923.jpg"
            alt="Internet hero"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Internet that makes life faster
            </h2>
            <p className="mt-4 text-white/90 text-lg drop-shadow-sm">
              Low ping, high uptime, and 24/7 support. It’s time to use internet
              that never slows you down.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#plans"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow hover:scale-105 transition"
              >
                View Plans
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-white/60 text-white rounded-lg hover:bg-white/10 transition"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-[90%] md:w-2/3 lg:w-1/3 rounded-2xl shadow-2xl p-6 bg-white hover:shadow-indigo-200 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Current Speed</p>
                <p className="text-2xl font-semibold">1.2 Gbps</p>
              </div>
              <div className="text-slate-500 text-sm flex items-center gap-2">
                <FaTachometerAlt /> Ping: 6 ms
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-2 rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#6366f1,#06b6d4)",
                  }}
                ></motion.div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Network quality in your area: Excellent
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-sm font-semibold">99.99%</p>
                <p className="text-xs text-slate-400">Uptime</p>
              </div>
              <div>
                <p className="text-sm font-semibold">6 ms</p>
                <p className="text-xs text-slate-400">Ping</p>
              </div>
              <div>
                <p className="text-sm font-semibold">24/7</p>
                <p className="text-xs text-slate-400">Support</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-6 mt-24">
          {/* FEATURES */}
          <section id="features" className="py-12">
            <h3 className="text-2xl font-bold text-center">Key Features</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaGamepad className="text-indigo-600 text-3xl" />,
                  title: "Low Ping Gaming",
                  desc: "Seamless matches with minimum latency.",
                },
                {
                  icon: <FaHeadset className="text-indigo-600 text-3xl" />,
                  title: "Professional Support",
                  desc: "24/7 chat, call, and ticket support.",
                },
                {
                  icon: <FaWifi className="text-indigo-600 text-3xl" />,
                  title: "Network Monitoring",
                  desc: "Regular quality reports and stats.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
                >
                  {f.icon}
                  <h4 className="mt-3 font-semibold">{f.title}</h4>
                  <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PLANS */}
          <section id="plans" className="py-12">
            <h3 className="text-2xl font-bold text-center">Plans</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Basic", price: "$19.99", speed: "50 Mbps", badge: "" },
                {
                  name: "Performance",
                  price: "$34.99",
                  speed: "200 Mbps",
                  badge: "Recommended",
                },
                { name: "Plus", price: "$59.99", speed: "1 Gbps", badge: "" },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow flex flex-col hover:scale-105 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">{p.name}</h4>
                    {p.badge && (
                      <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-3xl font-extrabold">{p.price}</p>
                  <p className="text-sm text-slate-500 mt-1">Up to {p.speed}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
                    <li>Free Installation</li>
                    <li>No Long-Term Contract</li>
                    <li>24/7 Support</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:scale-105 transition"
                    >
                      Choose & Order
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ (Accordion) */}
          <section id="faq" className="py-12">
            <h3 className="text-2xl font-bold text-center">
              Frequently Asked Questions
            </h3>
            <div className="mt-6 flex flex-col gap-4 max-w-2xl mx-auto">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <button
                    onClick={() => toggleIndex(i)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center cursor-pointer focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span
                      className={`transition-transform text-indigo-600 font-bold ${
                        openIndex === i ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-4 text-sm text-slate-500">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <motion.section
            id="contact"
            className="py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-indigo-600 text-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-2xl font-bold">Ready to Get Started?</h4>
                <p className="mt-2 text-slate-100 text-sm">
                  Send us your address, phone, or email and we’ll reach out.
                </p>
              </div>
              <form className="space-y-3">
                <input
                  aria-label="Name"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg "
                />
                <input
                  aria-label="Phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded-lg "
                />
                <input
                  aria-label="Address"
                  placeholder="Address or ZIP code"
                  className="w-full px-4 py-2 rounded-lg "
                />
                <button className="w-full px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:scale-105 transition">
                  Request a Call
                </button>
              </form>
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
