import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Factory,
  FlaskRound,
  Microscope,
  Package,
  Droplets,
  Leaf,
  Recycle,
  Gauge,
  ShieldCheck,
  Globe,
} from "lucide-react";

// ======================= DATA =======================
const processSteps = [
  {
    icon: <Factory className="w-10 h-10 text-emerald-600" />,
    title: "Automated Cow Dung Collection",
    desc: "Dung collected hygienically from over 10,000 cattle using conveyor-based systems for continuous operation.",
  },
  {
    icon: <Droplets className="w-10 h-10 text-teal-600" />,
    title: "Dewatering & Drying",
    desc: "Moisture removed through PLC-controlled screw presses and rotary dryers ensuring consistent texture.",
  },
  {
    icon: <FlaskRound className="w-10 h-10 text-green-600" />,
    title: "Aerobic Composting",
    desc: "Dung enriched with organic additives and biologically treated to improve nutrient balance.",
  },
  {
    icon: <Microscope className="w-10 h-10 text-emerald-700" />,
    title: "Testing & Certification",
    desc: "Lab analysis ensures NPK ratios, microbial counts, and heavy metal safety meet export-grade standards.",
  },
  {
    icon: <Package className="w-10 h-10 text-lime-600" />,
    title: "Eco-Packaging & Export",
    desc: "Final product packed in biodegradable bags with private labeling options for global distribution.",
  },
];

const technicalHighlights = [
  { label: "Rotary Dryers", detail: "High-efficiency with temperature control" },
  { label: "Screw Conveyors", detail: "Seamless material handling system" },
  { label: "Grinding Units", detail: "Particle size reduction & uniformity" },
  { label: "Sieving Units", detail: "Dust-free fine granule processing" },
  { label: "Automatic Packaging", detail: "20–50 kg bags with sealing automation" },
];

const nutrients = [
  { name: "Nitrogen (N)", role: "Leaf growth & chlorophyll formation", value: "1.5–2%" },
  { name: "Phosphorus (P)", role: "Root development & flowering", value: "1–1.5%" },
  { name: "Potassium (K)", role: "Plant resilience & fruit formation", value: "1–1.8%" },
  { name: "Organic Carbon", role: "Improves soil structure", value: "20–25%" },
  { name: "Moisture Content", role: "Maintains microbial activity", value: "< 20%" },
];

// ✅ UPDATED Sustainability & Impact data
const impactStats = [
  { value: "65 KLPD", label: "Ethanol Capacity" },
  { value: "75,000+", label: "Cattle Managed" },
  { value: "100%", label: "ZLD & Organic Certified" },
];

// ======================= COMPONENT =======================
const FertilizerDetails = () => {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-gray-100 min-h-screen font-[Inter] overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-28 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-green-700 to-lime-600 opacity-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="relative z-10 text-white max-w-4xl mx-auto px-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Smart Organic Fertilizer Manufacturing
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Precision-engineered fertilizers from cow dung — combining nature’s nutrients
            with industrial innovation.
          </p>
        </motion.div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Automated Manufacturing Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="font-bold text-lg text-emerald-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== TECHNICAL HIGHLIGHTS ========== */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Inside Our Facility
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {technicalHighlights.map((t, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-emerald-700 font-semibold text-lg mb-2">
                  {t.label}
                </h3>
                <p className="text-gray-600">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NUTRIENT SECTION ========== */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Nutrient Composition & Quality Parameters
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {nutrients.map((n, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  {n.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{n.role}</p>
                <p className="text-lg font-semibold text-gray-800">
                  {n.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== UPDATED SUSTAINABILITY SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Sustainability & Impact
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-4xl font-extrabold text-emerald-700 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-xl border border-emerald-200 shadow-2xl rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">
            Building a Greener Future, One Farm at a Time 🌎
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join Chetas Agrotech in transforming waste into wealth through
            smart, sustainable, and scalable fertilizer technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 shadow-lg transition"
            >
              Contact Us
            </Link>
            <a
              href="/brochure/CowDungFertilizer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-700 border border-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default FertilizerDetails;
