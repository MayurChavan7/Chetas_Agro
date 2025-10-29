// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";

// // =================== DATA ===================
// const ecoIcons = [
//   { src: "/Images/Image5.png", alt: "Leaf", size: 45, delay: 0 },
//   { src: "/Images/Image5.png", alt: "Sprout", size: 35, delay: 1 },
//   { src: "/Images/Image5.png", alt: "Seedling", size: 40, delay: 2 },
// ];

// const fertilizerInfo = [
//   {
//     title: "Eco-Friendly",
//     icon: "🌍",
//     description:
//       "Transforms farm waste into nutrient-dense compost, cutting chemical dependency and restoring soil health.",
//   },
//   {
//     title: "High Yield Assurance",
//     icon: "🌾",
//     description:
//       "Improves soil structure and microbial balance, ensuring consistent productivity across diverse crops.",
//   },
//   {
//     title: "Certified Organic",
//     icon: "✅",
//     description:
//       "Every batch complies with international organic standards, ensuring safe and sustainable farming inputs.",
//   },
//   {
//     title: "Moisture Retention",
//     icon: "💧",
//     description:
//       "Enhances water-holding capacity, reducing irrigation frequency and promoting root development.",
//   },
// ];

// const fertilizerApplications = [
//   { icon: "🥕", text: "Organic farming & horticulture" },
//   { icon: "🌴", text: "Soil rehabilitation & landscaping" },
//   { icon: "🌻", text: "Greenhouse & floriculture" },
//   { icon: "🍇", text: "Vineyards & specialty fruit cultivation" },
// ];

// const ethanolInfo = [
//   {
//     title: "Clean Fuel Blending",
//     icon: "⚡",
//     description:
//       "Bioethanol blended with petrol significantly reduces greenhouse gas emissions and boosts energy security.",
//   },
//   {
//     title: "Pharma-Grade Purity",
//     icon: "💊",
//     description:
//       "Manufactured under GMP conditions for pharmaceuticals, cosmetics, and analytical applications.",
//   },
//   {
//     title: "Zero Liquid Discharge",
//     icon: "♻️",
//     description:
//       "Closed-loop treatment systems recycle process water, achieving zero liquid waste generation.",
//   },
//   {
//     title: "Renewable Energy Focus",
//     icon: "🔋",
//     description:
//       "A crucial contributor to India’s renewable fuel targets and circular-economy initiatives.",
//   },
// ];

// const ethanolApplications = [
//   { icon: "⛽", text: "Bioethanol blended fuels" },
//   { icon: "🏥", text: "Pharmaceutical & healthcare" },
//   { icon: "🏭", text: "Industrial solvents & manufacturing" },
//   { icon: "🌍", text: "Renewable energy projects" },
// ];

// const stats = [
//   { number: "30+", label: "Countries Exported" },
//   { number: "25+", label: "Years of Expertise" },
//   { number: "1M+", label: "Farmers Empowered" },
//   { number: "100%", label: "Organic Certified" },
// ];

// // =================== MOTION VARIANTS ===================
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
//   }),
// };

// // =================== COMPONENTS ===================
// const HeroSection = ({ scrollY }) => {
//   const heroParallax = useTransform(scrollY, [0, 300], [0, -60]);
//   const blobParallax = useTransform(scrollY, [0, 400], [0, 90]);

//   return (
//     <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-green-100 to-green-50">
//       {/* Background Blobs */}
//       <motion.div
//         className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"
//         style={{ y: blobParallax }}
//       />
//       <motion.div
//         className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-lime-200 rounded-full blur-3xl opacity-30"
//         style={{ y: blobParallax }}
//       />

