
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const slogans = [
  "Transforming Waste into Wealth – Cow Dung to Fertilizer",
  "From Grains to Green Energy – Renewable Ethanol",
  "Sustainable Solutions for Farmers & Industries",
  "Global Standards, Local Roots",
  "Fueling Growth, Nurturing Nature",
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const cowDungProcessSteps = [
    { step: "1", title: "Collection", desc: "Sustainably gathering fresh cow dung from our own dairy farm with over 10,000 cattle." },
    { step: "2", title: "Dewatering", desc: "Removing excess moisture to concentrate nutrients and improve handling." },
    { step: "3", title: "Sanitization", desc: "Hygienic processing to eliminate pathogens, ensuring safety and quality." },
    { step: "4", title: "Testing & Certification", desc: "Lab analysis for nutrient content and compliance with international organic standards." },
    { step: "5", title: "Packaging & Export", desc: "Custom packaging with private labeling options, ready for global distribution." },
  ];

  const ethanolProcessSteps = [
    { step: "1", title: "Grain Handling", desc: "Cleaning, milling, and slurry preparation from maize & broken rice." },
    { step: "2", title: "Liquefaction", desc: "Enzymatic breakdown of starch into dextrin using high-temp cooking." },
    { step: "3", title: "Saccharification & Fermentation", desc: "Conversion into fermentable sugars and ethanol by yeast." },
    { step: "4", title: "Distillation & Dehydration", desc: "Multi-column distillation & molecular sieve dehydration." },
    { step: "5", title: "Co-Products", desc: "DDGS, CO₂, power & biogas from by-products ensuring zero waste." },
  ];

  const Timeline = ({ steps, color }) => (
    <div className="relative max-w-2xl mx-auto px-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="flex flex-col md:flex-row items-start md:items-center mb-10 relative"
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
        >
          <div className={`relative flex items-center justify-center w-12 h-12 bg-${color}-600 text-white font-bold text-lg rounded-full shadow-md md:mr-6 flex-shrink-0`}>
            {step.step}
          </div>
          <div className="md:ml-8 mt-4 md:mt-0">
            <h3 className={`text-xl md:text-2xl font-semibold text-${color}-800 mb-1 tracking-wide`}>
              {step.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden font-[Poppins]">
      {/* ========== SLOGAN BAR ========== */}
      <div className="relative z-10 py-6 sm:py-10 max-w-6xl mx-auto px-6 mt-24">
        <motion.div className="relative h-14 sm:h-16 overflow-hidden flex items-center justify-start rounded-2xl border bg-green-800/95 shadow-lg">
          <motion.div
            className="flex whitespace-nowrap gap-10 sm:gap-16 text-green-100 font-semibold uppercase text-sm sm:text-lg md:text-xl tracking-wide select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: slogans.length * 2, ease: "linear" },
            }}
          >
            {slogans.concat(slogans).map((text, i) => (
              <span key={i} className="px-3 sm:px-6">{text}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-1 max-w-6xl mx-auto space-y-20 sm:space-y-28 px-6 py-12 sm:py-16">
        
        {/* 🟩 Organic Fertilizer Section */}
        <section className="rounded-3xl shadow-lg p-8 sm:p-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.img
              src="/Images/CowFertilizer.jpg"
              alt="Organic Fertilizers"
              className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-6 tracking-tight">
                Organic Fertilizers
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Premium export-quality cow dung fertilizers — nutrient-rich, hygienically processed, and certified to meet global agricultural standards.
              </p>
              <ul className="space-y-3 list-disc list-inside text-gray-800 text-base md:text-lg">
                <li>🌱 Enhances soil fertility and microbial balance.</li>
                <li>🥕 Ideal for horticulture, vineyards, and sustainable farming.</li>
                <li>🧪 Certified and lab-tested for nutrient consistency.</li>
                <li>📦 Available in customizable, export-ready packaging.</li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="py-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-green-900 text-center">
              Organic Fertilizer Production Process
            </h3>
            <Timeline steps={cowDungProcessSteps} color="green" />
          </div>
        </section>

        {/* 🟨 Renewable Ethanol Section */}
        <section className="rounded-3xl shadow-lg p-8 sm:p-12 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-6 tracking-tight">
                Renewable Ethanol
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our 65 KLPD ethanol facility produces fuel ethanol, pharma-grade ENA, and EQRS — adhering to global quality and zero-liquid-discharge standards.
              </p>
              <ul className="space-y-3 list-disc list-inside text-yellow-800 text-base md:text-lg">
                <li>⚡ E20 fuel-blending compliant for sustainable mobility.</li>
                <li>💊 Pharma & industrial-grade ethanol for diverse sectors.</li>
                <li>♻️ Advanced ZLD systems ensuring no effluent discharge.</li>
                <li>🌍 Global supply across Asia, Africa, Europe & Middle East.</li>
              </ul>
            </div>
            <motion.img
              src="/Images/EthonolFertilizer.jpg"
              alt="Renewable Ethanol Plant"
              className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Timeline */}
          <div className="py-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-yellow-700 text-center">
              Ethanol Production Process
            </h3>
            <Timeline steps={ethanolProcessSteps} color="yellow" />
          </div>
        </section>

        {/* 🌿 CTA */}
        <div className="py-12 px-8 sm:px-10 text-center bg-gradient-to-r from-green-800 to-green-600 text-white rounded-3xl max-w-3xl mx-auto shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            One Stop Agro-Energy Hub
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-green-50">
            From organic fertilizers to renewable ethanol — Chetas Agro powers sustainability through technology and eco-innovation.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-green-900 font-semibold px-10 py-4 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform text-lg"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
