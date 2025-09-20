import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "../components/Carousel.jsx";

const ecoIcons = [
  { src: "/leaf1.png", alt: "Leaf", size: 40, delay: 0 },
  { src: "/leaf2.png", alt: "Leaf", size: 30, delay: 1000 },
  { src: "/sprout.png", alt: "Sprout", size: 35, delay: 2000 },
];

const productsInfo = [
  {
    title: "Eco-Friendly",
    icon: "🌍",
    description:
      "Our fertilizer reduces chemical use and supports sustainable agriculture by recycling organic waste into nutrient-rich compost.",
  },
  {
    title: "High Yield",
    icon: "🌾",
    description:
      "Farmers experience improved crop yield and soil texture with our natural fertilizer, making fields more fertile season after season.",
  },
  {
    title: "Certified Quality",
    icon: "✅",
    description:
      "Every batch undergoes rigorous testing to ensure quality, purity, and compliance with international organic farming standards.",
  },
];

const Products = () => {
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(0);

  // Parallax transforms
  const heroParallax = useTransform(scrollY, [0, 300], [0, -50]);
  const blobsParallax = useTransform(scrollY, [0, 500], [0, 80]);

  useEffect(() => {
    return scrollY.onChange((y) => setScrollOffset(y));
  }, [scrollY]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-green-50 overflow-hidden">
      {/* Floating Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-100px] w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30"
        style={{ y: blobsParallax }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-25"
        style={{ y: blobsParallax }}
      />

      {/* Hero Section */}
      <motion.div
        className="text-center mb-20 relative z-10"
        style={{ y: heroParallax }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-700 mb-4">
          🌱 Our Products
        </h2>
        <div className="h-1 w-28 bg-green-600 mx-auto rounded-full mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          We specialize in processing and exporting{" "}
          <span className="font-semibold text-green-800">dewatered cow dung</span>, 
          a nutrient-rich, eco-friendly fertilizer ideal for{" "}
          <span className="italic">organic farming, horticulture</span> and{" "}
          <span className="italic">soil rehabilitation</span>. Enhance soil fertility
          while promoting sustainability.
        </p>
      </motion.div>

      {/* Floating Eco Icons */}
      {ecoIcons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt={icon.alt}
          className="absolute"
          style={{
            top: `${10 + idx * 20}%`,
            left: `${5 + idx * 30}%`,
            width: icon.size,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 4,
            delay: icon.delay / 1000,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Product Image */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto mb-20 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
      >
        <img
          src="/Image3.jpg"
          alt="Dewatered Cow Dung Fertilizer"
          className="w-full object-cover max-h-[500px] border-4 border-white rounded-3xl shadow-lg"
        />
        {/* Floating Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          100% Organic ♻️
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="shadow-xl rounded-3xl bg-white p-6 max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.9 }}
      >
        <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Product Gallery
        </h3>
        <Carousel />
      </motion.div>

      {/* Product Info Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {productsInfo.map((product, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
              {product.icon} {product.title}
            </h4>
            <p className="text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-24 text-center py-20 px-10 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-4xl font-extrabold mb-6">
          Ready to Upgrade Your Soil?
        </h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of farmers worldwide using our 100% organic, eco-friendly fertilizers for better yield and sustainable growth.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg transition focus:ring-4 focus:ring-yellow-300"
        >
          Contact Us
        </motion.a>
        <div className="absolute inset-0 bg-yellow-500 opacity-10 blur-3xl rounded-3xl"></div>
      </motion.div>
    </section>
  );
};

export default Products;
