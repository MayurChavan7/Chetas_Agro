import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Split headline words for staggered animation
  const headline = "Rooted in Nature, Growing for the Future".split(" ");

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/Image1st.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // parallax feel
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
        style={{
          background: "linear-gradient(135deg, rgba(0,100,0,0.8), rgba(0,50,0,0.7), rgba(0,150,50,0.6))",
          backgroundSize: "300% 300%",
          animation: "gradientMove 12s ease infinite",
        }}
      />

      {/* Radial dots effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-36 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Transforming waste into wealth for healthier soils, empowered farmers,
          and a cleaner planet. Join us in cultivating a sustainable tomorrow.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a
            href="/contact"
            className="bg-white text-green-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-green-300/50 transition relative"
            whileHover={{ scale: 1.1 }}
          >
            <span className="absolute inset-0 rounded-full bg-green-300 opacity-20 animate-ping"></span>
            Get in Touch
          </motion.a>
          <motion.a
            href="/products"
            className="border border-white rounded-full px-10 py-4 font-semibold hover:bg-white hover:text-green-900 transition"
            whileHover={{ scale: 1.1 }}
          >
            Explore Products
          </motion.a>
        </div>
      </div>

      {/* Floating SVG leaf decoration */}
      <motion.div
        className="absolute bottom-12 right-12 opacity-30"
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 fill-green-200"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C10 7 7 14 12 22c5-8 2-15 0-20z" />
        </svg>
      </motion.div>

      {/* Animated gradient keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
