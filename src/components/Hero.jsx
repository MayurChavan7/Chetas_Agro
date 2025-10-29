import React, { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Leaf, Droplets, Recycle, Flame } from "lucide-react";
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center"
      onMouseMove={handleMouseMove}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-95 contrast-110 saturate-110 z-0"
      >
        <source src="/videos/chetas-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫 Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 via-yellow-50/30 to-white/20 z-10"></div>

      {/* 🌿 Floating Icons */}
      <div className="absolute top-28 right-5 sm:right-10 flex flex-col gap-4 z-20">
        {[Leaf, Droplets, Flame, Recycle].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-2 sm:p-3 bg-white/50 backdrop-blur-md rounded-full shadow-md border border-green-100"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <Icon
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                isNight ? "text-yellow-300" : "text-green-700"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* 🌟 Floating Dust */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300/70 blur-[1px] z-20"
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

      {/* 🌿 Hero Text Content */}
      <div className="relative z-30 px-6 sm:px-10 max-w-5xl mt-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-green-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-green-700 to-lime-600 animate-gradient">
            Powering the Future Through Nature’s Innovation
          </span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-10 text-green-900 leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Turning agricultural waste into clean energy and sustainable growth.  
          From <strong className="text-green-700">organic fertilizers</strong> to  
          <strong className="text-yellow-600"> renewable ethanol</strong>,  
          <span className="text-green-800 font-semibold"> Chetas Agrotech </span>  
          redefines India’s journey toward a circular, carbon-neutral economy.
        </motion.p>

        {/* ✨ CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
          <Link
            to="/products"
            className="bg-gradient-to-r from-green-700 to-lime-500 text-white font-semibold rounded-full px-8 sm:px-10 py-3 sm:py-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Solutions
          </Link>

          <Link
            to="/contact"
            className="border-2 border-green-600 text-green-800 rounded-full px-8 sm:px-10 py-3 sm:py-4 font-semibold hover:bg-green-100 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>

        {/* 🌍 Core Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-green-900 mt-8">
          {[
            {
              title: "Sustainability",
              desc: "Every step we take minimizes waste and nurtures the planet.",
            },
            {
              title: "Innovation",
              desc: "We combine smart technology with agricultural expertise.",
            },
            {
              title: "Empowerment",
              desc: "Supporting farmers and communities through green growth.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="bg-white/90 rounded-2xl p-6 backdrop-blur-md border border-green-200 shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i }}
            >
              <h4 className="text-xl font-bold mb-2 text-green-800">
                {value.title}
              </h4>
              <p className="text-sm text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
