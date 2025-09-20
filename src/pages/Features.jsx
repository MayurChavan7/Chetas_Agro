import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: 'Cow Care',
    description: 'Tailored diet for cows based on age & health, with hygiene ensured by automated dung clearing.',
    image: '/Image.jpg',
  },
  {
    title: 'Technology',
    description: 'RFID tracking and Remote Health Monitoring (RHM) to ensure proper livestock management.',
    image: '/Image3.jpg',
  },
  {
    title: 'Machinery',
    description: 'Finest dewatering machines maintaining international standards during production.',
    image: '/Image3.jpg',
  },
  {
    title: 'Quality',
    description: 'Final product tested for compliance with international standards before export.',
    image: '/Image2.jpg',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-green-900">
          Features of Our Farm
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {featuresData.map(({ title, description, image }, index) => (
            <motion.div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-green-50 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 30px rgba(16,185,129,0.3)' }}
            >
              <img
                src={image}
                alt={title}
                className="w-full md:w-40 h-32 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-green-800">{title}</h3>
                <p className="text-gray-700 max-w-md">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
