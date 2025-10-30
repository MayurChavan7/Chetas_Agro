import React, { useMemo } from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "🐄 Cow Care & Sustainability",
    description:
      "We manage over 10,000 cattle with automated feeding, hydration, and health monitoring systems. Each animal is tagged with RFID for real-time tracking, ensuring welfare and disease prevention. The cow dung collected serves as the foundation for high-grade organic fertilizers, promoting a circular ecosystem.",
    highlights: [
      "Automated health and feeding systems",
      "RFID-based livestock monitoring",
      "Organic waste management for fertilizer production",
    ],
    image: "/Images/CowSuntain1.jpeg",
  },
  {
    title: "🌱 Organic Fertilizers",
    description:
      "We convert dewatered cow dung into nutrient-dense compost fertilizers through a controlled aerobic process. This ensures balanced NPK ratios, high humic acid content, and superior microbial activity — improving soil structure, water retention, and long-term fertility.",
    highlights: [
      "100% organic, chemical-free formulation",
      "Improves soil structure and moisture retention",
      "Rich in humic substances and beneficial microbes",
    ],
    image: "/Images/OrganicFertilizer.jpg",
  },
  {
    title: "⚡ Renewable Ethanol",
    description:
      "Our 65 KLPD grain-based ethanol plant follows Zero Liquid Discharge (ZLD) standards, producing pharma-grade and biofuel ethanol. The process generates renewable energy from distillery waste, significantly cutting carbon emissions and fossil fuel dependence.",
    highlights: [
      "65 KLPD grain-based ethanol capacity",
      "Pharma-grade ENA & fuel-grade ethanol",
      "ZLD-compliant eco-friendly operation",
    ],
    image: "/Images/Renewable1.jpeg",
  },
  {
    title: "⚙️ Advanced Technology",
    description:
      "We employ modern automation, IoT sensors, and AI-based analytics to ensure process accuracy from cattle health monitoring to compost maturity. Our distillation units and composting lines integrate SCADA and remote control for seamless operations.",
    highlights: [
      "AI & IoT integration for real-time insights",
      "SCADA-based automation for precision control",
      "Smart composting & distillation monitoring",
    ],
    image: "/Images/Technology1.jpeg",
  },
  {
    title: "🏭 World-Class Facilities",
    description:
      "Chetas Agrotech’s facilities are designed for global scalability and operational safety. GMP-compliant ethanol plants, effluent treatment units, biogas recovery systems, and automated packaging lines ensure top-quality output that meets export-grade standards.",
    highlights: [
      "GMP-compliant ethanol and fertilizer plants",
      "Effluent treatment and odor control systems",
      "Modern packaging & logistics centers",
    ],
    image: "/Images/World1.jpeg",
  },
  {
    title: "✅ Quality & Certifications",
    description:
      "Every product undergoes rigorous quality control in ISO-certified labs. Our fertilizers meet BIS, FSSAI, and international organic certification standards, ensuring purity, consistency, and reliability across every batch.",
    highlights: [
      "ISO 9001, FSSAI, and BIS certifications",
      "Batch-wise nutrient and quality testing",
      "Compliance with international export standards",
    ],
    image: "/Images/Certificate1.png",
  },
  {
    title: "🌍 Global Reach",
    description:
      "With an extensive export network, our fertilizers reach global destinations across Asia, Africa, and Europe. Our international packaging, logistics, and documentation systems ensure safe, compliant, and timely delivery to our partners.",
    highlights: [
      "Extensive export network",
      "Export-compliant packaging standards",
      "Reliable and on-time logistics",
    ],
    image: "/Images/Global1.png",
  },
  {
    title: "♻️ Eco-Friendly Model",
    description:
      "We operate a closed-loop circular economy — where livestock waste is repurposed into fertilizers and bioenergy. This reduces landfill impact, conserves resources, and drives the green energy transition for sustainable agriculture.",
    highlights: [
      "Zero-waste circular ecosystem",
      "Energy-efficient biogas recovery",
      "Reduced carbon footprint across operations",
    ],
    image: "/Images/Eco.jpg",
  },
  {
    title: "👨‍🌾 Farmer Empowerment",
    description:
      "Our mission extends beyond products — we empower farmers through soil testing, crop advisory, and training programs. Many farmers have benefited from improved soil fertility, higher yields, and reduced chemical dependency.",
    highlights: [
      "Many farmers benefited",
      "Training programs for sustainable farming",
      "Boosts yield while reducing chemical inputs",
    ],
    image: "/Images/Power1.jpeg",
  },
];

