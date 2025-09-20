// import Hero from "../components/Hero.jsx";
// import Testimonials from "./Testimonials.jsx";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <section className="py-16 px-6 text-center bg-gray-50">
//         <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//         <p className="max-w-3xl mx-auto text-lg">
//           To become a global leader in sustainable agricultural inputs by 
//           providing organic, eco-conscious alternatives to chemical fertilizers.
//         </p>
//       </section>
//       <Testimonials />
//     </div>
//   );
// };
// export default Home;
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";

const features = [
  {
    title: "Sustainability Commitment",
    description:
      "Leading the way in eco-conscious farming with organic inputs and minimal environmental impact.",
    emoji: "🌿"
  },
  {
    title: "Technology Integration",
    description:
      "Using precision agtech and state-of-the-art farming equipment for optimized yield and resource use.",
    emoji: "🤖"
  },
  {
    title: "Global Reach & Support",
    description:
      "A trusted supplier for farms and businesses across Asia, Africa, Europe, and the Middle East.",
    emoji: "🌍"
  }
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      <section className="py-20 px-6 text-center bg-gray-50 max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-green-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          To become a global leader in sustainable agricultural inputs by providing organic,
          eco-conscious alternatives to chemical fertilizers — powering better food systems
          with integrity and innovation.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map(({ title, description, emoji }, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-green-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(34,197,94,0.3)" }}
            >
              <span className="text-6xl mb-6 block">{emoji}</span>
              <h3 className="text-2xl font-semibold mb-3 text-green-900">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <motion.section
        className="relative py-16 text-white text-center bg-gradient-to-r from-green-800 to-green-600 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl italic font-light tracking-wide drop-shadow-lg">
            “Farming isn’t just growing crops; it’s cultivating trust, innovation, and sustainability for generations to come.”
          </blockquote>
          <cite className="block mt-6 text-lg font-semibold">— Harshil Agrotech Leadership</cite>
        </div>
        {/* Decorative animated leaf SVG or subtle particle animation could be added here */}
      </motion.section>

      <Testimonials />
    </div>
  );
};

export default Home;
