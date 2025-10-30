import React, { useMemo } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 120 },
  },
};

const ImageCard = React.memo(({ img, title }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <img
      src={img}
      alt={title}
      className="w-full h-56 sm:h-64 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  </motion.div>
));

const Testimonials = () => {
  const cowVarieties = useMemo(
    () => [
      { img: "/Images/cow1.jpg", title: "Gir Cow" },
      { img: "/Images/cow2.jpg", title: "Sahiwal Cow" },
      { img: "/Images/cow3.jpg", title: "Rathi Cow" },
      { img: "/Images/cow4.jpg", title: "Tharparkar Cow" },
      { img: "/Images/cow5.jpg", title: "Red Sindhi Cow" },
    ],
    []
  );

  const ethanolVarieties = useMemo(
    () => [
      { img: "/Images/ethanol1.jpg", title: "Fuel Grade Ethanol" },
      { img: "/Images/ethanol2.jpg", title: "Industrial Grade Ethanol" },
      { img: "/Images/ethanol3.jpg", title: "Pharma Grade Ethanol" },
      { img: "/Images/ethanol4.jpg", title: "Anhydrous Ethanol" },
      { img: "/Images/ethanol5.jpg", title: "Bio-based Ethanol" },
    ],
    []
  );

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/30 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* 🐄 Cow Varieties Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-green-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Cow Varieties
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cowVarieties.map((c, i) => (
            <ImageCard key={i} {...c} />
          ))}
        </motion.div>

        {/* 🌾 Ethanol Varieties Section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-green-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ethanol Varieties
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ethanolVarieties.map((e, i) => (
            <ImageCard key={i} {...e} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
