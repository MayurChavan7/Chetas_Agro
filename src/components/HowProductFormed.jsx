import { motion } from "framer-motion";
import { Leaf, Cow, Droplets, FlaskConical, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Healthy Cow Care",
    desc: "Tailored diet for cows keeping in mind their age and health, ensuring quality raw material.",
    icon: <Cow className="w-10 h-10 text-green-700" />,
  },
  {
    id: 2,
    title: "Hygienic Collection",
    desc: "Automated dung clearing mechanism ensures cleanliness and hygiene in our farms.",
    icon: <Droplets className="w-10 h-10 text-green-700" />,
  },
  {
    id: 3,
    title: "Dewatering Process",
    desc: "We use finest machinery to dewater manure, maintaining international quality standards.",
    icon: <Leaf className="w-10 h-10 text-green-700" />,
  },
  {
    id: 4,
    title: "Quality Testing",
    desc: "Final product is tested rigorously for nutrient content & compliance with global standards.",
    icon: <FlaskConical className="w-10 h-10 text-green-700" />,
  },
  {
    id: 5,
    title: "Export & Delivery",
    desc: "Export-ready fertilizer is packed, odor-managed, and delivered to farmers worldwide.",
    icon: <Truck className="w-10 h-10 text-green-700" />,
  },
];

const HowProductFormed = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-green-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How Our Product is Formed
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowProductFormed;
