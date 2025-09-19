import ReviewCard from "../components/ReviewCard.jsx";

const Testimonials = () => {
  const reviews = [
    { name: "Ramesh Patil", country: "India", review: "The fertilizer quality is excellent! My farm’s soil health has improved drastically." },
    { name: "Amina Yusuf", country: "Kenya", review: "Eco-friendly and effective. We now get better yields without chemicals." },
    { name: "John Smith", country: "UK", review: "Reliable export partner. Great packaging and timely delivery every time." },
  ];

  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
