import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

// Motion variants
const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ContactForm = () => {
  return (
    <motion.form
      className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-6 border border-gray-200 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      {/* Floating gradient background circles for style */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <motion.h2
        className="text-4xl font-bold text-center text-green-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Name */}
      <motion.div className="relative" variants={inputVariants}>
        <User className="absolute left-3 top-5 text-green-600 transition-transform group-focus-within:scale-110" size={20} />
        <input
          type="text"
          required
          placeholder=" "
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Name
        </label>
      </motion.div>

      {/* Email */}
      <motion.div className="relative" variants={inputVariants}>
        <Mail className="absolute left-3 top-5 text-green-600 transition-transform group-focus-within:scale-110" size={20} />
        <input
          type="email"
          required
          placeholder=" "
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Email
        </label>
      </motion.div>

      {/* Message */}
      <motion.div className="relative" variants={inputVariants}>
        <MessageSquare className="absolute left-3 top-5 text-green-600 transition-transform group-focus-within:scale-110" size={20} />
        <textarea
          rows="5"
          required
          placeholder=" "
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
        ></textarea>
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Message
        </label>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34,197,94,0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-green-800 transition"
      >
        Send Message 🚀
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
