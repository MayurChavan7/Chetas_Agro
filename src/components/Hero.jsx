import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white py-28 px-6 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Rooted in Nature, Growing for the Future
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Transforming waste into wealth for healthier soils, empowered farmers, 
        and a cleaner planet.
      </motion.p>

      <motion.a
        href="/contact"
        className="bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold shadow-md hover:bg-green-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </section>
  );
};
export default Hero;
