import Hero from "../components/Hero.jsx";
import Testimonials from "./Testimonials.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          To become a global leader in sustainable agricultural inputs by 
          providing organic, eco-conscious alternatives to chemical fertilizers.
        </p>
      </section>
      <Testimonials />
    </div>
  );
};
export default Home;
