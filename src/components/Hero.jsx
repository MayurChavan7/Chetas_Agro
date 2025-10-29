import React, { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Leaf, Droplets, Sprout, Recycle, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 19 || hour <= 6);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 90 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const sunX = useTransform(smoothX, [0, window.innerWidth], [-20, 20]);
  const sunY = useTransform(smoothY, [0, window.innerHeight], [-10, 10]);

  const particles = useMemo(
    () =>
      [...Array(10)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 2,
        duration: 4 + Math.random() * 3,
      })),
    []
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110 saturate-120 z-0"
      >
        <source src="/videos/chetas-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫 Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>

      {/* 🌟 Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300/60 blur-[1px] z-20"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
          }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -20, 0] }}
          transition={{ duration: p.duration, repeat: Infinity }}
        />
      ))}

      {/* 🌿 Content */}
      <div className="relative z-30 text-center px-6 sm:px-10 max-w-5xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-lime-400 to-amber-300 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powering the Future Through Nature’s Innovation
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-10 text-gray-100 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Turning agricultural waste into clean energy and sustainable growth.  
          From <strong className="text-lime-300 font-semibold">organic fertilizers</strong> 
          to <strong className="text-amber-300 font-semibold">renewable ethanol</strong>,  
          <span className="text-green-300 font-semibold"> Chetas Agrotech </span>  
          redefines India’s path to a circular, carbon-neutral economy.
        </motion.p>

        {/* ✨ CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link
            to="/products"
            className="bg-gradient-to-r from-green-600 to-lime-400 text-white font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Solutions
          </Link>

          <Link
            to="/contact"
            className="border-2 border-lime-400 text-lime-300 rounded-full px-10 py-4 font-semibold hover:bg-lime-400 hover:text-gray-900 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>

        {/* 🌍 Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl p-8 shadow-xl bg-white/10 backdrop-blur-lg border border-lime-200/20 text-gray-100">
          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Sprout className="text-lime-400" /> Our Mission
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              To accelerate India’s green transition by producing high-quality
              organic fertilizers and biofuels, empowering farmers, and creating
              sustainable energy independence through innovation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Recycle className="text-amber-300" /> Our Vision
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              To become a global leader in circular agro-industries — where waste
              becomes wealth, renewable energy fuels growth, and sustainability
              powers every generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
