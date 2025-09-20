import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";

const features = [
  {
    title: "Sustainability Commitment",
    description:
      "Leading the way in eco-conscious farming with organic inputs and minimal environmental impact.",
    emoji: "🌿",
  },
  {
    title: "Technology Integration",
    description:
      "Using precision agtech and state-of-the-art farming equipment for optimized yield and resource use.",
    emoji: "🤖",
  },
  {
    title: "Global Reach & Support",
    description:
      "A trusted supplier for farms and businesses across Asia, Africa, Europe, and the Middle East.",
    emoji: "🌍",
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-8 text-green-900"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            To become a <span className="font-semibold text-green-800">global leader</span> in
            sustainable agricultural inputs by providing{" "}
            <span className="text-green-600">organic, eco-conscious alternatives</span> to chemical
            fertilizers — powering better food systems with integrity and innovation.
          </motion.p>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {features.map(({ title, description, emoji }, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg border border-green-100 relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="text-6xl mb-6 block transform group-hover:scale-125 transition-transform duration-300">
                  {emoji}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-green-900">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section
        className="relative py-24 text-white text-center bg-gradient-to-r from-green-900 via-green-700 to-green-600 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Decorative animated background shapes */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #ffffff 0%, transparent 25%), radial-gradient(circle at 80% 70%, #ffffff 0%, transparent 25%)",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <blockquote className="text-3xl md:text-4xl italic font-light tracking-wide drop-shadow-lg leading-relaxed">
            “Farming isn’t just growing crops; it’s cultivating trust, innovation, and sustainability
            for generations to come.”
          </blockquote>
          <cite className="block mt-8 text-lg font-semibold tracking-wide">
            — Harshil Agrotech Leadership
          </cite>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-yellow-100 via-green-50 to-white text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-green-900 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Grow with Us?
          </motion.h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join thousands of farmers and businesses worldwide who trust{" "}
            <span className="text-green-700 font-semibold">Harshil Agrotech</span> to deliver
            reliable, sustainable, and high-quality organic solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-10 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold shadow-lg transition-colors focus:ring-4 focus:ring-green-400"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
