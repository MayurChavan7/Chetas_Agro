import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Leaf, Droplets, Recycle, ExternalLink } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const cowDungProcess = [
    { step: "1", title: "Collection", desc: "Fresh dung sourced daily from 10,000+ cattle across our integrated dairy farms." },
    { step: "2", title: "Dewatering", desc: "Automated separators reduce moisture while retaining essential nutrients." },
    { step: "3", title: "Sanitization", desc: "Controlled heat treatment removes pathogens & odors for safe organic use." },
    { step: "4", title: "Testing & Certification", desc: "Lab-tested for NPK content, microbial activity & certified as 100% organic." },
    { step: "5", title: "Packaging & Export", desc: "Eco-friendly packs exported globally with private labeling options." },
  ];

  const ethanolProcess = [
    { step: "1", title: "Grain Milling", desc: "Maize & broken rice are cleaned, milled & converted to slurry." },
    { step: "2", title: "Liquefaction", desc: "Enzymatic hydrolysis converts starch to fermentable dextrin." },
    { step: "3", title: "Fermentation", desc: "Yeast fermentation produces ethanol in monitored bioreactors." },
    { step: "4", title: "Distillation & Dehydration", desc: "Multi-column distillation yields high-purity ethanol (>99.5%)." },
    { step: "5", title: "Co-Products & Energy", desc: "DDGS, CO₂ & power recovered in a zero-waste circular economy." },
  ];

  const Timeline = ({ steps, color }) => (
    <div className="relative max-w-2xl mx-auto px-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="flex flex-col md:flex-row items-start md:items-center mb-10"
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
        >
          <div
            className={`flex items-center justify-center w-12 h-12 bg-${color}-600 text-white font-bold text-lg rounded-full shadow-md md:mr-6`}
          >
            {step.step}
          </div>
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className={`text-xl font-semibold text-${color}-800 mb-1 tracking-wide`}>
              {step.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden font-[Poppins]">

      {/* 🌿 CORE VALUES */}
      <section className="relative z-10 py-16 sm:py-20 max-w-6xl mx-auto px-6 mt-24 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-green-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values 🌿
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          At <strong>Chetas Agrotech</strong>, we believe true progress grows from the soil — 
          blending technology, sustainability, and nature to build a cleaner, self-reliant future for India.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-green-700" />,
              title: "Innovation",
              desc: "We transform agricultural waste into high-value energy and organic fertilizers using cutting-edge technology.",
            },
            {
              icon: <Droplets className="w-10 h-10 text-green-700" />,
              title: "Sustainability",
              desc: "Our zero-waste circular processes protect natural resources while powering clean energy growth.",
            },
            {
              icon: <Recycle className="w-10 h-10 text-green-700" />,
              title: "Growth",
              desc: "Empowering farmers, industries, and the planet through green initiatives and inclusive development.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-md border border-green-100 shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-green-100 rounded-full">{item.icon}</div>
                <h3 className="text-2xl font-bold text-green-800">{item.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏢 COMPANY OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
          About Chetas Agrotech
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
          <strong>Chetas Agrotech Pvt. Ltd.</strong> — a division of the <strong>Chetas Group</strong> — 
          is a pioneer in sustainable agro-energy and waste-to-resource innovation. 
          Based in Maharashtra, India, we specialize in <strong>organic fertilizers</strong> 
          and <strong>renewable ethanol production</strong>, operating across <strong>14+ states</strong> 
          and serving <strong>5 major industries</strong> — driving rural development, environmental protection, 
          and energy independence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            { num: "65 KLPD", label: "Ethanol Capacity" },
            { num: "75,000+", label: "Cattle Managed" },
            { num: "100%", label: "ZLD & Organic Certified" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-green-800">{stat.num}</h3>
              <p className="text-gray-700 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟩 ORGANIC FERTILIZER */}
      <section className="rounded-3xl shadow-lg p-8 md:p-12 bg-gradient-to-br from-green-50 to-green-100 border border-green-100 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/Images/CowFertilizer7.png"
            alt="Organic Fertilizer"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
              Premium Cow Dung Fertilizers
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our cow dung-based organic fertilizers improve soil health, restore microbial balance, 
              and promote sustainable agriculture — certified for export under ISO and FSSAI standards.
            </p>
            <ul className="space-y-2 text-gray-800 text-base md:text-lg">
              <li>🌱 Enhances soil fertility & moisture retention</li>
              <li>💚 Eco-certified for global agricultural markets</li>
              <li>📦 Available in powder, granule, and liquid formats</li>
              <li>🌾 Powers sustainable farming across continents</li>
            </ul>
          </div>
        </div>

        <div className="py-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-green-900 text-center">
            Fertilizer Production Process
          </h3>
          <Timeline steps={cowDungProcess} color="green" />
        </div>
      </section>

      {/* 🟨 ETHANOL SECTION */}
      <section className="rounded-3xl shadow-lg p-8 md:p-12 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-100 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-4">
              Renewable Ethanol Solutions
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With a 65 KLPD distillery capacity, Chetas Agrotech produces pharma, fuel, 
              and industrial-grade ethanol supporting India’s <strong>E20 fuel blending</strong> 
              and national clean energy mission.
            </p>
            <ul className="space-y-2 text-yellow-800 text-base md:text-lg">
              <li>⚡ Fully automated distillation & dehydration system</li>
              <li>💊 IP/BP/USP-grade ethanol for pharma & fuel industries</li>
              <li>♻️ Zero Liquid Discharge & closed-loop operation</li>
              <li>🌍 Export-ready with ISO & BIS compliance</li>
            </ul>
          </div>
          <motion.img
            src="/Images/EthonolFertilizer6.jpeg"
            alt="Ethanol Production"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="py-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-yellow-700 text-center">
            Ethanol Manufacturing Process
          </h3>
          <Timeline steps={ethanolProcess} color="yellow" />
        </div>
      </section>

      {/* 🌿 MISSION */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          Mission, Vision & Sustainability
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg mb-10 leading-relaxed">
          Our mission is to <strong>empower farmers, protect the planet, and redefine waste utilization</strong> 
          through green innovation. We envision a world where agriculture and energy coexist sustainably — 
          improving livelihoods and preserving the ecosystem.
        </p>
      </section>

      {/* 🌾 CTA */}
      <div className="py-16 px-8 md:px-10 text-center bg-gradient-to-r from-green-800 to-green-600 text-white rounded-3xl max-w-4xl mx-auto shadow-xl mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          One Stop Agro-Energy Hub
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-green-50">
          From nutrient-rich fertilizers to renewable ethanol, 
          <strong> Chetas Agrotech </strong> drives India’s green revolution through technology, sustainability, and innovation.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-green-900 font-semibold px-10 py-4 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform text-lg"
        >
          Contact Us
        </Link>
      </div>

      {/* 🌐 PARENT COMPANY PORTAL */}
      <div className="text-center pb-20">
        <motion.a
          href="https://www.chetascontrol.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Visit Our Parent Company: Chetas Control Systems
          <ExternalLink className="w-5 h-5" />
        </motion.a>
      </div>
    </div>
  );
};

export default About;
