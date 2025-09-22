// import React from "react";
// import { motion } from "framer-motion";
// import Hero from "../components/Hero.jsx";
// import Testimonials from "./Testimonials.jsx";

// const features = [
//   {
//     emoji: "🌱",
//     title: "Organic Fertilizers",
//     description:
//       "Export-quality dewatered cow dung that restores nutrients, boosts microbial life, and builds healthier soils naturally.",
//   },
//   {
//     emoji: "⚡",
//     title: "Renewable Ethanol",
//     description:
//       "65 KLPD grain-based ethanol production for fuel blending, pharma, and industrial use with zero liquid discharge (ZLD).",
//   },
//   {
//     emoji: "🌍",
//     title: "Global Reach",
//     description:
//       "Supplying clients across Asia, Africa, Europe & the Middle East with timely logistics and export-ready packaging.",
//   },
//   {
//     emoji: "🔬",
//     title: "Advanced Technology",
//     description:
//       "From RFID farm monitoring to GMP-grade ethanol distillation — we combine tradition with innovation.",
//   },
// ];

// const Home = () => {
//   return (
//     <div className="overflow-hidden">
//       {/* Hero Section */}
//       <Hero />

//       {/* Mission Section */}
//       <section className="py-24 px-6 bg-gray-50 relative">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h2
//             className="text-5xl font-extrabold text-green-900 mb-8"
//             initial={{ opacity: 0, y: -40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Mission
//           </motion.h2>
//           <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
//             To lead in sustainable agriculture and renewable energy by providing{" "}
//             <span className="font-semibold text-green-800">organic fertilizers</span>{" "}
//             and{" "}
//             <span className="font-semibold text-green-800">
//               high-quality ethanol biofuels
//             </span>
//             . Healthier soils. Empowered farmers. A cleaner planet.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-4 gap-10 mt-16">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.7 }}
//             >
//               <div className="text-5xl mb-4">{f.emoji}</div>
//               <h3 className="text-2xl font-bold text-green-900 mb-2">{f.title}</h3>
//               <p className="text-gray-600">{f.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Product Highlights */}
//       <section className="py-28 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
//           {/* Cow dung fertilizer */}
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="/Image3.jpg"
//               alt="Cow dung fertilizer"
//               className="rounded-3xl shadow-xl mb-6"
//             />
//             <h3 className="text-3xl font-bold text-green-900 mb-4">
//               Cow Dung Fertilizers
//             </h3>
//             <p className="text-gray-700 mb-6">
//               Hygienically processed from 10,000+ cattle farm. Export-ready,
//               nutrient-rich organic compost trusted by organic farmers worldwide.
//             </p>
//             <a
//               href="/products/fertilizers"
//               className="bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
//             >
//               Explore Fertilizers
//             </a>
//           </motion.div>

//           {/* Ethanol */}
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="/Image2.jpg"
//               alt="Ethanol Solutions"
//               className="rounded-3xl shadow-xl mb-6"
//             />
//             <h3 className="text-3xl font-bold text-green-900 mb-4">
//               Ethanol Solutions
//             </h3>
//             <p className="text-gray-700 mb-6">
//               65 KLPD modern plant producing ethanol, ENA, EQRS, and pharma-grade
//               ethanol with ZLD effluent treatment and GMP standards.
//             </p>
//             <a
//               href="/products/ethanol"
//               className="bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
//             >
//               Explore Ethanol
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <Testimonials />

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white">
//         <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
//         <p className="mb-8 max-w-2xl mx-auto">
//           From farms to fuel, Chetas Agrotech is shaping a greener future. Join
//           our journey toward sustainable agriculture and renewable energy.
//         </p>
//         <a
//           href="/contact"
//           className="bg-yellow-400 text-green-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
//         >
//           Get in Touch
//         </a>
//       </section>
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
    emoji: "🌱",
    title: "Organic Fertilizers",
    description:
      "Export-quality dewatered cow dung restoring nutrients and building healthier soils naturally.",
  },
  {
    emoji: "⚡",
    title: "Renewable Ethanol",
    description:
      "65 KLPD grain-based ethanol production for fuel, pharma, and industrial use with zero liquid discharge.",
  },
  {
    emoji: "🌍",
    title: "Global Reach",
    description:
      "Supplying clients across Asia, Africa, Europe & the Middle East with timely logistics.",
  },
  {
    emoji: "🔬",
    title: "Advanced Technology",
    description:
      "Combining RFID farm monitoring with GMP-grade ethanol distillation for smart, efficient solutions.",
  },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Mission + Features */}
      <section className="relative py-32 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-green-200 rounded-b-[50%] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-green-900 mb-8"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Leading sustainable agriculture & renewable energy with{" "}
            <span className="font-semibold text-green-800">organic fertilizers</span>{" "}
            and{" "}
            <span className="font-semibold text-green-800">high-quality ethanol biofuels</span>. 
            Healthier soils. Empowered farmers. A cleaner planet.
          </motion.p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-10 mt-20">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                <div className="text-6xl mb-4">{f.emoji}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights with Overlap */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Cow Dung Fertilizer */}
          <motion.div
            className="relative z-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/Image3.jpg"
                alt="Cow dung fertilizer"
                className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-4xl font-extrabold text-green-900 mt-6 mb-4">Cow Dung Fertilizers</h3>
            <p className="text-gray-700 mb-6">
              Hygienically processed from 10,000+ cattle farm. Export-ready, nutrient-rich organic compost trusted worldwide.
            </p>
            <a
              href="/products/fertilizers"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition"
            >
              Explore Fertilizers
            </a>
          </motion.div>

          {/* Ethanol */}
          <motion.div
            className="relative z-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/Image2.jpg"
                alt="Ethanol Solutions"
                className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-4xl font-extrabold text-green-900 mt-6 mb-4">Ethanol Solutions</h3>
            <p className="text-gray-700 mb-6">
              65 KLPD modern plant producing ethanol, ENA, EQRS, and pharma-grade ethanol with ZLD and GMP standards.
            </p>
            <a
              href="/products/ethanol"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition"
            >
              Explore Ethanol
            </a>
          </motion.div>
        </div>

        {/* Decorative curved background */}
        <div className="absolute -bottom-32 left-0 w-full h-64 bg-green-100 rounded-t-[50%] -z-10 opacity-30"></div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6">Ready to Partner with Us?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg md:text-xl">
            From farms to fuel, Chetas Agrotech is shaping a greener future. Join our journey toward sustainable agriculture and renewable energy.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-12 py-4 rounded-full shadow-2xl hover:bg-yellow-500 transition"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Subtle background shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply opacity-15 animate-pulse"></div>
      </section>
    </div>
  );
};

export default Home;
