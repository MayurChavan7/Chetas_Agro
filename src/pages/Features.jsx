import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "🐄 Cow Care & Sustainability",
    description:
      "Our cattle are given tailored diets based on age and health, with round-the-clock supervision and automated hygiene systems. This ensures both animal well-being and consistent, nutrient-rich cow dung for fertilizers.",
    image: "/images/cow-care.jpg",
  },
  {
    title: "⚙️ Advanced Technology",
    description:
      "RFID tracking and Remote Health Monitoring (RHM) bring precision livestock management, while modern distillation technology powers our 65 KLPD ethanol plant with Zero Liquid Discharge (ZLD).",
    image: "/images/technology.jpg",
  },
  {
    title: "🏭 World-Class Facilities",
    description:
      "From dewatering machines for premium fertilizer production to GMP-compliant ethanol distillation units, our infrastructure meets global quality benchmarks across agriculture and renewable energy.",
    image: "/images/facilities.jpg",
  },
  {
    title: "✅ Quality & Certifications",
    description:
      "Every batch undergoes rigorous testing in certified labs. Our fertilizers comply with international organic standards, and our ethanol is trusted for pharma, industrial, and fuel applications worldwide.",
    image: "/images/quality.jpg",
  },
  {
    title: "🌍 Global Reach",
    description:
      "Serving clients across Asia, Africa, Europe, and the Middle East with reliable logistics, export-ready packaging, and timely delivery. Farmers and industries alike trust us as long-term partners.",
    image: "/images/global.jpg",
  },
  {
    title: "♻️ Eco-Friendly Approach",
    description:
      "We transform waste into wealth: cow dung into organic fertilizer and grains into renewable ethanol. Our closed-loop, sustainable model reduces chemical usage, enhances soil health, and cuts carbon emissions.",
    image: "/images/eco-friendly.jpg",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold text-green-900 mb-4">
            Why Choose Chetas Agrotech?
          </h2>
          <div className="h-1 w-28 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Blending tradition with innovation — from organic fertilizers to
            renewable ethanol — we deliver sustainable, eco-friendly, and
            globally compliant solutions that empower farmers and industries.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-20">
          {featuresData.map(({ title, description, image }, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Image */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
                  loading="lazy"
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-green-800">
                  {title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
