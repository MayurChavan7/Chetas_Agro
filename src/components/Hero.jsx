// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Leaf, Flame, Droplets } from "lucide-react";

// const slogans = [
//   "🌾 From Crops to Clean Ethanol – A Greener Tomorrow",
//   "🐄 Cow Dung to Biogas – Powering Rural Futures",
//   "⚡ Sustainable Energy for Farmers & Industries",
//   "🌍 Local Roots, Global Standards",
//   "💡 Fueling Growth, Nurturing Nature",
// ];

// const Hero = () => {
//   const [isNight, setIsNight] = useState(false);

//   useEffect(() => {
//     const hour = new Date().getHours();
//     setIsNight(hour >= 19 || hour <= 6);
//   }, []);

//   // Parallax
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const handleMouseMove = (e) => {
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   };
//   const sunX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
//   const sunY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

//   // Floating particles
//   const particles = [...Array(20)].map(() => ({
//     left: Math.random() * 100 + "%",
//     top: Math.random() * 100 + "%",
//     size: 2 + Math.random() * 3,
//     duration: 4 + Math.random() * 5,
//   }));

//   return (
//     <section
//       className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-white custom-scroll"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background Sky */}
//       <motion.div
//         className={`absolute inset-0 transition-all duration-700 ${
//           isNight
//             ? "bg-gradient-to-b from-gray-900 via-black to-gray-800"
//             : "bg-gradient-to-b from-emerald-300 via-sky-200 to-green-100"
//         }`}
//       />

//       {/* Stars at night */}
//       {isNight &&
//         Array.from({ length: 40 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full"
//             style={{
//               width: "2px",
//               height: "2px",
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{ opacity: [0.2, 1, 0.2] }}
//             transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
//           />
//         ))}

//       {/* Sun / Moon */}
//       <motion.div
//         className="absolute rounded-full shadow-2xl"
//         style={{
//           top: "12%",
//           left: "10%",
//           width: "16vw",
//           maxWidth: 140,
//           height: "16vw",
//           maxHeight: 140,
//           background: isNight
//             ? "radial-gradient(circle, rgba(200,200,255,0.9), rgba(120,120,200,0.6))"
//             : "radial-gradient(circle, rgba(255,223,77,0.9), rgba(255,180,50,0.7))",
//           filter: "blur(6px)",
//           x: sunX,
//           y: sunY,
//         }}
//         animate={{ rotate: [0, 360] }}
//         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Fields */}
//       <div className="absolute bottom-24 left-0 w-full flex justify-around px-6 z-30">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="relative flex flex-col items-center"
//             animate={{
//               rotate: [0, 1.5, -1.5, 0],
//               y: [0, -4, 0],
//             }}
//             transition={{
//               duration: 4,
//               delay: i * 0.2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             style={{ transformOrigin: "bottom center" }}
//           >
//             <div className="w-[2px] bg-green-600 h-28 md:h-48 rounded-full"></div>
//             <div className="absolute left-2 top-1/3 w-6 h-2 bg-green-500 rounded-full"></div>
//             <div className="absolute right-2 top-1/2 w-6 h-2 bg-green-500 rounded-full"></div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Cow silhouettes (floating animation) */}
//       <motion.img
//         src="/cow.png"
//         alt="Cow silhouette"
//         className="absolute bottom-20 left-12 w-28 md:w-40 opacity-90 z-30"
//         animate={{ y: [0, -10, 0], x: [0, 10, -5] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Ethanol / Renewable icons */}
//       <div className="absolute top-40 right-10 flex flex-col gap-6 z-40">
//         {[Leaf, Flame, Droplets].map((Icon, i) => (
//           <motion.div
//             key={i}
//             className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg"
//             whileHover={{ scale: 1.2 }}
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 3 + i, repeat: Infinity }}
//           >
//             <Icon className="text-yellow-200 w-6 h-6" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Scrolling Slogans */}
//       <motion.div className="absolute top-28 w-full flex justify-center z-40 px-4 overflow-hidden">
//         <motion.div
//           className="flex space-x-10 text-xl md:text-2xl font-semibold text-green-700"
//           animate={{ x: ["100%", "-100%"] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//         >
//           {slogans.map((s, i) => (
//             <span key={i} className="whitespace-nowrap">{s}</span>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Floating particles */}
//       {particles.map((p, i) => (
//         <motion.div
//           key={i}
//           className={`absolute rounded-full ${isNight ? "bg-yellow-200" : "bg-green-300"}`}
//           style={{ width: p.size, height: p.size, top: p.top, left: p.left, zIndex: 25 }}
//           animate={{
//             opacity: [0, 1, 0],
//             y: [0, -15, 0],
//             x: [0, 10, -10],
//           }}
//           transition={{ duration: p.duration, repeat: Infinity }}
//         />
//       ))}

