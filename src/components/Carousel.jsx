import { useState } from "react";
import product1 from "../assets/products/fertilizer1.jpg";
import product2 from "../assets/products/fertilizer2.jpg";
import product3 from "../assets/products/fertilizer3.jpg";

const images = [product1, product2, product3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={images[current]}
        alt="Product"
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow hover:bg-gray-100">‹</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow hover:bg-gray-100">›</button>
    </div>
  );
};
export default Carousel;
