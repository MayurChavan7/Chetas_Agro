import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const slogans = [
  "Transforming Waste into Wealth – Cow Dung to Fertilizer",
  "From Grains to Green Energy – Renewable Ethanol",
  "Sustainable Solutions for Farmers & Industries",
  "Global Standards, Local Roots",
  "Fueling Growth, Nurturing Nature",
];

const Hero = () => {
  const headline = "Rooted in Nature, Fueling the Future".split(" ");

  // Mouse-based parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Sun parallax
  const sunX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const sunY = useTransform(mouseY, [0, window.innerHeight], [-8, 8]);

  // Raindrops
  const raindrops = [...Array(40)].map((_, i) => ({
    left: Math.random() * 100 + "%",
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 2,
    size: 1 + Math.random() * 2,
  }));

  // Floating leaves
  const leaves = [...Array(12)].map((_, i) => ({
    left: Math.random() * 100 + "%",
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 4,
    size: 6 + Math.random() * 4,
  }));

  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Desert Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/Rain.jpg')] bg-cover bg-center"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heat shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 3px, transparent 6px, transparent 9px)",
          filter: "blur(1.5px)",
          mixBlendMode: "overlay",
          animation: "heatwaveShimmer 5s linear infinite",
          zIndex: 5,
        }}
      />

      {/* Sun */}
      <motion.div
        className="absolute rounded-full shadow-2xl"
        style={{
          top: "12%",
          left: "10%",
          width: "20vw",
          maxWidth: 160,
          height: "20vw",
          maxHeight: 160,
          background:
            "radial-gradient(circle, rgba(255,223,77,0.9) 0%, rgba(255,238,89,0.7) 50%, rgba(255,204,51,0.3) 100%)",
          filter: "blur(12px)",
          zIndex: 10,
          x: sunX,
          y: sunY,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Slogan Carousel */}
      <motion.div className="absolute top-32 md:top-40 w-full flex justify-center z-40 px-2 sm:px-4">
        <motion.div className="relative w-full max-w-6xl h-16 overflow-hidden rounded-2xl border bg-green-900/90 shadow-lg">
          <motion.div
            className="flex whitespace-nowrap gap-8 sm:gap-12 text-green-100 font-bold uppercase text-sm sm:text-lg md:text-xl tracking-wide select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
            }}
          >
            {slogans.concat(slogans).map((text, i) => (
              <span key={i} className="px-4 sm:px-6">{text}</span>
            ))}
          </motion.div>

          {/* Floating 🌿 icons */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-200 text-xl sm:text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6 + i }}
              >
                🌿
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* River */}
      <motion.div className="absolute bottom-0 left-0 w-full h-28 sm:h-36 md:h-48 overflow-hidden z-20">
        <div
          className="absolute w-[200%] h-full bg-blue-400/60 rounded-t-[50%] opacity-80"
          style={{ filter: "blur(1px)", transform: "skewY(-2deg)", animation: "waveFlow 10s linear infinite" }}
        />
        <div
          className="absolute top-0 w-[180%] h-full bg-blue-500/40 rounded-t-[50%] opacity-70"
          style={{ filter: "blur(1.5px)", transform: "skewY(-1deg)", animation: "waveFlow 8s linear infinite" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent"
          style={{ mixBlendMode: "screen" }}
        />
      </motion.div>

      {/* Crops */}
      <div className="absolute bottom-28 sm:bottom-36 left-0 w-full h-1/2 flex justify-around px-4 sm:px-10 z-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              rotate: [0, 1.5, -1.5, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="w-[2px] sm:w-1 bg-green-600 h-28 sm:h-40 md:h-60 rounded-full"></div>
            <div className="absolute left-2 top-1/3 w-6 sm:w-8 h-1.5 sm:h-2 bg-green-500 rounded-full origin-left"></div>
            <div className="absolute right-2 top-1/2 w-6 sm:w-8 h-1.5 sm:h-2 bg-green-500 rounded-full origin-right"></div>
          </motion.div>
        ))}
      </div>

      {/* Rain */}
      {raindrops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-300 rounded-full opacity-70 drop-shadow-md"
          style={{
            width: `${drop.size}px`,
            height: `${drop.size * 4}px`,
            left: drop.left,
            borderRadius: "50% / 70%",
            filter: "drop-shadow(0 0 2px rgba(0,150,255,0.7))",
            zIndex: 25,
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

      {/* Floating leaves */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-400 rounded-full"
          style={{
            width: leaf.size,
            height: leaf.size,
            left: leaf.left,
            top: `${Math.random() * 50}%`,
            zIndex: 30,
            opacity: 0.8,
          }}
          animate={{
            y: ["0%", "80%", "0%"],
            rotate: [0, 360],
            x: [0, 20, -20],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Headline + CTA */}
      <div className="relative z-40 text-center px-4 sm:px-6 max-w-6xl">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 sm:mb-8"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: i * 0.12 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="max-w-xl sm:max-w-3xl mx-auto text-base sm:text-lg md:text-2xl font-light mb-8 sm:mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          From organic fertilizers to renewable ethanol — transforming waste into wealth,
          fueling industries, and empowering farmers globally.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            href="/contact"
            className="relative bg-white text-green-900 font-semibold rounded-full px-8 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-green-300/50 transition"
            whileHover={{ scale: 1.12, boxShadow: "0px 0px 40px rgba(255,255,255,0.4)" }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/products"
            className="border border-white rounded-full px-8 sm:px-10 py-3 sm:py-4 font-semibold hover:bg-white hover:text-green-900 transition"
            whileHover={{ scale: 1.12 }}
          >
            Explore Products
          </motion.a>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes heatwaveShimmer {
          0% { background-position: 0 0; }
          100% { background-position: 0 90%; }
        }
        @keyframes waveFlow {
          0% { transform: translateX(0%) skewY(-2deg); }
          50% { transform: translateX(-50%) skewY(-2deg); }
          100% { transform: translateX(0%) skewY(-2deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
