import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const slogans = [
  "Growing greener and smarter for a sustainable tomorrow",
  "Empowering farmers with innovation",
  "Committed to eco-friendly agriculture",
  "Harvesting healthy and organic produce",
  "Leading the way in sustainable farming",
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 150,
    });
  }, []);

  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Leveraging AI-powered monitoring, precision farming, and smart irrigation to maximize yields.",
      iconPath: "M12 5v14m7-7H5",
      aos: "fade-right",
    },
    {
      title: "Sustainable Practices",
      description:
        "Adopting eco-friendly techniques that nurture soil health, conserve water, and reduce carbon footprint.",
      iconPath: "M3 10h18M3 14h18",
      aos: "fade-left",
    },
  ];

  const reasons = [
    { icon: "🌱", text: "Sustainably sourced from our dairy farm with 10,000+ cattle" },
    { icon: "🌍", text: "Trusted global presence across Asia, Middle East, Africa & Europe" },
    { icon: "🧪", text: "Scientifically tested for purity and nutrient richness" },
    { icon: "📦", text: "Flexible custom packaging and private labeling options" },
    { icon: "🚚", text: "Timely worldwide delivery with strong logistics support" },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Cattle" },
    { number: "30+", label: "Export Countries" },
    { number: "25+", label: "Years Experience" },
    { number: "1M+", label: "Farmers Impacted" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-900 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* Slogan Carousel */}
        <motion.div className="relative max-w-5xl mx-auto h-24 overflow-hidden flex items-center justify-start rounded-2xl border bg-green-900/90 shadow-lg">
          <motion.div
            className="flex whitespace-nowrap gap-16 text-green-100 font-bold uppercase text-2xl tracking-wide select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: slogans.length * 3, ease: "linear" },
            }}
          >
            {slogans.concat(slogans).map((text, i) => (
              <span key={i} className="px-4">{text}</span>
            ))}
          </motion.div>

          {/* Floating eco-icons */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-200 text-xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6 + i }}
              >
                🌿
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-green-700 uppercase mb-3">
              About Harshil Agrotech
            </h3>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight text-green-900">
              Organic & Sustainable Agriculture Leader
            </h1>
            <p className="mb-8 text-lg leading-relaxed max-w-xl text-gray-700">
              At Harshil Agrotech Limited, we blend innovation with tradition — ensuring sustainable farming practices while empowering farmers with technology-driven solutions for a healthier planet.
            </p>

            <div className="space-y-10">
              {features.map(({ title, description, iconPath, aos }, i) => (
                <motion.div
                  key={i}
                  data-aos={aos}
                  whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                  </svg>
                  <div>
                    <h4 className="text-2xl font-semibold text-green-900 mb-2">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative" data-aos="fade-left">
            <motion.img
              src="/Image3.jpg"
              alt="Farming innovation"
              className="rounded-3xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-80 bg-green-800 text-white p-8 rounded-3xl shadow-xl"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our mission: to make farming efficient, eco-friendly, and globally impactful.
            </motion.div>
            <motion.img
              src="/Image2.jpg"
              alt="Farmers collaboration"
              className="rounded-3xl shadow-lg mt-12 hover:rotate-2 hover:scale-105 transition-transform duration-400"
              whileHover={{ rotate: 2, scale: 1.05 }}
            />
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-5xl mx-auto"
        >
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-2 transform"
            >
              <h3 className="text-4xl font-extrabold text-green-800">{number}</h3>
              <p className="text-gray-600 mt-2">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us + CTA */}
        <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto px-6">
          {/* Why Choose Us */}
          <section className="flex-1 bg-white rounded-2xl p-10 shadow-lg">
            <motion.h2
              className="text-4xl font-extrabold mb-10 text-green-900 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us?
            </motion.h2>

            <motion.ul
              className="text-lg space-y-6 text-gray-700 font-medium"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map(({ icon, text }, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <span className="text-3xl">{icon}</span>
                  <p>{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* Call To Action */}
          <motion.div
            className="flex-1 text-center py-24 px-12 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-extrabold mb-6">Proven Expertise</h3>
              <h2 className="text-5xl font-extrabold mb-12 leading-tight">
                Unbeatable Organic Agriculture Services
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg transition focus:ring-4 focus:ring-yellow-300"
              >
                Learn More
              </motion.button>
            </div>
            <div className="absolute inset-0 bg-yellow-500 opacity-10 blur-3xl rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About
