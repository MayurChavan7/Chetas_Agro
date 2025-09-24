import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Home = () => {
  const navigate = useNavigate();

  const features = useMemo(
    () => [
      {
        emoji: "🌱",
        title: "Organic Fertilizers",
        description:
          "Export-quality dewatered cow dung restoring nutrients and building healthier soils.",
      },
      {
        emoji: "⚡",
        title: "Renewable Ethanol",
        description:
          "65 KLPD ethanol plant with zero liquid discharge for clean energy & pharma.",
      },
      {
        emoji: "🌍",
        title: "Global Reach",
        description: "Supplying clients across Asia, Africa, Europe & the Middle East.",
      },
      {
        emoji: "🔬",
        title: "Advanced Technology",
        description:
          "RFID livestock monitoring + GMP ethanol distillation for efficiency.",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "10,000+", label: "Farms Served" },
      { value: "65 KLPD", label: "Ethanol Capacity" },
      { value: "50+", label: "Countries Exported" },
    ],
    []
  );

  const products = useMemo(
    () => [
      {
        img: "/CowFertilizer.jpg",
        title: "Cow Dung Fertilizers",
        desc: "Hygienically processed from 10,000+ cattle farm. Export-ready, nutrient-rich organic compost trusted worldwide.",
        link: "/products#fertilizers",
        left: true,
      },
      {
        img: "/EthonolFertilizer.jpg",
        title: "Ethanol Solutions",
        desc: "65 KLPD modern plant producing ethanol, ENA, EQRS, and pharma-grade ethanol with ZLD and GMP standards.",
        link: "/products#ethanol",
        left: false,
      },
    ],
    []
  );

  const handleExplore = (link) => {
    navigate(link); // SPA-friendly navigation
  };

  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      {/* =================== Hero =================== */}
      <React.Suspense fallback={<div className="h-screen bg-green-50" />}>
        <Hero />
      </React.Suspense>

      {/* =================== Mission =================== */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            Leading sustainable agriculture & renewable energy with{" "}
            <span className="font-semibold text-green-800">organic fertilizers</span>{" "}
            and <span className="font-semibold text-yellow-600">high-quality ethanol biofuels</span>.
            Healthier soils. Empowered farmers. A cleaner planet.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-green-100 via-green-200 to-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-500 will-change-transform"
                variants={fadeUp}
                custom={i + 3}
              >
                <div className="text-6xl mb-4">{f.emoji}</div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-base">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =================== Product Highlights =================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
                p.left ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: p.left ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl will-change-transform transition-transform duration-400 hover:scale-105">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-green-900">{p.title}</h3>
                <p className="text-gray-700 text-lg">{p.desc}</p>
                <button
                  onClick={() => handleExplore(p.link)}
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 hover:shadow-xl transition will-change-transform"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== Statistics =================== */}
      <section className="py-16 sm:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-green-900">{s.value}</h3>
              <p className="text-gray-700 mt-3 text-lg">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== Testimonials =================== */}
      <React.Suspense fallback={<div className="py-28 bg-green-50 text-center">Loading...</div>}>
        <Testimonials />
      </React.Suspense>

      {/* =================== CTA =================== */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg sm:text-xl">
            From farms to fuel, Chetas Agrotech is shaping a greener future. Join our journey toward sustainable agriculture and renewable energy.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-green-900 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-500 transition will-change-transform"
          >
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
