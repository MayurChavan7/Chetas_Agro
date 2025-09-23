import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Floating eco icons
const ecoIcons = [
  { src: "/Image5.png", alt: "Leaf", size: 40, delay: 0 },
  { src: "/Image5.png", alt: "Leaf", size: 30, delay: 1000 },
  { src: "/Image5.png", alt: "Sprout", size: 35, delay: 2000 },
];

// Fertilizer Highlights
const fertilizerInfo = [
  {
    title: "Eco-Friendly",
    icon: "🌍",
    description:
      "Minimizes chemical dependency, converting organic waste into nutrient-rich compost for sustainable farming.",
  },
  {
    title: "Consistent High Yield",
    icon: "🌾",
    description:
      "Improves soil fertility and structure for healthier crops, boosting yields and long-term resilience.",
  },
  {
    title: "Certified Organic",
    icon: "✅",
    description:
      "Strictly tested batches ensure purity and compliance with global organic standards.",
  },
];

// Fertilizer Applications
const fertilizerApplications = [
  { icon: "🥕", text: "Organic farming & horticulture" },
  { icon: "🌴", text: "Soil rehabilitation & landscaping" },
  { icon: "🌻", text: "Greenhouse & floriculture" },
  { icon: "🍇", text: "Vineyards & specialty fruit cultivation" },
];

// Ethanol Highlights
const ethanolInfo = [
  {
    title: "Clean Fuel Blending",
    icon: "⚡",
    description:
      "Supports renewable energy by blending bioethanol with petrol to reduce emissions.",
  },
  {
    title: "Pharma-Grade Purity",
    icon: "💊",
    description:
      "GMP-certified ethanol for medicinal, healthcare, and laboratory applications.",
  },
  {
    title: "Zero Liquid Discharge",
    icon: "♻️",
    description:
      "Recycles all process water, ensuring eco-friendly ethanol production.",
  },
];

// Ethanol Applications
const ethanolApplications = [
  { icon: "⛽", text: "Bioethanol blended fuel" },
  { icon: "🏥", text: "Pharmaceutical & healthcare products" },
  { icon: "🏭", text: "Industrial solvents & chemicals" },
  { icon: "🌍", text: "Renewable energy initiatives" },
];

// Shared Stats
const stats = [
  { number: "30+", label: "Countries Exported" },
  { number: "25+", label: "Years Experience" },
  { number: "1M+", label: "Farmers Empowered" },
  { number: "100%", label: "Organic Certification" },
];

const Products = () => {
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(0);

  const heroParallax = useTransform(scrollY, [0, 300], [0, -50]);
  const blobsParallax = useTransform(scrollY, [0, 500], [0, 80]);

  useEffect(() => {
    return scrollY.onChange((y) => setScrollOffset(y));
  }, [scrollY]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-green-50 overflow-hidden">

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-100px] w-56 md:w-72 h-56 md:h-72 bg-green-200 rounded-full filter blur-3xl opacity-30"
        style={{ y: blobsParallax }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-72 md:w-96 h-72 md:h-96 bg-green-300 rounded-full filter blur-3xl opacity-25"
        style={{ y: blobsParallax }}
      />

      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 md:mb-20 relative z-10 max-w-4xl mx-auto"
        style={{ y: heroParallax }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-700 mb-4">
          🌱 Our Products
        </h2>
        <div className="h-1 w-20 md:w-28 bg-green-600 mx-auto rounded-full mb-6"></div>
        <p className="text-base md:text-xl text-gray-700 leading-relaxed">
          At <span className="font-semibold text-green-800">Chetas Agrotech</span>, we empower farmers and industries through 
          <span className="text-green-700 font-semibold"> organic fertilizers</span> and <span className="text-yellow-600 font-semibold">renewable ethanol</span> solutions for a sustainable future.
        </p>
      </motion.div>

      {/* Floating Eco Icons */}
      {ecoIcons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt={icon.alt}
          className="absolute hidden md:block"
          style={{ top: `${10 + idx * 20}%`, left: `${5 + idx * 30}%`, width: icon.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: [0, 1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 2, duration: 4, delay: icon.delay / 1000, ease: "easeInOut" }}
        />
      ))}

      {/* Cow Dung Fertilizers Section */}
      <div className="mt-20 md:mt-28 max-w-7xl mx-auto">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Premium Cow Dung Fertilizers
        </motion.h3>

        {/* Image and Label */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto mb-14 md:mb-20 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/CowFertilizer2.webp" alt="Cow dung fertilizer" className="w-full object-cover max-h-[320px] md:max-h-[520px] rounded-3xl" />
          <div className="absolute top-4 right-4 bg-green-700 text-white px-5 py-2 rounded-full shadow-lg text-sm md:text-base font-semibold">
            100% Organic ♻️
          </div>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {fertilizerInfo.map((info, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <h4 className="text-xl font-semibold text-green-800 mb-4">{info.icon} {info.title}</h4>
              <p className="text-gray-600 text-base">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Applications List */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4">
          <div>
            <h3 className="text-3xl font-bold text-green-900 mb-8">Applications</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              {fertilizerApplications.map((app, i) => (
                <li key={i} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                  <span className="text-3xl">{app.icon}</span> {app.text}
                </li>
              ))}
            </ul>
          </div>
          <img src="/CowFertilizer3.jpg" alt="Fertilizer application" className="w-full rounded-3xl shadow-2xl object-cover max-h-[480px]" />
        </div>
      </div>

      {/* Ethanol Section */}
      <div className="mt-28 md:mt-36 max-w-7xl mx-auto">
        <motion.h3 className="text-3xl md:text-4xl font-bold text-yellow-700 text-center mb-10 md:mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          Advanced Ethanol Solutions
        </motion.h3>

        {/* Image with Capacity */}
        <motion.div className="relative w-full max-w-5xl mx-auto mb-14 md:mb-20 rounded-3xl shadow-2xl overflow-hidden" initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
          <img src="/EthonolFertilizer1.jpg" alt="Ethanol Plant" className="w-full object-cover max-h-[320px] md:max-h-[520px] rounded-3xl" />
          <div className="absolute top-4 right-4 bg-yellow-600 text-white px-5 py-2 rounded-full shadow-lg text-sm md:text-base font-semibold">
            65 KLPD Capacity ⚡
          </div>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {ethanolInfo.map((info, i) => (
            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-semibold text-yellow-600 mb-4">{info.icon} {info.title}</h4>
              <p className="text-gray-600 text-base">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Applications List */}
        <div className="mt-14 md:mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4">
          <div>
            <h3 className="text-3xl font-bold text-yellow-700 mb-8">Applications</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              {ethanolApplications.map((app, i) => (
                <li key={i} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                  <span className="text-3xl">{app.icon}</span> {app.text}
                </li>
              ))}
            </ul>
          </div>
          <img src="/EthonolFertilizer2.jpg" alt="Ethanol application" className="w-full rounded-3xl shadow-2xl object-cover max-h-[480px]" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 md:mt-36 max-w-6xl mx-auto px-4 text-center">
        {stats.map((stat, i) => (
          <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl md:text-4xl font-extrabold text-green-800">{stat.number}</h3>
            <p className="text-base md:text-lg text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-28 md:mt-36 text-center py-16 md:py-20 px-6 md:px-12 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Grow With Us</h3>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Our fertilizers and ethanol solutions empower farmers and industries alike to build a sustainable and prosperous tomorrow.
        </p>
        <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg transition text-lg">
          Contact Us
        </a>
      </div>

    </section>
  );
};

export default Products;
