// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white py-28 px-6 text-center"
//       style={{ backgroundImage: "url('/Image1st.jpg')" }} // 👉 replace with your image path
//     >
//       {/* 🔹 Dark overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-600/80"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold mb-6"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           Rooted in Nature, Growing for the Future
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Transforming waste into wealth for healthier soils, empowered farmers,
//           and a cleaner planet.
//         </motion.p>

//         <motion.a
//           href="/contact"
//           className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold shadow-md hover:bg-green-100 transition"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get in Touch
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-green-600 text-white"
      style={{
        backgroundImage: "url('/Image1st.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

      {/* Animated particle/background effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, loop: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
          mixBlendMode: "screen",
          filter: "blur(12px)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 py-36 px-6 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rooted in Nature, Growing for the Future
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-xl md:text-2xl font-light mb-10 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Transforming waste into wealth for healthier soils, empowered farmers,
          and a cleaner planet. Join us in cultivating a sustainable tomorrow.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a
            href="/contact"
            className="bg-white text-green-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/products"
            className="border border-white rounded-full px-10 py-4 font-semibold hover:bg-white hover:text-green-900 transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Explore Products
          </motion.a>
        </div>

        {/* Optional: nature-inspired icon or subtle SVG decorative animation */}
        <motion.div
          className="absolute bottom-10 right-10 opacity-20"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 fill-green-200"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C10 7 7 14 12 22c5-8 2-15 0-20z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
