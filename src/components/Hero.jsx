// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const headline = "Rooted in Nature, Fueling the Future".split(" ");
  
//   // Generate raindrops
//   const raindrops = [...Array(30)].map((_, i) => ({
//     left: Math.random() * 100 + "%",
//     delay: Math.random() * 5,
//     duration: 2 + Math.random() * 2,
//     size: 1 + Math.random() * 2,
//   }));

//   return (
//     <section className="relative overflow-hidden text-white h-screen flex items-center justify-center">
      
//       {/* 🌵 Desert Background */}
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: "url('/Desert.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         animate={{
//           scale: [1, 1.05, 1],
//           backgroundPosition: ["center 0px", "center 20px", "center 0px"],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* 🔥 Heatwave shimmer effect */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `repeating-linear-gradient(
//             0deg,
//             rgba(255,255,255,0.04) 0px,
//             rgba(255,255,255,0.04) 2px,
//             transparent 4px,
//             transparent 6px
//           )`,
//           filter: "blur(1px)",
//           mixBlendMode: "overlay",
//           animation: "shimmer 6s linear infinite",
//         }}
//       />

//       {/* 🌞 Animated Sun */}
//       <motion.div
//         className="absolute w-40 h-40 rounded-full bg-yellow-400/80 shadow-2xl shadow-yellow-500"
//         initial={{ y: 300, x: -200, opacity: 0 }}
//         animate={{ y: [-100, -150, -120], x: [0, 200, 400], opacity: [0, 1, 1] }}
//         transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
//         style={{ top: "10%", left: "10%", filter: "blur(2px)" }}
//       />

//       {/* 🌱 Growing Crops */}
//       <div className="absolute bottom-0 left-0 w-full h-1/2 flex justify-around px-10">
//         {[...Array(7)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="relative flex flex-col items-center"
//             initial={{ scaleY: 0 }}
//             animate={{ scaleY: 1, rotate: [0, -2, 2, -1, 1, 0] }}
//             transition={{ duration: 3, delay: i * 0.5, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
//             style={{ transformOrigin: "bottom center" }}
//           >
//             <div className="w-1 bg-green-600 h-40 mx-auto rounded-full"></div>
//             <motion.div className="absolute left-2 top-1/3 w-8 h-2 bg-green-500 rounded-full origin-left"
//               initial={{ scaleX: 0 }} animate={{ scaleX: 1, rotate: -30 }} transition={{ delay: i * 0.5 + 1, duration: 1 }} />
//             <motion.div className="absolute right-2 top-1/2 w-8 h-2 bg-green-500 rounded-full origin-right"
//               initial={{ scaleX: 0 }} animate={{ scaleX: 1, rotate: 30 }} transition={{ delay: i * 0.5 + 1.5, duration: 1 }} />
//           </motion.div>
//         ))}
//       </div>

//       {/* 🌧 Raindrops */}
//       {raindrops.map((drop, i) => (
//         <motion.div
//           key={i}
//           className="absolute bg-blue-200 rounded-full"
//           style={{ width: drop.size + "px", height: drop.size * 4 + "px", left: drop.left }}
//           initial={{ y: -50, opacity: 0.5 }}
//           animate={{ y: "100vh", opacity: 0.8 }}
//           transition={{
//             duration: drop.duration,
//             delay: drop.delay,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}

//       {/* Gradient overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

//       {/* Headline + Content */}
//       <div className="relative z-10 text-center px-6 max-w-6xl">
//         <motion.h1
//           className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8"
//           initial="hidden"
//           animate="visible"
//           variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
//         >
//           {headline.map((word, i) => (
//             <motion.span
//               key={i}
//               className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
//               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//               transition={{ duration: 0.8 }}
//             >
//               {word}&nbsp;
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.p className="max-w-3xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-lg"
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
//           From organic fertilizers to renewable ethanol — transforming waste into wealth, fueling industries, and empowering farmers globally.
//         </motion.p>

//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           <motion.a href="/contact" className="relative bg-white text-green-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-green-300/50 transition"
//             whileHover={{ scale: 1.1 }}>
//             Get in Touch
//           </motion.a>
//           <motion.a href="/products" className="border border-white rounded-full px-10 py-4 font-semibold hover:bg-white hover:text-green-900 transition"
//             whileHover={{ scale: 1.1 }}>
//             Explore Products
//           </motion.a>
//         </div>
//       </div>