//       {/* Floating Eco Icons */}
//       {ecoIcons.map((icon, i) => (
//         <motion.img
//           key={i}
//           src={icon.src}
//           alt={icon.alt}
//           className="absolute hidden md:block opacity-70"
//           style={{
//             top: `${10 + i * 25}%`,
//             left: `${12 + i * 30}%`,
//             width: icon.size,
//           }}
//           animate={{ y: [0, -15, 0] }}
//           transition={{
//             repeat: Infinity,
//             duration: 5,
//             delay: i * 1.3,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Hero Text */}
//       <motion.div
//         className="relative z-10 text-center px-6 max-w-4xl mx-auto"
//         style={{ y: heroParallax }}
//       >
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-500 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           🌱 Our Products
//         </motion.h1>
//         <motion.p
//           className="text-lg md:text-xl text-gray-700 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           At <span className="font-semibold text-green-800">Chetas Agrotech</span>,
//           we engineer eco-friendly{" "}
//           <span className="font-semibold text-green-700">fertilizers</span> and{" "}
//           <span className="font-semibold text-yellow-600">renewable ethanol</span>{" "}
//           that redefine sustainability in agriculture & energy.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// const InfoSection = ({
//   title,
//   highlightData,
//   applications,
//   image1,
//   image2,
//   highlightColor,
// }) => (
//   <section className="mt-28 md:mt-36 px-6 relative">
//     <motion.h2
//       className={`text-3xl md:text-5xl font-bold text-center mb-16 ${
//         highlightColor === "green" ? "text-green-700" : "text-yellow-600"
//       }`}
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       {title}
//     </motion.h2>

//     {/* Decorative Background */}
//     <div
//       className={`absolute inset-0 -z-10 ${
//         highlightColor === "green"
//           ? "bg-gradient-to-b from-green-50/80 to-transparent"
//           : "bg-gradient-to-b from-yellow-50/80 to-transparent"
//       }`}
//     />

//     {/* Main Image */}
//     <motion.div
//       className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-20"
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <img
//         src={image1}
//         alt={title}
//         className="w-full object-cover max-h-[500px]"
//         loading="lazy"
//       />
//       <div
//         className={`absolute top-6 right-6 px-5 py-2 font-semibold rounded-full shadow-md text-white ${
//           highlightColor === "green" ? "bg-green-600" : "bg-amber-500"
//         }`}
//       >
//         {highlightColor === "green" ? "100% Organic ♻️" : "65 KLPD Capacity ⚡"}
//       </div>
//     </motion.div>

//     {/* Highlights */}
//     <motion.div
//       className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       {highlightData.map((info, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={fadeInUp}
//           className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
//         >
//           <h3
//             className={`text-xl font-semibold mb-3 ${
//               highlightColor === "green"
//                 ? "text-green-700"
//                 : "text-yellow-700"
//             }`}
//           >
//             {info.icon} {info.title}
//           </h3>
//           <p className="text-gray-600">{info.description}</p>
//         </motion.div>
//       ))}
//     </motion.div>

//     {/* Applications */}
//     <div className="grid md:grid-cols-2 gap-14 mt-24 max-w-6xl mx-auto items-center">
//       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
//         <h3
//           className={`text-3xl font-bold mb-6 ${
//             highlightColor === "green" ? "text-green-700" : "text-yellow-600"
//           }`}
//         >
//           Applications
//         </h3>
//         <ul className="space-y-5">
//           {applications.map((app, i) => (
//             <li
//               key={i}
//               className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
//             >
//               <span className="text-3xl">{app.icon}</span>
//               <span className="text-gray-700 text-lg">{app.text}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//       <motion.img
//         src={image2}
//         alt={`${title} usage`}
//         className="rounded-3xl shadow-2xl object-cover max-h-[480px] w-full"
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       />
//     </div>
//   </section>
// );

// const StatsSection = () => (
//   <section className="mt-32 bg-gradient-to-r from-green-700 to-green-600 py-20 text-white relative overflow-hidden">
//     <div className="absolute inset-0 opacity-10 bg-[url('/Images/pattern-leaf.svg')] bg-repeat" />
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 text-center relative z-10">
//       {stats.map((stat, i) => (
//         <motion.div
//           key={i}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition"
//         >
//           <h3 className="text-4xl font-extrabold">{stat.number}</h3>
//           <p className="text-lg mt-2 opacity-90">{stat.label}</p>
//         </motion.div>
//       ))}
//     </div>
//   </section>
// );

