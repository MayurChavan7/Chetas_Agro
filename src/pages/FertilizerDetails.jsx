import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Process steps
const steps = [
  { title: "Cow Dung Collection", desc: "Dung collected from 10,000+ healthy cattle.", icon: "🐄" },
  { title: "Dewatering", desc: "Dung is dried & dewatered using modern machinery.", icon: "💧" },
  { title: "Composting", desc: "Material undergoes aerobic composting for nutrient enrichment.", icon: "🌱" },
  { title: "Testing & Certification", desc: "Each batch is lab tested for organic purity.", icon: "✅" },
  { title: "Packaging", desc: "Eco-friendly packaging ready for farmers worldwide.", icon: "📦" },
];

const FertilizerDetails = () => {
  return (
    <main className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-12 min-h-screen overflow-hidden bg-green-50">

      {/* Background Images */}
      {/* Desert */}
      <img
        src="/Images/Desert.webp"
        alt="Desert"
        className="absolute bottom-0 left-0 w-full z-0 object-cover pointer-events-none"
      />

      {/* Rainbow */}
      <img
        src="/images/rainbow.png"
        alt="Rainbow"
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 z-0 pointer-events-none"
      />

      {/* Crops */}
      <div className="absolute bottom-20 left-0 w-full flex justify-around z-0 pointer-events-none">
        <img src="/Images/crop1.webp" alt="Crop" className="h-20 animate-grow" />
        <img src="/Images/crop1.webp" alt="Crop" className="h-24 animate-grow delay-200" />
        <img src="/Images/crop1.webp" alt="Crop" className="h-20 animate-grow delay-400" />
      </div>

      {/* Raindrops */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-6 bg-blue-400 rounded-full"
          style={{ left: `${Math.random() * 100}%` }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 700, opacity: 1 }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6">
          🌱 How Cow Dung Fertilizer is Made
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          We transform cattle waste into nutrient-rich, certified organic fertilizers through a 
          sustainable, eco-friendly process.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-700 to-green-500 p-8 sm:p-10 rounded-3xl shadow-xl text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Supporting Farmers, Nurturing Nature 🌍
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Our organic fertilizers enrich soils, boost yields, and reduce chemical dependency — 
              building a sustainable future for agriculture.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 text-base sm:text-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default FertilizerDetails;
