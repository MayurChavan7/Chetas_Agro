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
    <main className="relative pt-32 pb-5 px-4 sm:px-6 lg:px-12 min-h-screen overflow-hidden bg-green-50">

      {/* Background Images */}
      {/* Farm background - covers whole page on desktop, positioned top on mobile */}
      <img
        src="/Images/farm_front_angle.png"
        alt="Farm Background"
        // className="absolute top-0 left-0 w-full h-full lg:h-auto z-0 object-cover lg:object-contain pointer-events-none"
        className="absolute top-0 left-0 w-full min-h-full z-0 object-cover pointer-events-none"
      />

      {/* Rainbow - adjusted for better visibility */}
      {/* <img
        src="/Images/rainbow.png"
        alt="Rainbow"
        className="absolute top-20 lg:top-10 left-1/2 transform -translate-x-1/2 w-60 lg:w-80 z-0 pointer-events-none"
      /> */}

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
        {/* Heading - no background */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6">
          🌱 How Cow Dung Fertilizer is Made
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          We transform cattle waste into nutrient-rich, certified organic fertilizers through a 
          sustainable, eco-friendly process.
        </p>

        {/* Process Steps: Responsive Grid/Staircase Layout */}
        <div className="relative z-10 max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-0">
          {/* Mobile & Tablet: Vertical Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Staircase Layout */}
          <div className="hidden lg:flex justify-between items-start gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg text-center w-56
                  ${i % 2 === 0 ? "mt-0" : "mt-12"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nutrient Composition Section */}
        <div className="relative z-10 max-w-6xl mx-auto mt-10 lg:mt-10 px-4 sm:px-6 lg:px-0 text-center">
          <h1 className="inline-block px-6 py-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-950 bg-white/40 rounded-2xl mb-6 lg:mb-10">
            🌿 Nutrient Composition of Cow Dung Fertilizer
          </h1>
          {/* Nutrient Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Plant Fibers */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}>
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">Rich in Undigested Plant Fibers</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Cellulose</li>
                <li>Hemicellulose</li>
                <li>Lignin</li>
              </ul>
            </motion.div>

            {/* Card 2: Macronutrients */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">Macronutrients (NPK)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Nitrogen (N) – Promotes leafy growth</li>
                <li>Phosphorus (P) – Supports root development and flowering</li>
                <li>Potassium (K) – Improves plant resilience and fruit quality</li>
              </ul>
            </motion.div>

            {/* Card 3: Other Minerals */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">Other Essential Minerals</h3>
              <p className="text-gray-700">
                Calcium (Ca), Magnesium (Mg), Sulphur (S), Iron (Fe), Zinc (Zn), Copper (Cu), Cobalt (Co), Manganese (Mn), and other trace elements
              </p>
            </motion.div>

            {/* Card 4: Microbial Diversity */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">Microbial Diversity</h3>
              <p className="text-gray-700">
                Cow dung powder contains a diverse community of microorganisms and bacteria beneficial for soil and plant health.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
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