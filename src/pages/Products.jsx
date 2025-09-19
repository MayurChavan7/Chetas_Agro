import Carousel from "../components/Carousel.jsx";
// import HowProductFormed from "../components/HowProductFormed.jsx";

const Products = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <p className="mb-10 max-w-2xl mx-auto">
        We specialize in processing and exporting dewatered cow dung — a nutrient-rich, 
        eco-friendly fertilizer ideal for organic farming, horticulture, and soil rehabilitation.
      </p>
      <Carousel />
          {/* <HowProductFormed /> */}
    </section>
  );
};
export default Products;
