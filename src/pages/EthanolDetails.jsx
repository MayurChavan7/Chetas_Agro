import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Droplet,
  Leaf,
  Shield,
  Globe,
  Factory,
  Flame,
  AlertTriangle,
  Package,
} from "lucide-react";

const EthanolDetails = () => {
  const [activeSpec, setActiveSpec] = useState(0);
  const navigate = useNavigate(); // ✅ Added for navigation

  const specs = [
    {
      grade: "Pharma Grade Ethanol",
      purity: "99.9%",
      use: "Medicines, Cosmetics, Sanitizers",
      standard: "IP / BP / USP",
    },
    {
      grade: "Fuel Grade (ENA)",
      purity: "99.5%",
      use: "Petrol Blending (E20)",
      standard: "IS 15464",
    },
    {
      grade: "Industrial Grade",
      purity: "95–96%",
      use: "Solvents, Paints, Chemicals",
      standard: "IS 517",
    },
  ];

  const steps = [
    {
      icon: "🌾",
      title: "Feedstock Handling",
      desc: "Maize / broken rice sourced locally; processed through milling and moisture control.",
    },
    {
      icon: "⚗️",
      title: "Liquefaction & Saccharification",
      desc: "Enzymatic conversion of starch into fermentable sugars using α-amylase & glucoamylase.",
    },
    {
      icon: "🧫",
      title: "Fermentation",
      desc: "Yeast-based fermentation producing ethanol from sugars under controlled temperature & pH.",
    },
    {
      icon: "🏭",
      title: "Distillation & Rectification",
      desc: "Multi-column system producing 95–96% rectified spirit.",
    },
    {
      icon: "💧",
      title: "Dehydration",
      desc: "Molecular sieves achieve ≥99.5% anhydrous ethanol purity.",
    },
    {
      icon: "🧴",
      title: "Pharma Polishing",
      desc: "Activated carbon, ion exchange & sterile filtration for GMP-grade ethanol.",
    },
    {
      icon: "♻️",
      title: "Effluent Handling",
      desc: "Anaerobic digestion + evaporation for ZLD (Zero Liquid Discharge).",
    },
  ];

  const certifications = [
    { icon: <Award className="w-8 h-8" />, title: "ISO 9001:2015", desc: "Quality Management System" },
    { icon: <Shield className="w-8 h-8" />, title: "GMP Compliant", desc: "Pharma-grade ethanol controls" },
    { icon: <Droplet className="w-8 h-8" />, title: "ZLD Certified", desc: "Zero Liquid Discharge Facility" },
    { icon: <Globe className="w-8 h-8" />, title: "Export Ready", desc: "Compliant with Global Standards" },
  ];

  const risks = [
    { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, title: "Feedstock Price Volatility", desc: "Mitigated by long-term supplier contracts and local grain sourcing." },
    { icon: <Flame className="w-6 h-6 text-red-500" />, title: "Safety & Fire Risk", desc: "Advanced CO₂ suppression, flame arrestors, and HAZOP studies." },
    { icon: <Droplet className="w-6 h-6 text-yellow-500" />, title: "Environmental Compliance", desc: "Conservative ZLD design and MPCB engagement." },
    { icon: <Shield className="w-6 h-6 text-green-600" />, title: "Quality Risk", desc: "GMP validation and multi-level QC with GC & HPLC testing." },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 text-gray-800">
      {/* ================= HERO ================= */}
      <section className="pt-32 md:pt-40 pb-16 text-center px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-yellow-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          65 KLPD Grain-Based Ethanol Production
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Chetas Agrotech Pvt. Ltd. — Maharashtra-based 65 KLPD ethanol manufacturer
          producing <span className="font-semibold text-yellow-700">fuel, pharma, and ENA ethanol</span> using modern ZLD & GMP technology.
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-yellow-700">About Us</h2>
            <p>
              Part of the <strong>$158 million Chetas Group</strong>, we operate a fully integrated
              grain-based ethanol facility in Maharashtra with a capacity of <strong>65 KLPD</strong>.
              Our focus is on sustainable biofuel, pharma-grade alcohol, and co-product innovation (DDGS, CO₂, biogas).
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fuel Ethanol for E20 blending</li>
              <li>ENA, EQRS & Pharma Grade Ethanol</li>
              <li>Zero Liquid Discharge (ZLD) process</li>
              <li>Global export-ready operations</li>
            </ul>
          </motion.div>
          <motion.img
            src="/Images/EthonolFertilizer3.png"
            alt="Ethanol Plant"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* ================= PROCESS FLOW ================= */}
      <section className="py-20 px-6 bg-yellow-50">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-10">Process Flow</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center border border-yellow-100 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-yellow-700 mb-2">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-white px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-12">Product Specifications</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specs.map((s, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveSpec(i)}
              className={`rounded-2xl p-8 cursor-pointer transition ${
                activeSpec === i
                  ? "bg-yellow-600 text-white shadow-2xl"
                  : "bg-white text-gray-800 border hover:shadow-lg"
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold mb-3">{s.grade}</h3>
              <p><strong>Purity:</strong> {s.purity}</p>
              <p><strong>Standard:</strong> {s.standard}</p>
              <p><strong>Applications:</strong> {s.use}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-12">Certifications & Compliance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              className="p-6 border-2 border-yellow-200 rounded-xl text-center hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-center text-yellow-600 mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HSE & RISK ================= */}
      <section className="py-20 bg-yellow-50 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-12">Health, Safety & Environment</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {risks.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-center mb-3">{r.icon}</div>
              <h3 className="font-bold text-lg mb-1">{r.title}</h3>
              <p className="text-sm text-gray-600">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-yellow-700 to-yellow-500 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Partner with Chetas Agrotech</h2>
        <p className="max-w-2xl mx-auto text-yellow-100 mb-10">
          Join leading pharma and fuel companies that rely on our quality-driven, sustainable ethanol solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/EthanolBrochure.pdf"
            download
            className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-yellow-50"
          >
            📄 Download Brochure
          </a>
          {/* ✅ Updated Contact Button */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-900 transition"
          >
            📞 Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default EthanolDetails;
