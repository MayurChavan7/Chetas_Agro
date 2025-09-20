import React from "react";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel.jsx";
// import HowProductFormed from "../components/HowProductFormed.jsx";

const Products = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center max-w-7xl mx-auto">
      {/* Animated Header */}
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-green-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products
      </motion.h2>

      {/* Descriptive Text */}
      <motion.p
        className="mb-12 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We specialize in processing and exporting dewatered cow dung — a nutrient-rich,
        eco-friendly fertilizer ideal for organic farming, horticulture, and soil rehabilitation.
      </motion.p>

      {/* Eye-catching image with animation */}
      <motion.img
        src="Image3.jpg" // Replace with your own image path
        alt="Dewatered Cow Dung Fertilizer"
        className="mx-auto rounded-lg shadow-lg mb-12 max-h-96 object-cover"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      />

      {/* Smooth fade/scale for Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.9 }}
        className="shadow-lg rounded-lg"
      >
        <Carousel />
      </motion.div>

      {/* Optional placeholder for HowProductFormed component */}
      {/* <HowProductFormed /> */}
    </section>
  );
};

export default Products;