//       {/* Keyframes for shimmer */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { background-position: 0 0; }
//           100% { background-position: 0 100%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const headline = "Rooted in Nature, Fueling the Future".split(" ");

  // Generate raindrops
  const raindrops = [...Array(30)].map((_, i) => ({
    left: Math.random() * 100 + "%",
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 2,
    size: 1 + Math.random() * 2,
  }));

  return (
    <section className="relative overflow-hidden text-white h-screen flex items-center justify-center">

      {/* 🌵 Desert Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Desert.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1, 1.05, 1],
          backgroundPosition: ["center 0px", "center 20px", "center 0px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🔥 More realistic Heatwave shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.05) 0px,
            rgba(255,255,255,0.05) 3px,
            transparent 6px,
            transparent 9px
          )`,
          filter: "blur(1.5px)",
          mixBlendMode: "overlay",
          animation: "heatwaveShimmer 5s linear infinite",
          zIndex: 5,
        }}
      />

      {/* 🌞 Realistic Animated Sun */}
      <motion.div
        className="absolute rounded-full shadow-2xl shadow-yellow-500"
        initial={{ y: 300, x: -200, opacity: 0 }}
        animate={{
          y: [-100, -160, -130],
          x: [0, 220, 450],
          opacity: [0, 1, 1],
          scale: [1, 1.15, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "10%",
          width: "160px",
          height: "160px",
          background: `radial-gradient(circle, 
            rgba(255, 221, 89, 0.9) 0%, 
            rgba(255, 238, 89, 0.7) 40%, 
            rgba(255, 204, 51, 0.3) 80%, 
            transparent 100%)`,
          filter: "blur(10px)",
          zIndex: 10,
        }}
      >
        {/* Sun rays using pseudo elements with CSS below */}
      </motion.div>

      {/* 🌱 Growing Crops */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 flex justify-around px-10 z-20">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, rotate: [0, -2, 2, -1, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="w-1 bg-green-600 h-40 mx-auto rounded-full"></div>
            <motion.div
              className="absolute left-2 top-1/3 w-8 h-2 bg-green-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1, rotate: -30 }}
              transition={{ delay: i * 0.5 + 1, duration: 1 }}
            />
            <motion.div
              className="absolute right-2 top-1/2 w-8 h-2 bg-green-500 rounded-full origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1, rotate: 30 }}
              transition={{ delay: i * 0.5 + 1.5, duration: 1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* 🌧 Realistic Raindrops */}
      {raindrops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-300 rounded-full opacity-70 drop-shadow-md"
          style={{
            width: `${drop.size}px`,
            height: `${drop.size * 4}px`,
            left: drop.left,
            borderRadius: "50% / 70%", // elliptical shape for raindrop shape
            filter: "drop-shadow(0 0 2px rgba(0, 150, 255, 0.7))",
          }}
          initial={{ y: -60, opacity: 0.4 }}
          animate={{ y: "100vh", opacity: 0.9 }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-30"></div>

      {/* Headline + Content */}
      <div className="relative z-40 text-center px-6 max-w-6xl">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          From organic fertilizers to renewable ethanol — transforming waste into wealth, fueling industries, and empowering farmers globally.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a
            href="/contact"
            className="relative bg-white text-green-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-green-300/50 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/products"
            className="border border-white rounded-full px-10 py-4 font-semibold hover:bg-white hover:text-green-900 transition"
            whileHover={{ scale: 1.1 }}
          >
            Explore Products
          </motion.a>
        </div>
      </div>

      {/* Keyframes for shimmer and heatwave */}
      <style jsx>{`
        @keyframes heatwaveShimmer {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 90%;
          }
        }
        /* Sun rays using before and after pseudo elements */
        div[style*="radial-gradient"]::before,
        div[style*="radial-gradient"]::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }
        div[style*="radial-gradient"]::before {
          box-shadow:
            0 0 20px 5px rgba(255, 223, 77, 0.6),
            inset 0 0 40px 10px rgba(255, 238, 89, 0.8);
          animation: sunPulse 6s ease-in-out infinite;
        }
        div[style*="radial-gradient"]::after {
          box-shadow:
            0 0 30px 15px rgba(255, 204, 51, 0.4);
          animation: sunRotate 12s linear infinite;
        }
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes sunRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
