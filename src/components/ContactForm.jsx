import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.form
      className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        Get in Touch
      </h2>

      {/* Name */}
      <div className="relative">
        <User className="absolute left-3 top-4 text-green-600" size={20} />
        <input
          type="text"
          required
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-4 text-green-600" size={20} />
        <input
          type="email"
          required
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition"
        />
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Email
        </label>
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-4 text-green-600" size={20} />
        <textarea
          rows="5"
          required
          className="peer w-full pl-10 pr-3 pt-5 pb-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
        ></textarea>
        <label className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700">
          Your Message
        </label>
      </div>

      {/* Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-800 transition"
      >
        Send Message 🚀
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
