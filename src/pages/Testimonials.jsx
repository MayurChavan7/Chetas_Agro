import React, { useMemo } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ramesh Patil",
    country: "India",
    review:
      "The organic fertilizer quality is excellent! My farm’s soil health has improved drastically.",
    photo: "/Images/Ramesh.jpeg",
    rating: 5,
  },
  {
    name: "Amina Yusuf",
    country: "Kenya",
    review: "Eco-friendly and effective. We now get better yields without chemicals.",
    photo: "/Images/Amina.jpeg",
    rating: 4,
  },
  {
    name: "John Smith",
    country: "UK",
    review: "Reliable export partner. Great packaging and timely delivery every time.",
    photo: "/Images/John.jpeg",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    country: "Singapore",
    review:
      "The ethanol supply is pharma-grade and consistent. Perfect for our industrial needs.",
    photo: "/Images/Sophia.jpeg",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
};

const TestimonialCard = React.memo(({ name, country, review, photo, rating }) => (
  <motion.div
    className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-md mx-auto hover:scale-105 transition-transform duration-300 will-change-transform"
    variants={itemVariants}
    whileHover={{
      y: -10,
      boxShadow: "0 25px 50px rgba(34,197,94,0.25)",
    }}
  >
    <img
      src={photo}
      alt={`Profile photo of ${name}`}
      className="rounded-full w-24 h-24 object-cover mb-5 border-4 border-green-300 shadow-md"
      loading="lazy"
    />
    <h3 className="text-xl font-semibold mb-1 text-green-800">{name}</h3>
    <p className="text-sm text-gray-500 italic mb-4 capitalize">{country}</p>
    <p className="text-gray-700 mb-6 text-center">"{review}"</p>

    {/* Rating stars */}
    <div className="flex items-center space-x-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ${idx < rating ? "text-green-500" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.538 1.118l-3.387-2.462a1 1 0 00-1.175 0l-3.387 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  </motion.div>
));

const Testimonials = () => {
  const reviewList = useMemo(() => reviews, []);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background shapes with CSS animations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-bgScaleRotate" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-bgScaleRotateReverse" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-green-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Farmers and industries worldwide trust us for eco-friendly fertilizers
          and renewable ethanol solutions.
        </motion.p>

        {/* Testimonials Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviewList.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bgScaleRotate {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(10deg); }
        }
        @keyframes bgScaleRotateReverse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(-10deg); }
        }
        .animate-bgScaleRotate { animation: bgScaleRotate 12s infinite; }
        .animate-bgScaleRotateReverse { animation: bgScaleRotateReverse 14s infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;
