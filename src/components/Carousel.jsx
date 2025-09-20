import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import product1 from "../assets/products/fertilizer1.jpg";
import product2 from "../assets/products/fertilizer2.jpg";
import product3 from "../assets/products/fertilizer3.jpg";

const images = [product1, product2, product3];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src='/Image3.jpg'
          alt={`Product Image ${imageIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="w-full h-80 object-cover"
        />
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-3 shadow-lg focus:outline-none"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 rounded-full p-3 shadow-lg focus:outline-none"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
