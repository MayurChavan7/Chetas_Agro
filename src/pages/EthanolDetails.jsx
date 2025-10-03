import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Grain Procurement", desc: "Locally sourced maize & broken rice as feedstock.", icon: "🌾" },
  { title: "Fermentation", desc: "Grains undergo fermentation to produce ethanol.", icon: "⚗️" },
  { title: "Distillation", desc: "Ethanol refined to pharma-grade & fuel-grade purity.", icon: "🏭" },
  { title: "Zero Liquid Discharge", desc: "All water recycled, ensuring eco-friendly production.", icon: "♻️" },
  { title: "Packaging & Supply", desc: "Ethanol supplied to pharma, fuel & global industries.", icon: "🚛" },
];

const EthanolDetails = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-700 mb-6 sm:mb-8">
          ⚡ How Ethanol is Produced
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Our 65 KLPD distillery uses cutting-edge technology to produce renewable, pharma-grade ethanol.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-700 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthanolDetails;
