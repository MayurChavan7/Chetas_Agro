import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[55vh] w-full flex items-center justify-center overflow-hidden">
        {/* Faint Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            background: "linear-gradient(135deg, rgba(74,222,128,0.3), rgba(34,197,94,0.3), rgba(22,163,74,0.3), rgba(74,222,128,0.3))",
            backgroundSize: "400% 400%",
            opacity: 0.4,
          }}
        ></motion.div>

        {/* Subtle Floating Blobs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + Math.random() * 60}px`,
              height: `${60 + Math.random() * 60}px`,
              backgroundColor: `rgba(34,197,94,${0.1 + Math.random() * 0.2})`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [0, 15 + Math.random() * 20, 0],
              x: [0, 15 + Math.random() * 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        ))}

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6 max-w-3xl z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-700 animate-text-shimmer">
            Contact Us
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-green-900 sm:text-lg md:text-xl font-medium drop-shadow-md"
          >
            We're here to support you. Reach out with your questions, partnership ideas, or feedback.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Whether you have a question, want to collaborate, or need support, please fill out the form below. We look forward to hearing from you!
            </p>
            <ContactForm />

            {/* Subtle Blobs */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
          </motion.div>

          {/* Contact Info + Business Hours + Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >
            {/* Contact Info */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(34,197,94,0.3)" }}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-300">
                📞 Contact Information
              </h3>
              <p className="mb-2 sm:mb-3 text-sm sm:text-base font-medium text-green-100">📧 Email: info@chetasagro.com</p>
              <p className="mb-2 sm:mb-3 text-sm sm:text-base font-medium text-green-100">☎️ Phone: 020-25871111 / 25870370</p>
              {/* <p className="mb-2 sm:mb-3 text-sm sm:text-base font-medium text-green-100">💬 WhatsApp: +91 9876543210</p> */}
              <p className="text-sm sm:text-base leading-relaxed text-green-200">
                📍 Registered Office: Chetas House, Plot No. 1, Survey No. 8+9, Sutarwadi, Pashan, Pune – 411021, Maharashtra, India
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-green-200">
                🏭 Manufacturing Plant: Gat No. 123, Agrotech Industrial Park, Ahmednagar, Maharashtra
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(34,197,94,0.2)" }}
              className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-green-700 flex items-center gap-2">
                🕒 Business Hours
              </h3>
              <ul className="text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base font-medium">
                <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 10:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 10px 25px rgba(34,197,94,0.2)" }}
              className="rounded-3xl shadow-xl overflow-hidden transition-all duration-300 h-64 sm:h-80 md:h-96"
            >
              <iframe
                title="Chetas Agrotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.990503659798!2d73.78980387496779!3d18.502898267646148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbed9c0e5ed9%3A0x7b77932b07c03b17!2sPashan%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1619714736717!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-10 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[{
              q: "Do you export internationally?",
              a: "Yes, we export fertilizers and ethanol across Asia, Africa, Europe, and the Middle East, ensuring global quality standards."
            },{
              q: "Are your fertilizers certified organic?",
              a: "Absolutely. Each batch undergoes strict testing and certification as per international organic farming standards."
            },{
              q: "Can I request custom packaging?",
              a: "Yes, we offer flexible packaging and private labeling tailored to meet global client requirements."
            }].map((faq, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-md cursor-pointer transition"
              >
                <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-1">{faq.q}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <motion.section
        className="py-12 sm:py-16 bg-gradient-to-r from-green-800 to-green-600 text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
          Partner with Chetas Agrotech
        </h2>
        <p className="text-yellow-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
          Join us on the journey to build a sustainable future with premium organic fertilizers and renewable ethanol solutions.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition"
        >
          Get in Touch Today
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Contact;