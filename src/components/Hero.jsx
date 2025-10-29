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
      [...Array(12)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 2,
        duration: 4 + Math.random() * 3,
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ========= Background Video ========= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-110 saturate-125 z-0"
      >
        <source src="/videos/chetas-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ========= Overlay Layer ========= */}
      <motion.div
        className={`absolute inset-0 z-10 transition-colors duration-700 pointer-events-none ${
          isNight
            ? "bg-gradient-to-b from-gray-900/80 via-slate-800/60 to-black/80"
            : "bg-gradient-to-b from-green-100/30 via-lime-100/20 to-white/10"
        }`}
      />

      {/* ========= Floating Glows ========= */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-green-400 z-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 bg-amber-400 z-20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ========= Stars (Night) ========= */}
      {isNight &&
        stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full z-20"
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

      {/* ========= Sun / Moon ========= */}
      <motion.div
        className="absolute rounded-full shadow-2xl z-30"
        style={{
          top: "10%",
          left: "8%",
          width: 130,
          height: 130,
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

      {/* ========= Floating Environmental Icons ========= */}
      <div className="absolute top-36 right-10 flex flex-col gap-6 z-40">
        {[Leaf, Droplets, Flame, Recycle].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-3 bg-white/40 backdrop-blur-md rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <Icon
              className={`w-5 h-5 ${
                isNight ? "text-yellow-300" : "text-green-700"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* ========= Floating Dust ========= */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isNight ? "bg-yellow-200" : "bg-green-400"
          } z-30`}
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

      {/* ========= Text & CTA ========= */}
      <div className="relative z-50 text-center px-6 sm:px-10 max-w-6xl mt-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-green-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-green-600 to-lime-500 animate-gradient">
            Powering the Future Through Nature’s Innovation
          </span>
        </motion.h1>

        <motion.p
          className={`max-w-3xl mx-auto text-lg md:text-xl mb-10 font-medium ${
            isNight ? "text-yellow-100" : "text-green-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Turning agricultural waste into clean energy and sustainable growth.  
          From <strong>organic fertilizers</strong> to <strong>renewable ethanol</strong>,  
          <span className="text-green-700 font-semibold">
            {" "}Chetas Agrotech{" "}
          </span> redefines India’s path to a circular, carbon-neutral economy.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Link
            to="/products"
            className="bg-gradient-to-r from-green-600 to-lime-400 text-white font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 transition-all"
          >
            Explore Our Solutions
          </Link>

          <Link
            to="/contact"
            className={`border-2 rounded-full px-10 py-4 font-semibold transition ${
              isNight
                ? "border-yellow-300 text-yellow-200 hover:bg-yellow-200 hover:text-gray-900"
                : "border-green-600 text-green-700 hover:bg-green-100"
            }`}
          >
            Partner With Us
          </Link>
        </div>

        {/* ========= Mission / Vision ========= */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl p-8 shadow-xl backdrop-blur-md ${
            isNight
              ? "bg-white/10 text-yellow-100 border border-yellow-200/20"
              : "bg-white/90 text-green-900 border border-green-200"
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Sprout className="text-green-600" /> Our Mission
            </h3>
            <p className="leading-relaxed">
              To accelerate India’s green transition by producing high-quality
              organic fertilizers and biofuels, empowering farmers, and creating
              sustainable energy independence through innovation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Recycle className="text-amber-500" /> Our Vision
            </h3>
            <p className="leading-relaxed">
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
