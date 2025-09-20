import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      easing: 'ease-out-cubic',
      once: true,
      offset: 150,
    });
  }, []);

  const features = [
    {
      title: 'Cutting-Edge Technology',
      description:
        'Leveraging the latest advancements in agricultural tools and AI-powered techniques to optimize crop health and yield.',
      iconPath: 'M12 5v14m7-7H5',
      aos: 'fade-right',
    },
    {
      title: 'Sustainable Practices',
      description:
        'Implementing eco-friendly solutions that ensure long-term soil health and reduce environmental footprint.',
      iconPath: 'M3 10h18M3 14h18',
      aos: 'fade-left',
    },
  ];

  const reasons = [
    { icon: '🌱', text: 'Sustainably sourced from our own dairy farm with 10,000+ cattle' },
    { icon: '🌍', text: 'Global presence across Asia, Middle East, Africa & Europe' },
    { icon: '🧪', text: 'Tested for purity and nutrient content' },
    { icon: '📦', text: 'Custom packaging and labeling options' },
    { icon: '🕒', text: 'Timely global delivery and logistics support' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 px-6 bg-gray-100 text-gray-900 relative overflow-hidden">
      {/* Large background image behind slogan */}
      <div
        className="absolute inset-0"
        // style={{
        //   backgroundImage: "url('/Image39.jpg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   filter: "brightness(0.3)",
        //   zIndex: 0,
        // }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Slogan marquee container */}
        <div className="relative max-w-4xl mx-auto h-24 overflow-hidden flex items-center rounded-lg">
          <motion.div
            className="flex whitespace-nowrap gap-16 text-green-200 font-semibold uppercase text-2xl select-none"
            initial={{ x: '100%' }}
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              duration: slogans.length * 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            aria-label="Company slogans scrolling horizontally"
          >
            {slogans.map((text, i) => (
              <span key={i} className="px-4">{text}</span>
            ))}
          </motion.div>
        </div>

        {/* Main Content & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto relative z-10">
          <div>
            <h3 className="text-xl font-semibold text-yellow-600 uppercase mb-4">ABOUT COMPANY</h3>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Organic & Healthy Foods Provider Farming
            </h1>
            <p className="mb-8 text-lg leading-relaxed max-w-xl text-gray-800">
              Harshil Agrotech Limited is committed to innovating sustainable agriculture through cutting-edge technology and eco-friendly practices. We empower farmers worldwide by providing premium organic inputs that improve crop quality and protect the environment.
            </p>

            {/* Feature Cards */}
            <div className="space-y-10">
              {features.map(({ title, description, iconPath, aos }, i) => (
                <motion.div
                  key={i}
                  data-aos={aos}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg"
                  tabIndex={0}
                  aria-label={`${title}: ${description}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-700 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                  </svg>
                  <div>
                    <h4 className="text-2xl font-semibold text-green-900 mb-2">{title}</h4>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="relative" tabIndex={-1} aria-label="Gallery of agricultural activities">
            <motion.img
              src="/Image3.jpg"
              alt="Farmers working on field"
              className="rounded-3xl shadow-xl mb-8 hover:scale-105 transition-transform duration-400"
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-80 bg-green-900 text-white p-8 rounded-3xl drop-shadow-xl"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              role="region"
              aria-live="polite"
              aria-atomic="true"
            >
              Our mission is to improve farming efficiency through innovation and sustainable practices.
            </motion.div>
            <motion.img
              src="/Image3.jpg"
              alt="Farmers consulting each other"
              className="rounded-3xl shadow-xl mt-12 hover:rotate-3 hover:scale-105 transition-transform duration-400"
              whileHover={{ rotate: 3, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 280 }}
            />
          </div>
        </div>

        {/* Why Choose Us and Call to Action side by side */}
        <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto px-6 relative z-10">
          {/* Why Choose Us Section */}
          <section className="flex-1 bg-gray-50 rounded-xl p-10 shadow-lg text-center">
            <motion.h2
              className="text-4xl font-extrabold mb-10 text-green-900"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>

            <motion.ul
              className="text-xl space-y-6 text-gray-700 font-medium select-none"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {reasons.map(({ icon, text }, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center gap-4 max-w-2xl mx-auto cursor-default rounded-xl p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <span className="text-3xl">{icon}</span>
                  <p>{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* Call To Action Section */}
          <motion.div
            className="flex-1 text-center py-24 bg-green-900 rounded-3xl text-white shadow-lg px-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            role="region"
            aria-label="Proven Expertise Call to Action"
          >
            <h3 className="text-4xl font-extrabold mb-6 tracking-wide">Proven Expertise</h3>
            <h2 className="text-5xl font-extrabold mb-12 leading-tight">
              Unbeatable Organic and Agriculture Services
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#FFC107' }}
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg transition-colors focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            >
              About More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
