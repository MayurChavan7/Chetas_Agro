import React, { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Leaf, Flame, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 19 || hour <= 6);
  }, []);

  // Motion setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 90 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const sunX = useTransform(smoothX, [0, window.innerWidth], [-15, 15]);
  const sunY = useTransform(smoothY, [0, window.innerHeight], [-10, 10]);

  // Decorative particles & stars
  const particles = useMemo(
    () =>
      [...Array(12)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 2,
        duration: 5 + Math.random() * 4,
      })),
    []
  );

  const stars = useMemo(
    () =>
      [...Array(25)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 1.5,
        duration: 2 + Math.random() * 2,
      })),
    []
  );

  return (
    <section
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <motion.div
        className={`absolute inset-0 transition-colors duration-700 ${
          isNight
            ? "bg-gradient-to-b from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-b from-emerald-300 via-sky-200 to-green-100"
        }`}
      />

      {/* Stars (Night only) */}
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
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: s.duration, repeat: Infinity }}
          />
        ))}

      {/* Sun / Moon */}
      <motion.div
        className="absolute rounded-full shadow-2xl"
        style={{
          top: "10%",
          left: "8%",
          width: 120,
          height: 120,
          background: isNight
            ? "radial-gradient(circle, rgba(210,210,255,0.95), rgba(120,120,200,0.7))"
            : "radial-gradient(circle, rgba(255,223,77,0.95), rgba(255,180,50,0.8))",
          filter: "blur(6px)",
          x: sunX,
          y: sunY,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Icons */}
      <div className="absolute top-36 right-10 flex flex-col gap-6 z-40">
        {[Leaf, Flame, Droplets].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-3 bg-white/30 backdrop-blur-md rounded-full shadow-md"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <Icon className="text-amber-500 w-5 h-5" />
          </motion.div>
        ))}
      </div>

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isNight ? "bg-yellow-200" : "bg-green-400"
          }`}
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            zIndex: 20,
          }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -16, 0] }}
          transition={{ duration: p.duration, repeat: Infinity }}
        />
      ))}

      {/* Headline + CTA */}
      <div className="relative z-40 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-green-500 animate-gradient">
            Rooted in Nature, Fueling the Future
          </span>
        </motion.h1>

        <motion.p
          className={`max-w-2xl mx-auto text-lg md:text-xl mb-10 ${
            isNight ? "text-yellow-100" : "text-green-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Turning waste into wealth – organic fertilizers, renewable ethanol,
          and sustainable energy that empower farmers & industries.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact"
            className="bg-amber-400 text-gray-900 font-semibold rounded-full px-10 py-4 shadow-md hover:shadow-lg hover:bg-amber-300 transition"
          >
            Get in Touch
          </Link>

          <Link
            to="/products"
            className={`border rounded-full px-10 py-4 font-semibold transition ${
              isNight
                ? "border-yellow-300 text-yellow-200 hover:bg-yellow-200 hover:text-gray-900"
                : "border-amber-600 text-green-900 hover:bg-amber-400"
            }`}
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
