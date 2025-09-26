import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Static Data
const ecoIcons = [
  { src: "/Image5.png", alt: "Leaf", size: 40, delay: 0 },
  { src: "/Image5.png", alt: "Leaf", size: 30, delay: 1000 },
  { src: "/Image5.png", alt: "Sprout", size: 35, delay: 2000 },
];

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

const fertilizerApplications = [
  { icon: "🥕", text: "Organic farming & horticulture" },
  { icon: "🌴", text: "Soil rehabilitation & landscaping" },
  { icon: "🌻", text: "Greenhouse & floriculture" },
  { icon: "🍇", text: "Vineyards & specialty fruit cultivation" },
];

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

const ethanolApplications = [
  { icon: "⛽", text: "Bioethanol blended fuel" },
  { icon: "🏥", text: "Pharmaceutical & healthcare products" },
  { icon: "🏭", text: "Industrial solvents & chemicals" },
  { icon: "🌍", text: "Renewable energy initiatives" },
];

const stats = [
  { number: "30+", label: "Countries Exported" },
  { number: "25+", label: "Years Experience" },
  { number: "1M+", label: "Farmers Empowered" },
  { number: "100%", label: "Organic Certification" },
];

// Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Components
const HeroSection = ({ scrollY }) => {
  const heroParallax = useTransform(scrollY, [0, 300], [0, -50]);
  const blobsParallax = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <div className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-green-50">
      {/* Background blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-100px] w-56 md:w-72 h-56 md:h-72 bg-green-200 rounded-full filter blur-2xl opacity-30"
        style={{ y: blobsParallax }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-72 md:w-96 h-72 md:h-96 bg-green-300 rounded-full filter blur-2xl opacity-25"
        style={{ y: blobsParallax }}
      />

      {/* Hero content */}
      <motion.div
        className="text-center relative z-10 max-w-4xl mx-auto"
        style={{ y: heroParallax }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-700 mb-4">
          🌱 Our Products
        </h2>
        <div className="h-1 w-20 md:w-28 bg-green-600 mx-auto rounded-full mb-6" />
        <p className="text-base md:text-xl text-gray-700 leading-relaxed">
          At <span className="font-semibold text-green-800">Chetas Agrotech</span>, we empower farmers and industries through
          <span className="text-green-700 font-semibold"> organic fertilizers</span> and{" "}
          <span className="text-yellow-600 font-semibold">renewable ethanol</span> solutions for a sustainable future.
        </p>
      </motion.div>

      {/* Floating eco icons */}
      {ecoIcons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt={icon.alt}
          className="absolute hidden md:block"
          style={{ top: `${10 + idx * 20}%`, left: `${5 + idx * 30}%`, width: icon.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: [0, 1, 1] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 4,
            delay: icon.delay / 1000,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const InfoSection = ({ title, highlightData, applications, image1, image2, highlightColor }) => (
  <div className="mt-28 md:mt-36 max-w-7xl mx-auto">
    <motion.h3
      className={`text-3xl md:text-4xl font-bold text-${highlightColor}-700 text-center mb-10 md:mb-14`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>

    {/* Image 1 */}
    <motion.div
      className={`relative w-full max-w-5xl mx-auto mb-14 md:mb-20 rounded-3xl shadow-2xl overflow-hidden ${
        highlightColor === "yellow" ? "flex items-center justify-center bg-white" : ""
      }`}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={image1}
        alt={title}
        loading="lazy"
        className={`w-full ${
          highlightColor === "yellow"
            ? "max-h-[400px] md:max-h-[520px] object-contain p-6"
            : "object-cover max-h-[320px] md:max-h-[520px]"
        } rounded-3xl`}
      />
      <div
        className={`absolute top-4 right-4 px-5 py-2 rounded-full shadow-lg text-sm md:text-base font-semibold
          ${
            highlightColor === "green"
              ? "bg-green-600 text-white"
              : "bg-purple-600 text-white" // 👈 ethanol badge color changed
          }`}
      >
        {highlightColor === "green" ? "100% Organic ♻️" : "65 KLPD Capacity ⚡"}
      </div>
    </motion.div>

    {/* Highlight Cards */}
    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {highlightData.map((info, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
        >
          <h4 className={`text-xl font-semibold text-${highlightColor}-800 mb-4`}>
            {info.icon} {info.title}
          </h4>
          <p className="text-gray-600 text-base">{info.description}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Applications */}
    <div className="mt-14 md:mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-4">
      <div>
        <h3 className={`text-3xl font-bold text-${highlightColor}-700 mb-8`}>Applications</h3>
        <ul className="space-y-4 text-lg text-gray-700">
          {applications.map((app, i) => (
            <li
              key={i}
              className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-3xl">{app.icon}</span> {app.text}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={image2}
        alt={`${title} application`}
        loading="lazy"
        className="w-full rounded-3xl shadow-2xl object-cover max-h-[480px]"
      />
    </div>
  </div>
);

const StatsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 md:mt-36 max-w-6xl mx-auto px-4 text-center">
    {stats.map((stat, i) => (
      <motion.div
        key={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-green-800">
          {stat.number}
        </h3>
        <p className="text-base md:text-lg text-gray-600 mt-2">{stat.label}</p>
      </motion.div>
    ))}
  </div>
);

const CTASection = () => (
  <div className="mt-28 md:mt-36 text-center py-16 md:py-20 px-6 md:px-12 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Grow With Us</h3>
    <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
      Our fertilizers and ethanol solutions empower farmers and industries alike to build a sustainable and prosperous tomorrow.
    </p>
    <a
      href="/contact"
      className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg transition text-lg"
    >
      Contact Us
    </a>
  </div>
);

const Products = () => {
  const { scrollY } = useScroll();

  return (
    <section>
      <HeroSection scrollY={scrollY} />

      <InfoSection
        title="Premium Cow Dung Fertilizers"
        highlightData={fertilizerInfo}
        applications={fertilizerApplications}
        image1="/Images/CowFertilizer7.png"
        image2="/Images/CowFertilizer6.png"
        highlightColor="green"
      />

      <InfoSection
        title="Advanced Ethanol Solutions"
        highlightData={ethanolInfo}
        applications={ethanolApplications}
        image1="/Images/EthonolFertilizer6.jpeg"
        image2="/Images/EthonolFertilizer2.jpg"
        highlightColor="yellow"
      />

      <StatsSection />
      <CTASection />
    </section>
  );
};

export default Products;
