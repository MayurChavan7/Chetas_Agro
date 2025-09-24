import React, { useMemo } from "react";
import { motion } from "framer-motion";

const featuresData = [
  { 
    title: "🐄 Cow Care & Sustainability", 
    description: "Managing 10,000+ healthy cattle with automated feeding, hygiene, and health monitoring — ensuring well-being and high-quality raw material for organic fertilizers.", 
    image: "/CowSuntain1.jpeg" 
  },
  { 
    title: "🌱 Organic Fertilizers", 
    description: "Premium dewatered cow dung processed into nutrient-rich, hygienic fertilizers that improve soil fertility, boost microbial life, and maximize crop yields.", 
    image: "/OrganicFertilizer.jpg" 
  },
  { 
    title: "⚡ Renewable Ethanol", 
    description: "Our 65 KLPD grain-based ethanol plant with Zero Liquid Discharge (ZLD) produces pharma-grade, ENA, and biofuel ethanol, supporting clean energy and reduced emissions.", 
    image: "/Renewable1.jpeg" 
  },
  { 
    title: "⚙️ Advanced Technology", 
    description: "State-of-the-art technology including RFID livestock tracking, remote health monitoring, modern distillation, and composting lines ensures precision, hygiene, and world-class output.", 
    image: "/Technology1.jpeg" 
  },
  { 
    title: "🏭 World-Class Facilities", 
    description: "GMP-compliant ethanol plants, effluent treatment units, and advanced composting facilities designed for scalability, safety, and global operational standards.", 
    image: "/World1.jpeg" 
  },
  { 
    title: "✅ Quality & Certifications", 
    description: "Every batch of fertilizer and ethanol is lab-tested and certified to meet international organic and pharmaceutical standards, ensuring safety and reliability.", 
    image: "/Certificate1.png" 
  },
  { 
    title: "🌍 Global Reach", 
    description: "Supplying fertilizers and ethanol across Asia, Africa, Europe, and the Middle East with export-ready packaging, timely delivery, and reliable logistics.", 
    image: "/Global1.png" 
  },
  { 
    title: "♻️ Eco-Friendly Model", 
    description: "Closed-loop circular model: cow dung → fertilizers → crops → ethanol → renewable energy — reducing carbon footprint and promoting sustainable farming.", 
    image: "/Eco.jpg" 
  },
  { 
    title: "👨‍🌾 Farmer Empowerment", 
    description: "1M+ farmers benefit from fertilizers, training programs, and sustainable practices — improving soil health, increasing yields, and reducing chemical dependency.", 
    image: "/Power1.jpeg" 
  },
];

// Generate multiple falling crops with random properties
const generateCrops = (num) =>
  Array.from({ length: num }).map(() => ({
    size: 20 + Math.random() * 20,
    color: `hsl(${Math.random() * 120 + 100}, 70%, 50%)`,
    left: Math.random() * 90,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 5,
  }));

const Features = () => {
  // ✅ Memoized crops (less objects = faster render)
  const crops = useMemo(
    () => generateCrops(window.innerWidth < 768 ? 5 : 10),
    []
  );

  return (
    <section className="relative pt-28 pb-28 sm:pt-32 sm:pb-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 4 }} 
        className="absolute top-10 left-10 text-6xl opacity-10"
      >
        🌿
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 5 }} 
        className="absolute bottom-20 right-16 text-7xl opacity-10"
      >
        🍃
      </motion.div>

      {/* Animated Crops */}
      {crops.map((crop, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: crop.size,
            height: crop.size,
            backgroundColor: crop.color,
            left: `${crop.left}%`,
            top: -50,
          }}
          initial={{ y: -50, opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{
            y: [ -50, 800 ],
            opacity: [0, 1, 0],
            rotate: [0, 360],
            x: [0, Math.random() * 50 - 25, 0], // zigzag
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: crop.duration,
            repeat: Infinity,
            repeatDelay: crop.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: -40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-700">
            Why Choose Chetas Agrotech?
          </h2>
          <div className="h-1 w-24 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Blending tradition with innovation — from <span className="font-semibold text-green-800">organic fertilizers</span> to <span className="font-semibold text-yellow-600">renewable ethanol</span>, we deliver sustainable, eco-friendly solutions empowering farmers & industries worldwide.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-24">
          {featuresData.map(({ title, description, image }, index) => {
            const layoutClass = 
              index % 3 === 0 ? "md:flex-row" : 
              index % 3 === 1 ? "md:flex-row-reverse" : 
              "flex-col items-center";

            const textAlign = 
              index % 3 === 0 ? "md:text-left text-center" : 
              index % 3 === 1 ? "md:text-right text-center" : 
              "text-center";

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex ${layoutClass} gap-10`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Image */}
                <motion.div 
                  className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-2xl" 
                  whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? 1 : -1 }} 
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-72 md:h-96 object-cover rounded-2xl" 
                    loading="lazy" 
                    decoding="async" 
                    fetchpriority="low"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                </motion.div>

                {/* Text */}
                <div className={`flex-1 ${textAlign}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {description}
                  </p>
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
