import React from 'react';
import { motion } from 'framer-motion';

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

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
