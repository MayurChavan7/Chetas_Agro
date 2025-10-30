// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Hero from "../components/Hero.jsx";
// import Testimonials from "./Testimonials.jsx";
// import { Leaf, Flame, Droplets, Globe2, Factory } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
//   }),
// };

// const Home = () => {
//   const navigate = useNavigate();

//   const features = useMemo(
//     () => [
//       {
//         icon: <Leaf className="w-10 h-10 text-green-700 mx-auto" />,
//         title: "Organic Fertilizers",
//         description:
//           "High-quality dewatered cow dung compost rich in NPK and micronutrients. Certified organic, eco-packaged, and ideal for sustainable agriculture.",
//       },
//       {
//         icon: <Flame className="w-10 h-10 text-yellow-600 mx-auto" />,
//         title: "Renewable Ethanol",
//         description:
//           "65 KLPD multi-feed distillery producing fuel, industrial & pharma-grade ethanol. Zero Liquid Discharge (ZLD) compliant and carbon-efficient.",
//       },
//       {
//         icon: <Globe2 className="w-10 h-10 text-blue-600 mx-auto" />,
//         title: "Global Reach",
//         description:
//           "Supplying agri-inputs & clean fuels across 50+ countries in Asia, Africa, Europe, and the Middle East with export-grade compliance.",
//       },
//       {
//         icon: <Factory className="w-10 h-10 text-green-900 mx-auto" />,
//         title: "Innovation & Automation",
//         description:
//           "Smart dairy management, IoT-based distillation control, RFID tracking, and AI-driven data insights ensure efficiency and quality.",
//       },
//     ],
//     []
//   );

//   const stats = useMemo(
//     () => [
//       { value: "10,000+", label: "Cattle Managed" },
//       { value: "65 KLPD", label: "Ethanol Capacity" },
//       { value: "50+", label: "Global Markets" },
//       { value: "100%", label: "ZLD & Organic Certified" },
//     ],
//     []
//   );

//   const products = useMemo(
//     () => [
//       {
//         img: "/Images/CowFertilizer7.png",
//         title: "Cow Dung Fertilizers",
//         desc: "Produced from fresh cow dung sourced daily from integrated dairy farms. After dewatering, composting, and testing, we deliver eco-certified fertilizers that enhance soil vitality, yield, and sustainability.",
//         link: "/products#fertilizers",
//         left: true,
//       },
//       {
//         img: "/Images/EthonolFertilizer6.jpeg",
//         title: "Renewable Ethanol Solutions",
//         desc: "Our advanced ethanol facility converts maize and broken rice into clean biofuel. We support India’s E20 fuel blending and green energy missions while achieving zero-waste through DDGS, CO₂, and power recovery.",
//         link: "/products#ethanol",
//         left: false,
//       },
//     ],
//     []
//   );

//   const handleExplore = (link) => {
//     const [path, hash] = link.split("#");
//     navigate(path);
//     setTimeout(() => {
//       if (hash) {
//         const el = document.getElementById(hash);
//         if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 300);
//   };

//   return (
//     <div
//       className="overflow-x-hidden font-[Inter] text-gray-800 scroll-smooth selection:bg-green-200 selection:text-green-900"
//       style={{ fontFeatureSettings: '"kern"' }}
//     >
//       {/* =================== HERO =================== */}
//       <React.Suspense fallback={<div className="h-screen bg-green-50" />}>
//         <Hero />
//       </React.Suspense>

//       {/* =================== MISSION SECTION =================== */}
//       <section className="relative py-24 sm:py-32 bg-gradient-to-b from-green-50 via-white to-lime-50 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/Images/pattern-leaf.svg')] opacity-5 bg-repeat" />
//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <motion.h2
//             className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-extrabold text-green-900 mb-8"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Mission
//           </motion.h2>
//           <motion.p
//             className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             custom={2}
//             viewport={{ once: true }}
//           >
//             <strong>Chetas Agrotech</strong> empowers sustainable agriculture and clean energy innovation through circular economy practices — transforming waste into wealth, and driving India's green industrial revolution.
//           </motion.p>

