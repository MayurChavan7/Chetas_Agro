import { motion } from "framer-motion";
import {
  Leaf,
  Cow,
  Droplets,
  FlaskConical,
  Truck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Healthy Cow Care",
    desc: "Tailored diet plans for cows based on age and health ensure high-quality organic input from the very start.",
    icon: <Cow className="w-12 h-12 text-green-700 drop-shadow-md" />,
  },
  {
    id: 2,
    title: "Hygienic Collection",
    desc: "Automated dung clearing systems maintain clean, sanitized environments across all our farms.",
    icon: <Droplets className="w-12 h-12 text-green-700 drop-shadow-md" />,
  },
  {
    id: 3,
    title: "Dewatering Process",
    desc: "Advanced dewatering technology preserves vital nutrients while meeting global hygiene benchmarks.",
    icon: <Leaf className="w-12 h-12 text-green-700 drop-shadow-md" />,
  },
  {
    id: 4,
    title: "Quality Testing",
    desc: "Every batch is rigorously tested for moisture, organic matter, and mineral content before export.",
    icon: <FlaskConical className="w-12 h-12 text-green-700 drop-shadow-md" />,
  },
  {
    id: 5,
    title: "Export & Delivery",
    desc: "Eco-friendly packaging ensures the final product reaches farmers worldwide — fresh, odor-free, and nutrient-rich.",
    icon: <Truck className="w-12 h-12 text-green-700 drop-shadow-md" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HowProductFormed = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-green-100 to-green-50 relative overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-300 rounded-full blur-3xl opacity-25"></div>

      <div className="max-w-7xl mx-auto text-center px-6 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How Our Product is Formed
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-700 mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From farm to field, every step of our process ensures purity,
          sustainability, and excellence — turning natural resources into
          globally trusted organic fertilizer.
        </motion.p>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-8 flex flex-col items-center text-center"
            >
              <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full mb-5 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>

              {/* Step number circle */}
              <div className="absolute -top-5 -right-5 bg-yellow-400 text-green-900 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                {step.id}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowProductFormed;