// const CTASection = () => (
//   <section className="text-center py-24 px-6 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl max-w-5xl mx-auto mt-32">
//     <motion.h3
//       className="text-4xl font-extrabold mb-6"
//       initial="hidden"
//       whileInView="visible"
//       variants={fadeInUp}
//       viewport={{ once: true }}
//     >
//       Grow With Us 🌾
//     </motion.h3>
//     <motion.p
//       className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//     >
//       Partner with <strong>Chetas Agrotech</strong> to champion cleaner
//       energy and regenerative agriculture — nurturing both crops and our planet.
//     </motion.p>
//     <motion.div whileHover={{ scale: 1.05 }}>
//       <Link
//         to="/contact"
//         className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg text-lg transition"
//       >
//         Contact Us
//       </Link>
//     </motion.div>
//   </section>
// );

// // =================== MAIN EXPORT ===================
// const Products = () => {
//   const { scrollY } = useScroll();

//   return (
//     <main>
//       <HeroSection scrollY={scrollY} />
//       <InfoSection
//         title="Premium Cow Dung Fertilizers"
//         highlightData={fertilizerInfo}
//         applications={fertilizerApplications}
//         image1="/Images/CowFertilizer7.png"
//         image2="/Images/CowFertilizer6.png"
//         highlightColor="green"
//       />
//       <InfoSection
//         title="Advanced Ethanol Solutions"
//         highlightData={ethanolInfo}
//         applications={ethanolApplications}
//         image1="/Images/EthonolFertilizer6.jpeg"
//         image2="/Images/EthonolFertilizer2.jpg"
//         highlightColor="yellow"
//       />
//       <StatsSection />
//       <CTASection />
//     </main>
//   );
// };

// export default Products;
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// =================== DATA ===================
const ecoIcons = [
  { src: "/Images/Image5.png", alt: "Leaf", size: 45, delay: 0 },
  { src: "/Images/Image5.png", alt: "Sprout", size: 35, delay: 1 },
  { src: "/Images/Image5.png", alt: "Seedling", size: 40, delay: 2 },
];

// ---------- Cow Dung Fertilizer ----------
const fertilizerInfo = [
  {
    title: "Sustainable Waste Conversion",
    icon: "♻️",
    description:
      "Cow dung collected from farms is dewatered, dried, and converted into fine organic manure through controlled aerobic composting.",
  },
  {
    title: "Nutrient-Rich Formula",
    icon: "🌿",
    description:
      "Contains balanced NPK ratios (Nitrogen, Phosphorus, Potassium), humic acid, and essential micronutrients to enhance soil fertility.",
  },
  {
    title: "Odor-Control & Hygiene",
    icon: "🧪",
    description:
      "Automated drying and filtration ensure a clean, odor-free, and pathogen-free fertilizer suitable for all crops.",
  },
  {
    title: "Certified Organic & Export-Ready",
    icon: "✅",
    description:
      "Complies with BIS, FCO, and global organic standards — quality tested for export markets worldwide.",
  },
];

const fertilizerProcess = [
  "Cow Dung Collection & Dewatering",
  "Composting & Aeration",
  "Nutrient Balancing & Curing",
  "Drying & Pulverization",
  "Screening & Packaging",
  "Quality Testing & Certification",
];

const fertilizerComposition = [
  { nutrient: "Nitrogen (N)", value: "0.8 – 1.2%" },
  { nutrient: "Phosphorus (P₂O₅)", value: "0.5 – 0.8%" },
  { nutrient: "Potassium (K₂O)", value: "0.8 – 1.0%" },
  { nutrient: "Organic Carbon", value: "20 – 25%" },
  { nutrient: "Moisture", value: "<15%" },
];

