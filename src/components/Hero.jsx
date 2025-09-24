import React, { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Leaf, Flame, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slogans = [
  "🌾 From Crops to Clean Ethanol – A Greener Tomorrow",
  "🐄 Cow Dung to Biogas – Powering Rural Futures",
  "⚡ Sustainable Energy for Farmers & Industries",
  "🌍 Local Roots, Global Standards",
  "💡 Fueling Growth, Nurturing Nature",
];

const Hero = () => {
  const [isNight, setIsNight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 19 || hour <= 6);
  }, []);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 90 });

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    });
  };

  const sunX = useTransform(smoothX, [0, window.innerWidth], [-15, 15]);
  const sunY = useTransform(smoothY, [0, window.innerHeight], [-10, 10]);

  // Memoized particles & stars
  const particles = useMemo(
    () =>
      [...Array(15)].map(() => ({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size: 2 + Math.random() * 3,
        duration: 4 + Math.random() * 5,
      })),
    []
  );

  const stars = useMemo(
    () =>
      [...Array(30)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        duration: 2 + Math.random() * 2,
      })),
    []
  );

  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center"
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

      {/* Stars */}
      {isNight &&
        stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              willChange: "opacity, transform",
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: s.duration, repeat: Infinity }}
          />
        ))}

      {/* Sun / Moon */}
      <motion.div
        className="absolute rounded-full shadow-2xl will-change-transform"
        style={{
          top: "12%",
          left: "10%",
          width: "16vw",
          maxWidth: 140,
          height: "16vw",
          maxHeight: 140,
          background: isNight
            ? "radial-gradient(circle, rgba(200,200,255,0.95), rgba(120,120,200,0.7))"
            : "radial-gradient(circle, rgba(255,223,77,0.95), rgba(255,180,50,0.8))",
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
              rotate: [0, 2, -2, 0],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "bottom center", willChange: "transform" }}
          >
            <div className="w-[2px] bg-green-700 h-28 md:h-48 rounded-full shadow" />
            <div className="absolute left-2 top-1/3 w-6 h-2 bg-green-500 rounded-full" />
            <div className="absolute right-2 top-1/2 w-6 h-2 bg-green-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Cow */}
      <motion.img
        src="/Image4.png"
        alt="Cow silhouette"
        className="absolute bottom-20 left-12 w-28 md:w-40 opacity-95 z-30 will-change-transform"
        animate={{ y: [0, -12, 0], x: [0, 12, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Renewable icons */}
      <div className="absolute top-40 right-10 flex flex-col gap-6 z-40">
        {[Leaf, Flame, Droplets].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-3 bg-white/30 backdrop-blur-md rounded-full shadow-lg"
            whileHover={{ scale: 1.25 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <Icon className="text-amber-500 w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* Slogans */}
      <motion.div className="absolute top-28 w-full flex justify-center z-40 px-4 overflow-hidden">
        <motion.div
          className={`flex space-x-12 text-xl md:text-2xl font-semibold drop-shadow-lg ${
            isNight ? "text-yellow-100" : "text-green-900"
          }`}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          {slogans.map((s, i) => (
            <span key={i} className="whitespace-nowrap">
              {s}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${isNight ? "bg-yellow-200" : "bg-green-400"}`}
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            zIndex: 25,
            willChange: "transform, opacity",
          }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -18, 0], x: [0, 8, -8] }}
          transition={{ duration: p.duration, repeat: Infinity }}
        />
      ))}

      {/* Headline + CTA */}
      <div className="relative z-40 text-center px-4 max-w-6xl">
        {/* Animated Yellow-Green Headline */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 relative">
          {"Rooted in Nature, Fueling the Future".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #facc15, #22c55e, #facc15, #22c55e)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.1,
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={`max-w-2xl mx-auto text-lg md:text-2xl font-light mb-12 drop-shadow-md ${
            isNight ? "text-yellow-100" : "text-green-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          Turning waste into wealth – organic fertilizers, renewable ethanol, and sustainable energy that empowers farmers & industries.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-amber-400 text-gray-900 font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-amber-300/50 transition"
            whileHover={{ scale: 1.12 }}
          >
            Get in Touch
          </motion.button>

          <motion.button
            onClick={() => navigate("/products")}
            className={`border rounded-full px-10 py-4 font-semibold hover:text-gray-900 transition ${
              isNight
                ? "border-yellow-300 hover:bg-yellow-300 text-yellow-200"
                : "border-amber-700 hover:bg-amber-400 text-green-900"
            }`}
            whileHover={{ scale: 1.12 }}
          >
            Explore Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