//       {/* Headline + CTA */}
//       <div className="relative z-40 text-center px-4 max-w-6xl">
//         <motion.h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8">
//           {"Rooted in Nature, Fueling the Future".split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-200 to-green-100"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: i * 0.15 }}
//             >
//               {word}&nbsp;
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.p
//           className="max-w-2xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 1 }}
//         >
//           Turning waste into wealth – organic fertilizers, renewable ethanol,
//           and sustainable energy that empowers farmers & industries.
//         </motion.p>

//         <div className="flex flex-col sm:flex-row justify-center gap-6">
//           <motion.a
//             href="/contact"
//             className="bg-white text-green-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-green-300/50 transition"
//             whileHover={{ scale: 1.12 }}
//           >
//             Get in Touch
//           </motion.a>
//           <motion.a
//             href="/products"
//             className="border border-white rounded-full px-10 py-4 font-semibold hover:bg-white hover:text-green-900 transition"
//             whileHover={{ scale: 1.12 }}
//           >
//             Explore Products
//           </motion.a>
//         </div>
//       </div>

//       {/* Custom Scrollbar */}
//       <style jsx global>{`
//         ::-webkit-scrollbar {
//           width: 10px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #0f172a;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #22c55e, #fde047);
//           border-radius: 6px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Leaf, Flame, Droplets } from "lucide-react";

const slogans = [
  "🌾 From Crops to Clean Ethanol – A Greener Tomorrow",
  "🐄 Cow Dung to Biogas – Powering Rural Futures",
  "⚡ Sustainable Energy for Farmers & Industries",
  "🌍 Local Roots, Global Standards",
  "💡 Fueling Growth, Nurturing Nature",
];

const Hero = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 19 || hour <= 6);
  }, []);

  // Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  const sunX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const sunY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  // Floating particles
  const particles = [...Array(20)].map(() => ({
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    size: 2 + Math.random() * 3,
    duration: 4 + Math.random() * 5,
  }));

  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-white custom-scroll"
      onMouseMove={handleMouseMove}
    >
      {/* Background Sky */}
      <motion.div
        className={`absolute inset-0 transition-all duration-700 ${
          isNight
            ? "bg-gradient-to-b from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-b from-emerald-300 via-sky-200 to-green-100"
        }`}
      />

      {/* Stars at night */}
      {isNight &&
        Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}

      {/* Sun / Moon */}
      <motion.div
        className="absolute rounded-full shadow-2xl"
        style={{
          top: "12%",
          left: "10%",
          width: "16vw",
          maxWidth: 140,
          height: "16vw",
          maxHeight: 140,
          background: isNight
            ? "radial-gradient(circle, rgba(200,200,255,0.9), rgba(120,120,200,0.6))"
            : "radial-gradient(circle, rgba(255,223,77,0.9), rgba(255,180,50,0.7))",
          filter: "blur(6px)",
          x: sunX,
          y: sunY,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Fields */}
      <div className="absolute bottom-24 left-0 w-full flex justify-around px-6 z-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center"
            animate={{
              rotate: [0, 1.5, -1.5, 0],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="w-[2px] bg-green-600 h-28 md:h-48 rounded-full"></div>
            <div className="absolute left-2 top-1/3 w-6 h-2 bg-green-500 rounded-full"></div>
            <div className="absolute right-2 top-1/2 w-6 h-2 bg-green-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Cow silhouettes (floating animation) */}
      <motion.img
        src="/Image4.png"
        alt="Cow silhouette"
        className="absolute bottom-20 left-12 w-28 md:w-40 opacity-90 z-30"
        animate={{ y: [0, -10, 0], x: [0, 10, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ethanol / Renewable icons */}
      <div className="absolute top-40 right-10 flex flex-col gap-6 z-40">
        {[Leaf, Flame, Droplets].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <Icon className="text-amber-300 w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* Scrolling Slogans */}
      <motion.div className="absolute top-28 w-full flex justify-center z-40 px-4 overflow-hidden">
        <motion.div
          className="flex space-x-10 text-xl md:text-2xl font-semibold text-amber-100"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {slogans.map((s, i) => (
            <span key={i} className="whitespace-nowrap">{s}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${isNight ? "bg-yellow-200" : "bg-green-300"}`}
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, zIndex: 25 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -15, 0],
            x: [0, 10, -10],
          }}
          transition={{ duration: p.duration, repeat: Infinity }}
        />
      ))}

      {/* Headline + CTA */}
      <div className="relative z-40 text-center px-4 max-w-6xl">
        <motion.h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          {"Rooted in Nature, Fueling the Future".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-lg text-amber-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Turning waste into wealth – organic fertilizers, renewable ethanol,
          and sustainable energy that empowers farmers & industries.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="/contact"
            className="bg-amber-400 text-gray-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-amber-300/50 transition"
            whileHover={{ scale: 1.12 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/products"
            className="border border-amber-400 rounded-full px-10 py-4 font-semibold hover:bg-amber-400 hover:text-gray-900 transition"
            whileHover={{ scale: 1.12 }}
          >
            Explore Products
          </motion.a>
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22c55e, #fde047);
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