//           {/* Features */}
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-3xl shadow-md hover:shadow-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-500"
//                 variants={fadeUp}
//                 custom={i + 3}
//               >
//                 {f.icon}
//                 <h3 className="text-2xl font-bold text-green-900 mb-3 mt-4">
//                   {f.title}
//                 </h3>
//                 <p className="text-gray-600 text-base leading-relaxed">
//                   {f.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =================== PRODUCT HIGHLIGHTS =================== */}
//       <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-green-50/50 to-transparent" />
//         <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">
//           {products.map((p, i) => (
//             <motion.div
//               key={i}
//               className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
//                 p.left ? "" : "md:flex-row-reverse"
//               }`}
//               initial={{ opacity: 0, x: p.left ? -80 : 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105">
//                 <img
//                   src={p.img}
//                   alt={`${p.title} image`}
//                   className="w-full h-72 sm:h-80 md:h-[440px] object-cover rounded-3xl"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="space-y-6 text-center md:text-left">
//                 <h3 className="text-3xl sm:text-4xl font-[Playfair Display] font-bold text-green-900">
//                   {p.title}
//                 </h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">{p.desc}</p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => handleExplore(p.link)}
//                   className="inline-block bg-green-700 text-white px-10 py-3 rounded-full shadow-md hover:bg-green-800 transition-all"
//                 >
//                   Explore
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* =================== IMPACT SECTION =================== */}
//       <section className="py-28 bg-gradient-to-br from-green-800 via-green-700 to-lime-600 text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/Images/pattern-energy.svg')] opacity-10 bg-repeat" />
//         <div className="relative z-10 max-w-5xl mx-auto px-6">
//           <motion.h2
//             className="text-4xl md:text-5xl font-[Playfair Display] font-extrabold mb-8"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//           >
//             Impact & Sustainability
//           </motion.h2>
//           <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-12">
//             Every drop of ethanol and every grain of compost contributes to a cleaner, greener India — reducing carbon emissions, regenerating soil, and promoting circular resource recovery.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
//             {stats.map((s, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={i}
//                 className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20 transition"
//               >
//                 <h3 className="text-5xl sm:text-6xl font-extrabold mb-2">
//                   {s.value}
//                 </h3>
//                 <p className="text-lg text-green-100">{s.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =================== TESTIMONIALS =================== */}
//       <React.Suspense
//         fallback={<div className="py-28 bg-green-50 text-center">Loading...</div>}
//       >
//         <Testimonials />
//       </React.Suspense>

