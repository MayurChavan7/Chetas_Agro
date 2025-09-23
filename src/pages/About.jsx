import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const slogans = [
  "Transforming Waste into Wealth – Cow Dung to Fertilizer",
  "From Grains to Green Energy – Renewable Ethanol",
  "Sustainable Solutions for Farmers & Industries",
  "Global Standards, Local Roots",
  "Fueling Growth, Nurturing Nature",
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const cowDungProcessSteps = [
    { step: "1", title: "Collection", desc: "Sustainably gathering fresh cow dung from our own dairy farm with over 10,000 cattle." },
    { step: "2", title: "Dewatering", desc: "Removing excess moisture to concentrate nutrients and improve handling." },
    { step: "3", title: "Sanitization", desc: "Hygienic processing to eliminate pathogens, ensuring safety and quality." },
    { step: "4", title: "Testing & Certification", desc: "Lab analysis for nutrient content and compliance with international organic standards." },
    { step: "5", title: "Packaging & Export", desc: "Custom packaging with private labeling options, ready for global distribution." },
  ];

  const ethanolProcessSteps = [
    { step: "1", title: "Grain Handling", desc: "Cleaning, milling, and slurry preparation from maize & broken rice." },
    { step: "2", title: "Liquefaction", desc: "Enzymatic breakdown of starch into dextrin using high-temp cooking." },
    { step: "3", title: "Saccharification & Fermentation", desc: "Conversion into fermentable sugars and ethanol by yeast." },
    { step: "4", title: "Distillation & Dehydration", desc: "Multi-column distillation & molecular sieve dehydration." },
    { step: "5", title: "Co-Products", desc: "DDGS, CO₂, power & biogas from by-products ensuring zero waste." },
  ];

  const teamMembers = [
    { name: "Mr. Ramesh Patel", role: "Founder & CEO", image: "/team1.jpg" },
    { name: "Ms. Priya Sharma", role: "Head of Operations", image: "/team2.jpg" },
    { name: "Dr. Anil Kumar", role: "Sustainability Lead", image: "/team3.jpg" },
  ];

  const Timeline = ({ steps, color }) => (
    <div className="relative max-w-3xl mx-auto px-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="flex flex-col md:flex-row items-start md:items-center mb-12 relative"
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-green-600 text-white font-bold rounded-full shadow-md md:mr-6 md:ml-0 flex-shrink-0">
            {step.step}
            {i < steps.length - 1 && (
              <motion.span
                className={`hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 bg-${color}-600`}
                style={{ height: "100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              />
            )}
          </div>
          <div className="md:ml-16 mt-4 md:mt-0">
            <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${color}-800`}>{step.title}</h3>
            <p className="text-gray-700 mt-1 text-sm sm:text-base md:text-lg">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Navbar */}
      <Navbar />

      {/* Slogan Carousel */}
      <div className="relative z-10 py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
        <motion.div className="relative h-20 sm:h-24 overflow-hidden flex items-center justify-start rounded-2xl border bg-green-900/90 shadow-lg">
          <motion.div
            className="flex whitespace-nowrap gap-4 sm:gap-12 text-green-100 font-bold uppercase text-sm sm:text-xl md:text-3xl tracking-wide select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: slogans.length * 2, ease: "linear" },
            }}
          >
            {slogans.concat(slogans).map((text, i) => (
              <span key={i} className="px-2 sm:px-4">{text}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto space-y-20 sm:space-y-28 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Cow Dung Fertilizer Section */}
        <section className="rounded-3xl shadow-md p-6 sm:p-10 bg-green-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <motion.img
              src="/CowFertilizer.jpg"
              alt="Organic Fertilizers"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 mb-6">Organic Fertilizers</h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                Premium export-quality cow dung fertilizers, nutrient-rich, hygienically processed, and certified to meet global standards.
              </p>
              <ul className="space-y-3 list-disc list-inside text-gray-800 text-base md:text-lg leading-relaxed">
                <li>🌱 Enhances soil fertility and stimulates beneficial microbial life.</li>
                <li>🥕 Ideal for horticulture, vineyards, and sustainable farming.</li>
                <li>🧪 Certified lab-tested for quality assurance and safety.</li>
                <li>📦 Customizable packaging and export-ready options.</li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="py-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-green-900 text-center">
              Organic Fertilizer Process
            </h3>
            <Timeline steps={cowDungProcessSteps} color="green" />
          </div>
        </section>

        {/* Ethanol Section */}
        <section className="rounded-3xl shadow-md p-6 sm:p-10 bg-yellow-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-700 mb-6">Renewable Ethanol</h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                Our 65 KLPD ethanol plant produces fuel ethanol, pharma-grade ethanol, ENA, and EQRS worldwide with zero liquid discharge.
              </p>
              <ul className="space-y-3 list-disc list-inside text-yellow-800 text-base md:text-lg leading-relaxed">
                <li>⚡ Compliant with E20 fuel blending standards for cleaner energy.</li>
                <li>💊 Pharma & healthcare-grade ethanol for rigorous global standards.</li>
                <li>♻️ Environmentally responsible with advanced Zero Liquid Discharge systems.</li>
                <li>🌍 Exporting across Asia, Africa, Europe, & the Middle East.</li>
              </ul>
            </div>
            <motion.img
              src="/EthonolFertilizer.jpg"
              alt="Renewable Ethanol Plant"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Timeline */}
          <div className="py-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-yellow-700 text-center">
              Renewable Ethanol Process
            </h3>
            <Timeline steps={ethanolProcessSteps} color="yellow" />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mx-auto w-28 h-28 sm:w-32 sm:h-32 object-cover shadow-lg"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{member.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="py-12 px-6 sm:px-10 text-center bg-gradient-to-r from-green-800 to-green-600 text-white rounded-3xl max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">One Stop Agro-Energy Hub</h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            From organic fertilizers to renewable ethanol — we deliver complete, sustainable agro-energy solutions for farmers, industry, and the planet.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition text-base md:text-lg"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