// Floating particles
const generateCrops = (num) =>
  Array.from({ length: num }).map(() => ({
    size: 14 + Math.random() * 14,
    color: `hsl(${Math.random() * 60 + 100}, 60%, 45%)`,
    left: Math.random() * 95,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 6,
  }));

const Features = () => {
  const crops = useMemo(
    () => generateCrops(typeof window !== "undefined" && window.innerWidth < 768 ? 6 : 12),
    []
  );

  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden"
    >
      {/* Floating background icons */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-12 left-12 text-7xl opacity-10 select-none"
      >
        🌿
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-24 right-20 text-8xl opacity-10 select-none"
      >
        🍃
      </motion.div>

      {/* Floating particles */}
      {crops.map((crop, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-sm"
          style={{
            width: crop.size,
            height: crop.size,
            backgroundColor: crop.color,
            left: `${crop.left}%`,
            top: -60,
          }}
          initial={{ y: -60, opacity: 0 }}
          animate={{
            y: [0, 900],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: crop.duration,
            repeat: Infinity,
            repeatDelay: crop.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-green-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-700 to-green-900">
          Why Choose <span className="text-green-800">Chetas Agrotech?</span>
        </h2>
        <div className="h-1.5 w-28 mx-auto bg-green-600 rounded-full"></div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
          Bridging tradition and technology — delivering{" "}
          <span className="text-green-800 font-semibold">organic fertilizers</span> and{" "}
          <span className="text-yellow-600 font-semibold">renewable ethanol</span>{" "}
          that power sustainable growth worldwide.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {featuresData.map(({ title, description, image, highlights }, index) => {
          const layoutType = index % 3 === 2 ? "center" : index % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={index}
              className={`${
                layoutType === "center"
                  ? "text-center"
                  : `flex flex-col md:flex-row ${
                      layoutType === "left" ? "" : "md:flex-row-reverse"
                    } items-center gap-10 md:gap-16`
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <motion.div
                className={`flex-1 relative rounded-3xl overflow-hidden shadow-2xl group ${
                  layoutType === "center" ? "mx-auto max-w-3xl" : ""
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-80 md:h-[26rem] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </motion.div>

              {/* Text Section */}
              <div
                className={`flex-1 ${
                  layoutType === "center"
                    ? "mt-8 max-w-3xl mx-auto"
                    : `text-center md:text-${layoutType} px-2`
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">
                  {title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {description}
                </p>
                <ul
                  className={`text-gray-600 text-sm sm:text-base space-y-2 ${
                    layoutType === "right" ? "md:pr-5" : "md:pl-5"
                  }`}
                >
                  {highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✔️</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 🌟 Innovation Section */}
      <div className="max-w-7xl mx-auto mt-32 text-center bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white rounded-3xl py-16 px-6 shadow-lg">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-6"
        >
          Innovation at <span className="text-lime-300">Chetas Agrotech</span>
        </motion.h3>
        <p className="max-w-3xl mx-auto text-lg mb-12 text-green-100">
          Integrating clean energy, biotechnology, and digital automation to shape the future
          of sustainable agriculture in India and beyond.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {[
            { value: "75,000+", label: "Healthy Cattle Managed" },
            { value: "65 KLPD", label: "Ethanol Production Capacity" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-6 rounded-2xl shadow-md backdrop-blur-md border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-3xl font-bold text-lime-300">{stat.value}</h4>
              <p className="text-sm mt-2 text-green-50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