//       {/* =================== CTA =================== */}
//       <section className="py-28 sm:py-36 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white relative overflow-hidden">
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-extrabold mb-6">
//             Ready to Build a Greener Future?
//           </h2>
//           <p className="mb-10 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-green-50">
//             From organic fertilizers to renewable ethanol —{" "}
//             <strong>Chetas Agrotech</strong> powers the next wave of sustainable industry through innovation, technology, and eco-intelligence.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate("/contact")}
//             className="bg-yellow-400 text-green-900 font-bold px-12 py-4 rounded-full shadow-xl hover:bg-yellow-500 transition-all"
//           >
//             Get in Touch
//           </motion.button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";
import { Leaf, Flame, Droplets, Globe2, Factory } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Home = () => {
  const navigate = useNavigate();

  const features = useMemo(
    () => [
      {
        icon: <Leaf className="w-10 h-10 text-green-700 mx-auto" />,
        title: "Organic Fertilizers",
        description:
          "High-quality dewatered cow dung compost rich in NPK and micronutrients. Certified organic, eco-packaged, and ideal for sustainable agriculture.",
      },
      {
        icon: <Flame className="w-10 h-10 text-yellow-600 mx-auto" />,
        title: "Renewable Ethanol",
        description:
          "65 KLPD multi-feed distillery producing fuel, industrial & pharma-grade ethanol. Zero Liquid Discharge (ZLD) compliant and carbon-efficient.",
      },
      {
        icon: <Factory className="w-10 h-10 text-green-900 mx-auto" />,
        title: "Innovation & Automation",
        description:
          "Smart dairy management, IoT-based distillation control, RFID tracking, and AI-driven data insights ensure efficiency and quality.",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "75,000+", label: "Cattle Managed" },
      { value: "65 KLPD", label: "Ethanol Capacity" },
      { value: "100%", label: "ZLD & Organic Certified" },
    ],
    []
  );

  const products = useMemo(
    () => [
      {
        img: "/Images/CowFertilizer7.png",
        title: "Cow Dung Fertilizers",
        desc: "Produced from fresh cow dung sourced daily from integrated dairy farms. After dewatering, composting, and testing, we deliver eco-certified fertilizers that enhance soil vitality, yield, and sustainability.",
        link: "/products#fertilizers",
        left: true,
      },
      {
        img: "/Images/EthonolFertilizer6.jpeg",
        title: "Renewable Ethanol Solutions",
        desc: "Our advanced ethanol facility converts maize and broken rice into clean biofuel. We support India’s E20 fuel blending and green energy missions while achieving zero-waste through DDGS, CO₂, and power recovery.",
        link: "/products#ethanol",
        left: false,
      },
    ],
    []
  );

  const handleExplore = (link) => {
    const [path, hash] = link.split("#");
    navigate(path);
    setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <div
      className="overflow-x-hidden font-[Inter] text-gray-800 scroll-smooth selection:bg-green-200 selection:text-green-900"
      style={{ fontFeatureSettings: '"kern"' }}
    >
      {/* =================== HERO =================== */}
      <React.Suspense fallback={<div className="h-screen bg-green-50" />}>
        <Hero />
      </React.Suspense>

      {/* =================== MISSION SECTION =================== */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-green-50 via-white to-lime-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/pattern-leaf.svg')] opacity-5 bg-repeat" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-extrabold text-green-900 mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            <strong>Chetas Agrotech</strong> empowers sustainable agriculture and clean energy innovation through circular economy practices — transforming waste into wealth, and driving India's green industrial revolution.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm border border-green-100 rounded-3xl shadow-md hover:shadow-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-500"
                variants={fadeUp}
                custom={i + 3}
              >
                {f.icon}
                <h3 className="text-2xl font-bold text-green-900 mb-3 mt-4">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =================== PRODUCT HIGHLIGHTS =================== */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
                p.left ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: p.left ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={p.img}
                  alt={`${p.title} image`}
                  className="w-full h-72 sm:h-80 md:h-[440px] object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-[Playfair Display] font-bold text-green-900">
                  {p.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{p.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleExplore(p.link)}
                  className="inline-block bg-green-700 text-white px-10 py-3 rounded-full shadow-md hover:bg-green-800 transition-all"
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== IMPACT SECTION =================== */}
      <section className="py-28 bg-gradient-to-br from-green-800 via-green-700 to-lime-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/pattern-energy.svg')] opacity-10 bg-repeat" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-[Playfair Display] font-extrabold mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            Impact & Sustainability
          </motion.h2>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-12">
            Every drop of ethanol and every grain of compost contributes to a cleaner, greener India — reducing carbon emissions, regenerating soil, and promoting circular resource recovery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20 transition"
              >
                <h3 className="text-5xl sm:text-6xl font-extrabold mb-2">
                  {s.value}
                </h3>
                <p className="text-lg text-green-100">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <React.Suspense
        fallback={<div className="py-28 bg-green-50 text-center">Loading...</div>}
      >
        <Testimonials />
      </React.Suspense>

      {/* =================== CTA =================== */}
      <section className="py-28 sm:py-36 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-center text-white relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[Playfair Display] font-extrabold mb-6">
            Ready to Build a Greener Future?
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-green-50">
            From organic fertilizers to renewable ethanol —{" "}
            <strong>Chetas Agrotech</strong> powers the next wave of sustainable industry through innovation, technology, and eco-intelligence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-green-900 font-bold px-12 py-4 rounded-full shadow-xl hover:bg-yellow-500 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
