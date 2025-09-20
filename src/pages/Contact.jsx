import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Image1st.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-700 animate-text-shimmer">
            Contact Us
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl font-light drop-shadow-md"
          >
            We are here to answer your queries and provide the support you need.
          </motion.p>
        </motion.div>

        {/* Floating Background Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <ContactForm />

            {/* Additional Background Blobs */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
          </motion.div>

          {/* Contact Info + Business Hours + Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Info Card */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(34,197,94,0.3)" }}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8 rounded-3xl shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
                <span role="img" aria-label="Phone">📞</span> Contact Info
              </h3>
              <p className="mb-3 text-lg font-medium">📧 info@chetasagro.com</p>
              <p className="mb-3 text-lg font-medium">☎️ 020-25871111 / 25870370</p>
              <p className="text-lg leading-relaxed">
                📍 Chetas House, Plot No. 1, Survey No. 8+9, Shree Siddhatek Society,
                Sutarwadi, Pashan, Pune – 411021, Maharashtra, India
              </p>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(34,197,94,0.2)" }}
              className="bg-white shadow-lg rounded-3xl p-8 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <span role="img" aria-label="Clock">🕒</span> Business Hours
              </h3>
              <ul className="text-gray-700 space-y-2 text-lg font-medium">
                <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 10:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 10px 25px rgba(34,197,94,0.2)" }}
              className="rounded-3xl shadow-xl overflow-hidden transition-all duration-300 h-[280px] md:h-[320px]"
            >
              <iframe
                title="Chetas Agrotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.990503659798!2d73.78980387496779!3d18.502898267646148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbed9c0e5ed9%3A0x7b77932b07c03b17!2sPashan%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1619714736717!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
