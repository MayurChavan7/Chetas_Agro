// import ReviewCard from "../components/ReviewCard.jsx";

// const Testimonials = () => {
//   const reviews = [
//     { name: "Ramesh Patil", country: "India", review: "The fertilizer quality is excellent! My farm’s soil health has improved drastically." },
//     { name: "Amina Yusuf", country: "Kenya", review: "Eco-friendly and effective. We now get better yields without chemicals." },
//     { name: "John Smith", country: "UK", review: "Reliable export partner. Great packaging and timely delivery every time." },
//   ];

//   return (
//     <section className="py-16 px-6 bg-green-50">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Testimonials;
import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard.jsx";

const reviews = [
  {
    name: "Ramesh Patil",
    country: "India",
    review: "The fertilizer quality is excellent! My farm’s soil health has improved drastically.",
    photo: "/images/review-ramesh.jpg",
    rating: 5
  },
  {
    name: "Amina Yusuf",
    country: "Kenya",
    review: "Eco-friendly and effective. We now get better yields without chemicals.",
    photo: "/images/review-amina.jpg",
    rating: 4
  },
  {
    name: "John Smith",
    country: "UK",
    review: "Reliable export partner. Great packaging and timely delivery every time.",
    photo: "/images/review-john.jpg",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-green-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What Our Customers Say
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-left max-w-md mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 35px rgb(34 197 94 / 0.3)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={r.photo}
                alt={`${r.name} profile`}
                className="rounded-full w-20 h-20 object-cover mb-5 border-4 border-green-300 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-1 text-green-800">{r.name}</h3>
              <p className="text-sm text-gray-500 italic mb-4 capitalize">{r.country}</p>
              <p className="text-gray-700 mb-6">"{r.review}"</p>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) =>
                    idx < r.rating ? (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.538 1.118l-3.387-2.462a1 1 0 00-1.175 0l-3.387 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ) : (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.538 1.118l-3.387-2.462a1 1 0 00-1.175 0l-3.387 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    )
                  )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