const fertilizerApplications = [
  { icon: "🥕", text: "Organic & sustainable farming" },
  { icon: "🌾", text: "Soil structure restoration" },
  { icon: "🌻", text: "Horticulture & floriculture" },
  { icon: "🍇", text: "Vineyards & specialty crops" },
];

// ---------- Ethanol ----------
const ethanolInfo = [
  {
    title: "Grain-Based Feedstock",
    icon: "🌾",
    description:
      "Corn, broken rice, and millets are liquefied and fermented using high-efficiency yeast cultures to produce ethanol.",
  },
  {
    title: "Distillation & Dehydration",
    icon: "⚙️",
    description:
      "State-of-the-art multi-pressure distillation and molecular sieve dehydration systems ensure 99.8% purity ethanol.",
  },
  {
    title: "Zero Liquid Discharge (ZLD)",
    icon: "💧",
    description:
      "Evaporation and condensate polishing units recycle all process water, ensuring zero effluent discharge.",
  },
  {
    title: "Pharma & Fuel Grade",
    icon: "💊",
    description:
      "Produces ENA (Extra Neutral Alcohol) for pharmaceuticals and anhydrous ethanol for blending with petrol.",
  },
];

const ethanolProcess = [
  "Grain Milling & Liquefaction",
  "Fermentation",
  "Distillation & Dehydration",
  "Ethanol Storage & Blending",
  "Co-product Recovery (DDGS, CO₂)",
  "Quality Assurance & Dispatch",
];

const ethanolApplications = [
  { icon: "⛽", text: "Biofuel blending (E10, E20)" },
  { icon: "🏥", text: "Pharmaceutical & healthcare" },
  { icon: "🏭", text: "Industrial solvents" },
  { icon: "🌍", text: "Renewable energy exports" },
];

const certifications = [
  "ISO 9001 & 14001 Certified",
  "BIS / FCO Compliant",
  "ZLD Certified Operation",
  "FSSAI & Export License Approved",
];

const stats = [
  { number: "30+", label: "Countries Exported" },
  { number: "25+", label: "Years of Expertise" },
  { number: "1M+", label: "Farmers Empowered" },
  { number: "100%", label: "Organic Certified" },
];

// =================== MOTION VARIANTS ===================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

// =================== COMPONENTS ===================
const HeroSection = ({ scrollY }) => {
  const heroParallax = useTransform(scrollY, [0, 300], [0, -60]);
  const blobParallax = useTransform(scrollY, [0, 400], [0, 90]);

  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-green-100 to-green-50">
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"
        style={{ y: blobParallax }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-lime-200 rounded-full blur-3xl opacity-30"
        style={{ y: blobParallax }}
      />
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y: heroParallax }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-500 mb-6">
          🌱 Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At <span className="font-semibold text-green-800">Chetas Agrotech</span>,
          we engineer <span className="text-green-700 font-semibold">organic fertilizers</span> and{" "}
          <span className="text-yellow-600 font-semibold">renewable ethanol</span> —
          advancing agriculture and clean energy for a sustainable tomorrow.
        </p>
      </motion.div>
    </section>
  );
};

// ---------- Process Timeline ----------
const ProcessTimeline = ({ steps, color }) => (
  <div className="relative flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap mt-16">
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        viewport={{ once: true }}
        className={`relative bg-white border-l-4 sm:border-l-0 sm:border-t-4 ${
          color === "green" ? "border-green-600" : "border-yellow-500"
        } rounded-2xl shadow-md p-6 w-full sm:w-64 text-center hover:shadow-xl`}
      >
        <h4 className="font-semibold text-gray-800 text-lg">{step}</h4>
      </motion.div>
    ))}
  </div>
);

