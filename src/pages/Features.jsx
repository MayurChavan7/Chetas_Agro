const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Features of Our Farm</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 shadow-lg rounded-xl bg-green-50">
            <h3 className="text-xl font-semibold mb-2">Cow Care</h3>
            <p>Tailored diet for cows based on age & health, with hygiene ensured by automated dung clearing.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl bg-green-50">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p>RFID tracking and Remote Health Monitoring (RHM) to ensure proper livestock management.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl bg-green-50">
            <h3 className="text-xl font-semibold mb-2">Machinery</h3>
            <p>Finest dewatering machines maintaining international standards during production.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl bg-green-50">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p>Final product tested for compliance with international standards before export.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
