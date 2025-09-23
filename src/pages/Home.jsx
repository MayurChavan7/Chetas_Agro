import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";

// Feature highlights
const features = [
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
    description:
      "Supplying clients across Asia, Africa, Europe & the Middle East.",
  },
  {
    emoji: "🔬",
    title: "Advanced Technology",
    description:
      "RFID livestock monitoring + GMP ethanol distillation for efficiency.",
  },
];

// Stats
const stats = [
  { value: "10,000+", label: "Farms Served" },
  { value: "65 KLPD", label: "Ethanol Capacity" },
  { value: "50+", label: "Countries Exported" },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      {/* =================== Hero =================== */}
      <Hero />

      {/* =================== Mission =================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-green-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Leading sustainable agriculture & renewable energy with{" "}
            <span className="font-semibold text-green-800">
              organic fertilizers
            </span>{" "}
            and{" "}
            <span className="font-semibold text-yellow-600">
              high-quality ethanol biofuels
            </span>
            . Healthier soils. Empowered farmers. A cleaner planet.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-green-100 via-green-200 to-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center hover:scale-105 hover:shadow-xl transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                <div className="text-5xl sm:text-6xl mb-4">{f.emoji}</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== Product Highlights =================== */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
          {[
            {
              img: "/Image3.jpg",
              title: "Cow Dung Fertilizers",
              desc: "Hygienically processed from 10,000+ cattle farm. Export-ready, nutrient-rich organic compost trusted worldwide.",
              link: "/products#fertilizers",
              left: true,
            },
            {
              img: "/Image2.jpg",
              title: "Ethanol Solutions",
              desc: "65 KLPD modern plant producing ethanol, ENA, EQRS, and pharma-grade ethanol with ZLD and GMP standards.",
              link: "/products#ethanol",
              left: false,
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 ${
                p.left ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 sm:h-72 md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-green-900">
                  {p.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">{p.desc}</p>
                <a
                  href={p.link}
                  className="inline-block bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-800 transition"
                >
                  Explore
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== Statistics =================== */}
      <section className="py-12 sm:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="text-3xl sm:text-5xl font-extrabold text-green-900">
                {s.value}
              </h3>
              <p className="text-gray-700 mt-2 text-base sm:text-lg">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== Testimonials =================== */}
      <Testimonials />

      {/* =================== Partners =================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8 sm:mb-10">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center">
            {["/partner1.png", "/partner2.png", "/partner3.png", "/partner4.png"].map(
              (p, i) => (
                <motion.img
                  key={i}
                  src={p}
                  alt={`Partner ${i}`}
                  className="mx-auto max-h-12 sm:max-h-20 object-contain opacity-70 hover:opacity-100 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* =================== Blog Highlights =================== */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-8 sm:mb-12">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <img
                  src={`/blog${i}.jpg`}
                  alt={`Blog ${i}`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2 sm:mb-3">
                    Blog Post Title {i}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                    Short snippet about the blog content goes here...
                  </p>
                  <a
                    href="/blog"
                    className="text-green-700 font-semibold hover:underline text-sm sm:text-base"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CTA =================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="mb-6 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            From farms to fuel, Chetas Agrotech is shaping a greener future. Join
            our journey toward sustainable agriculture and renewable energy.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-2xl hover:bg-yellow-500 transition text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* =================== Footer =================== */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-lg">Chetas Agrotech</h3>
            <p className="text-sm sm:text-base">
              Empowering sustainable agriculture and renewable energy across the
              globe.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-lg">Connect</h3>
            <p className="text-sm sm:text-base">Email: info@chetasagro.com</p>
            <p className="text-sm sm:text-base">Phone: +91-XXXXXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
