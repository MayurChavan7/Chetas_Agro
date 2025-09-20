// import { motion } from "framer-motion";
// import ContactForm from "../components/ContactForm";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[50vh]"
//         style={{ backgroundImage: "url('/Image1st.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white px-4"
//           >
//             {/* <img
//               src="/Logo.jpg"
//               alt="Logo"
//               className="mx-auto mb-6 w-20 h-20"
//             /> */}
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//             <p className="text-lg max-w-2xl mx-auto">
//               We are here to answer your queries and provide the support you
//               need.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 md:px-12">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
//             >
//               Hit Us Up
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-gray-600 max-w-2xl mx-auto"
//             >
//               Get in touch with us to share your feedback, inquiries, or
//               questions. Our team is always looking forward to hearing from you
//               and helping you in every possible way.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//             {/* Left: Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <ContactForm />
//             </motion.div>

//             {/* Right: Contact Info + Business Hours + Map */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               {/* Contact Info */}
//               <div className="bg-green-700 text-white p-6 rounded-2xl shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">📞 Contact Info</h3>
//                 <p className="mb-2">📧 info@chetasagro.com</p>
//                 <p className="mb-2">☎️ 020-25871111 / 25870370</p>
//                 <p>
//                   📍 Chetas House, Plot No. 1, Survey No. 8+9, Shree Siddhatek
//                   Society, Sutarwadi, Pashan, Pune – 411021, Maharashtra, India
//                 </p>
//               </div>

//               {/* Business Hours */}
//               <div className="bg-white shadow-md rounded-2xl p-6">
//                 <h3 className="text-lg font-bold mb-3 text-green-700">
//                   🕒 Business Hours
//                 </h3>
//                 <ul className="text-gray-700 space-y-1">
//                   <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
//                   <li>Saturday: 10:00 AM – 2:00 PM</li>
//                   <li>Sunday: Closed</li>
//                 </ul>
//               </div>

//               {/* Google Map */}
//               <div className="overflow-hidden rounded-2xl shadow-md">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] md:h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/Image1st.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-4 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-md">
            We are here to answer your queries and provide the support you need.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info + Business Hours + Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Contact Info */}
            <div className="bg-green-700 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <span role="img" aria-label="Phone">📞</span> Contact Info
              </h3>
              <p className="mb-3 text-lg font-medium">📧 info@chetasagro.com</p>
              <p className="mb-3 text-lg font-medium">☎️ 020-25871111 / 25870370</p>
              <p className="text-lg leading-relaxed">
                📍 Chetas House, Plot No. 1, Survey No. 8+9, Shree Siddhatek Society,
                Sutarwadi, Pashan, Pune – 411021, Maharashtra, India
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white shadow-md rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <span role="img" aria-label="Clock">🕒</span> Business Hours
              </h3>
              <ul className="text-gray-700 space-y-2 text-lg font-semibold">
                <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 10:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl shadow-lg overflow-hidden h-[280px] md:h-[320px]">
              <iframe
                title="Chetas Agrotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.990503659798!2d73.78980387496779!3d18.502898267646148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbed9c0e5ed9%3A0x7b77932b07c03b17!2sPashan%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1619714736717!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
