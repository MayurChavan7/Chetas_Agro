import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "🐄 Cow Care",
    description:
      "Tailored diet for cows based on age & health, with hygiene ensured by automated dung clearing and round-the-clock supervision.",
    image: "/Image.jpg",
  },
  {
    title: "⚙️ Technology",
    description:
      "RFID tracking and Remote Health Monitoring (RHM) ensure precision livestock management, maximizing efficiency and animal well-being.",
    image: "/Image3.jpg",
  },
  {
    title: "🏭 Machinery",
    description:
      "State-of-the-art dewatering machines maintain international standards, ensuring premium quality in every production batch.",
    image: "/Image3.jpg",
  },
  {
    title: "✅ Quality",
    description:
      "Every product undergoes strict lab testing for compliance with international organic farming standards before it reaches our customers.",
    image: "/Image2.jpg",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold text-green-900 mb-4">
            Features of Our Farm
          </h2>
          <div className="h-1 w-28 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            At Chetas Agro, we combine traditional farming wisdom with modern
            technology to deliver sustainable solutions that are both
            eco-friendly and globally compliant.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="space-y-20">
          {featuresData.map(({ title, description, image }, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Image */}
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
                  loading="lazy"
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-green-800">
                  {title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