// ---------- Composition Table ----------
const CompositionTable = ({ data }) => (
  <div className="max-w-3xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-lg bg-white">
    <table className="w-full text-left border-collapse">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="py-3 px-5">Nutrient</th>
          <th className="py-3 px-5">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            <td className="py-3 px-5 font-medium text-gray-700">{row.nutrient}</td>
            <td className="py-3 px-5 text-gray-600">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const InfoSection = ({
  title,
  highlightData,
  applications,
  processSteps,
  composition,
  image1,
  image2,
  highlightColor,
}) => (
  <section className="mt-28 md:mt-36 px-6 relative">
    <motion.h2
      className={`text-3xl md:text-5xl font-bold text-center mb-16 ${
        highlightColor === "green" ? "text-green-700" : "text-yellow-600"
      }`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>

    <motion.div
      className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img
        src={image1}
        alt={title}
        className="w-full object-cover max-h-[500px]"
        loading="lazy"
      />
    </motion.div>

    {/* Highlights */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {highlightData.map((info, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
        >
          <h3
            className={`text-xl font-semibold mb-3 ${
              highlightColor === "green" ? "text-green-700" : "text-yellow-700"
            }`}
          >
            {info.icon} {info.title}
          </h3>
          <p className="text-gray-600">{info.description}</p>
        </motion.div>
      ))}
    </div>

    <ProcessTimeline steps={processSteps} color={highlightColor} />

    {composition && <CompositionTable data={composition} />}

    {/* Applications */}
    <div className="grid md:grid-cols-2 gap-14 mt-24 max-w-6xl mx-auto items-center">
      <div>
        <h3
          className={`text-3xl font-bold mb-6 ${
            highlightColor === "green" ? "text-green-700" : "text-yellow-600"
          }`}
        >
          Applications
        </h3>
        <ul className="space-y-5">
          {applications.map((app, i) => (
            <li
              key={i}
              className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-3xl">{app.icon}</span>
              <span className="text-gray-700 text-lg">{app.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.img
        src={image2}
        alt={`${title} usage`}
        className="rounded-3xl shadow-2xl object-cover max-h-[480px] w-full"
      />
    </div>
  </section>
);

const CertificationsSection = () => (
  <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">Certifications & Standards</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
      {certifications.map((cert, i) => (
        <motion.div
          key={i}
          className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-md text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          {cert}
        </motion.div>
      ))}
    </div>
  </section>
);

const StatsSection = () => (
  <section className="mt-32 bg-gradient-to-r from-green-700 to-green-600 py-20 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('/Images/pattern-leaf.svg')] bg-repeat" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 text-center relative z-10">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition"
        >
          <h3 className="text-4xl font-extrabold">{stat.number}</h3>
          <p className="text-lg mt-2 opacity-90">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="text-center py-24 px-6 bg-gradient-to-r from-green-800 to-green-600 rounded-3xl text-white shadow-2xl max-w-5xl mx-auto mt-32">
    <h3 className="text-4xl font-extrabold mb-6">Grow With Us 🌾</h3>
    <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
      Join <strong>Chetas Agrotech</strong> — advancing agriculture and renewable energy for a sustainable, circular future.
    </p>
    <Link
      to="/contact"
      className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-4 px-14 rounded-full shadow-lg text-lg transition"
    >
      Contact Us
    </Link>
  </section>
);

// =================== MAIN EXPORT ===================
const Products = () => {
  const { scrollY } = useScroll();

  return (
    <main>
      <HeroSection scrollY={scrollY} />
      <InfoSection
        title="Premium Cow Dung Fertilizers"
        highlightData={fertilizerInfo}
        applications={fertilizerApplications}
        processSteps={fertilizerProcess}
        composition={fertilizerComposition}
        image1="/Images/CowFertilizer7.png"
        image2="/Images/CowFertilizer6.png"
        highlightColor="green"
      />
      <InfoSection
        title="Advanced Ethanol Solutions"
        highlightData={ethanolInfo}
        applications={ethanolApplications}
        processSteps={ethanolProcess}
        image1="/Images/EthonolFertilizer6.jpeg"
        image2="/Images/EthonolFertilizer2.jpg"
        highlightColor="yellow"
      />
      <CertificationsSection />
      <StatsSection />
      <CTASection />
    </main>
  );
};

export default Products;
