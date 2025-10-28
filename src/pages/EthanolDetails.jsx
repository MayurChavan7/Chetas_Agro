// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   { title: "Grain Procurement", desc: "Locally sourced maize & broken rice as feedstock.", icon: "🌾" },
//   { title: "Fermentation", desc: "Grains undergo fermentation to produce ethanol.", icon: "⚗️" },
//   { title: "Distillation", desc: "Ethanol refined to pharma-grade & fuel-grade purity.", icon: "🏭" },
//   { title: "Zero Liquid Discharge", desc: "All water recycled, ensuring eco-friendly production.", icon: "♻️" },
//   { title: "Packaging & Supply", desc: "Ethanol supplied to pharma, fuel & global industries.", icon: "🚛" },
// ];

// const EthanolDetails = () => {
//   return (
//     <section className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
//       <div className="max-w-6xl mx-auto text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-700 mb-6 sm:mb-8">
//           ⚡ How Ethanol is Produced
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
//           Our 65 KLPD distillery uses cutting-edge technology to produce renewable, pharma-grade ethanol.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition transform duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//             >
//               <div className="text-4xl mb-4">{step.icon}</div>
//               <h3 className="text-lg sm:text-xl font-semibold text-yellow-700 mb-2">{step.title}</h3>
//               <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EthanolDetails;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Droplet, Leaf, TrendingUp, Shield, Globe } from "lucide-react";

const steps = [
  { title: "Grain Procurement", desc: "Locally sourced maize & broken rice as feedstock.", icon: "🌾" },
  { title: "Fermentation", desc: "Grains undergo fermentation to produce ethanol.", icon: "⚗️" },
  { title: "Distillation", desc: "Ethanol refined to pharma-grade & fuel-grade purity.", icon: "🏭" },
  { title: "Zero Liquid Discharge", desc: "All water recycled, ensuring eco-friendly production.", icon: "♻️" },
  { title: "Packaging & Supply", desc: "Ethanol supplied to pharma, fuel & global industries.", icon: "🚛" },
];

const specifications = [
  { grade: "Pharmaceutical Grade", purity: "99.9%", standard: "IP/BP/USP", use: "Sanitizers, Medicines, Cosmetics" },
  { grade: "Fuel Grade (ENA)", purity: "99.5%", standard: "IS 15464", use: "Blending with Petrol (E10, E20)" },
  { grade: "Industrial Grade", purity: "95-96%", standard: "IS 517", use: "Solvents, Chemicals, Paints" },
];

const certifications = [
  { icon: <Award className="w-8 h-8" />, title: "ISO 9001:2015", desc: "Quality Management" },
  { icon: <Shield className="w-8 h-8" />, title: "FSSAI Certified", desc: "Food Safety Standards" },
  { icon: <Leaf className="w-8 h-8" />, title: "ZLD Compliant", desc: "Zero Liquid Discharge" },
  { icon: <Globe className="w-8 h-8" />, title: "Export Ready", desc: "International Standards" },
];

const benefits = [
  { icon: <Leaf className="w-6 h-6" />, title: "100% Renewable", desc: "Made from agricultural feedstock, reducing carbon footprint" },
  { icon: <Droplet className="w-6 h-6" />, title: "Water Positive", desc: "ZLD technology ensures complete water recycling" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "High Efficiency", desc: "65 KLPD capacity with state-of-the-art distillation" },
  { icon: <Shield className="w-6 h-6" />, title: "Quality Assured", desc: "Multi-grade production meeting international standards" },
];

const EthanolDetails = () => {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-700 mb-6">
              Premium Ethanol Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              Powering India's green energy revolution with 65 KLPD capacity of pharma-grade & fuel-grade ethanol
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏭</span>
                <span className="font-semibold">65 KLPD Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">♻️</span>
                <span className="font-semibold">Zero Waste</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🌍</span>
                <span className="font-semibold">Export Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-12">
            Why Choose Our Ethanol
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-yellow-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-4">
            Our Production Process
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            From grain to green energy – a sustainable journey powered by innovation and zero-waste technology
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 border-2 border-yellow-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-yellow-600 font-bold text-sm mb-2">STEP {i + 1}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-12">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {specifications.map((spec, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl cursor-pointer transition duration-300 ${
                  activeSpec === i ? 'bg-yellow-600 text-white shadow-2xl scale-105' : 'bg-white text-gray-800 hover:shadow-lg'
                }`}
                onClick={() => setActiveSpec(i)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${activeSpec === i ? 'text-white' : 'text-yellow-600'}`}>
                  {spec.grade}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-opacity-20 pb-2">
                    <span className="font-semibold">Purity:</span>
                    <span className="text-lg font-bold">{spec.purity}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-opacity-20 pb-2">
                    <span className="font-semibold">Standard:</span>
                    <span className="font-mono">{spec.standard}</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-semibold block mb-2">Applications:</span>
                    <p className={`text-sm ${activeSpec === i ? 'text-yellow-50' : 'text-gray-600'}`}>
                      {spec.use}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-12">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-yellow-600 flex justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-yellow-50 text-lg mb-8">
            Join leading pharmaceutical, fuel, and industrial companies who trust our premium ethanol solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition shadow-lg">
              Request Quote
            </button>
            <button className="bg-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-800 transition border-2 border-white">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-700 mb-12">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">65 KLPD</div>
              <div className="text-gray-600 font-semibold">Daily Production Capacity</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Maximum Purity Level</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Water Recycling Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Continuous Operations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthanolDetails;