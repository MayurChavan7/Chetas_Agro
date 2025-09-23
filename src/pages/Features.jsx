import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  { title: "🐄 Cow Care & Sustainability", description: "10,000+ cattle with balanced diets, automated hygiene, and health monitoring. Ensuring animal well-being and rich organic raw material for fertilizers.", image: "/images/cow-care.jpg" },
  { title: "🌱 Organic Fertilizers", description: "High-quality dewatered cow dung processed into organic fertilizers — improving soil fertility, boosting microbial life, and increasing crop yields.", image: "/images/fertilizer.jpg" },
  { title: "⚡ Renewable Ethanol", description: "65 KLPD grain-based ethanol distillery with ZLD. Producing pharma-grade, ENA, and biofuel ethanol — reducing fossil fuel dependence and cutting emissions.", image: "/images/ethanol.jpg" },
  { title: "⚙️ Advanced Technology", description: "RFID livestock tracking, Remote Health Monitoring (RHM), modern distillation & composting lines. Automation ensures hygiene and world-class output.", image: "/images/technology.jpg" },
  { title: "🏭 World-Class Facilities", description: "GMP-compliant ethanol plants, effluent treatment units, and advanced composting facilities. Designed for scalability with global safety standards.", image: "/images/facilities.jpg" },
  { title: "✅ Quality & Certifications", description: "Every batch lab-tested. Fertilizers comply with organic standards, ethanol meets pharma & industrial benchmarks worldwide.", image: "/images/quality.jpg" },
  { title: "🌍 Global Reach", description: "Supplying fertilizers & ethanol across Asia, Africa, Europe, and the Middle East with export-ready packaging and reliable logistics.", image: "/images/global.jpg" },
  { title: "♻️ Eco-Friendly Model", description: "Closed-loop circular model: cow dung → fertilizers → crops → ethanol → renewable energy. Reducing carbon footprint & enabling green adoption.", image: "/images/eco-friendly.jpg" },
  { title: "👨‍🌾 Farmer Empowerment", description: "1M+ farmers benefit from fertilizers & training programs. Better soils, higher yields, and reduced chemical usage for rural prosperity.", image: "/images/farmer.jpg" },
];

// Crop images/icons to animate down
const crops = [
  "/images/crop1.png",
  "/images/crop2.png",
  "/images/crop3.png",
];

const Features = () => {
  return (
    <section className="relative pt-32 pb-32 sm:pt-36 sm:pb-36 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      {/* Floating Background Icons */}
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 text-6xl opacity-10">🌿</motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-20 right-16 text-7xl opacity-10">🍃</motion.div>

      {/* Animated Crops from Top */}
      {crops.map((crop, index) => (
        <motion.img
          key={index}
          src={crop}
          alt="Crop"
          className="absolute top-0 w-12 sm:w-16 md:w-20 opacity-80"
          style={{ left: `${10 + index * 25}%` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: [ -100, 800 ], opacity: [0, 1, 0] }}
          transition={{ duration: 12 + index * 2, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-700">
            Why Choose Chetas Agrotech?
          </h2>
          <div className="h-1 w-24 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Blending tradition with innovation — from <span className="font-semibold text-green-800">organic fertilizers</span> to <span className="font-semibold text-yellow-600">renewable ethanol</span>, we deliver sustainable, eco-friendly, and certified solutions empowering farmers & industries globally.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-24">
          {featuresData.map(({ title, description, image }, index) => {
            const isEven = index % 3 === 0;
            const layoutClass = isEven ? "md:flex-row" : index % 3 === 1 ? "md:flex-row-reverse" : "flex-col items-center";
            const textAlign = isEven ? "md:text-left text-center" : index % 3 === 1 ? "md:text-right text-center" : "text-center";

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex ${layoutClass} gap-10`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Image */}
                <motion.div className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.04, rotate: isEven ? 1 : -1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <img src={image} alt={title} className="w-full h-72 md:h-96 object-cover rounded-2xl" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                </motion.div>

                {/* Text */}
                <div className={`flex-1 ${textAlign}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">{title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
