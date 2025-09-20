import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { Icon: Facebook, href: "https://facebook.com" },
  { Icon: Instagram, href: "https://instagram.com" },
  { Icon: Linkedin, href: "https://linkedin.com" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
  }),
};

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* 🔹 Background with gradient animation */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/70 to-black/80 animate-gradient-flow"></div>

      {/* 🔹 Floating glowing orbs */}
      <motion.div
        className="absolute w-40 h-40 bg-green-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-green-400/10 rounded-full blur-3xl bottom-20 right-10"
        animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* About Section */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
            Our Commitment
          </h5>
          <p className="text-gray-300 leading-relaxed text-lg">
            At{" "}
            <span className="font-semibold text-green-300">Chetas Agro</span>, we are
            committed to building a sustainable future. Transforming organic waste
            into eco-friendly fertilizers for healthier soils and better yields.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
            Quick Links
          </h5>
          <ul className="space-y-4 text-lg">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/features", label: "Features" },
              { to: "/why-choose-us", label: "Why Us" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }, i) => (
              <motion.li
                key={to}
                whileHover={{ x: 8, color: "#4ade80" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={to} className="transition duration-300">
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
            Contact Us
          </h5>
          <p className="flex items-center gap-3 mb-3">
            <Phone size={20} className="text-green-400" />
            <a href="tel:02025871111" className="hover:text-green-400 transition">
              020-25871111 / 25870370
            </a>
          </p>
          <p className="flex items-start gap-3 mb-3">
            <MapPin size={20} className="text-green-400 mt-1" />
            <address className="not-italic leading-relaxed">
              Chetas House, Plot No. 1, Survey No. 8+9,
              <br />
              Shree Siddhatek Society, Sutarwadi,
              <br />
              Pashan, Pune – 411021, Maharashtra, India
            </address>
          </p>
          <p className="flex items-center gap-3">
            <Mail size={20} className="text-green-400" />
            <a
              href="mailto:info@chetasagro.com"
              className="hover:text-green-400 transition"
            >
              info@chetasagro.com
            </a>
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
            Follow Us
          </h5>
          <div className="flex gap-6">
            {socialIcons.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-green-700 hover:bg-green-500 transition shadow-lg"
                whileHover={{ scale: 1.25, rotate: 12, boxShadow: "0 0 20px #4ade80" }}
                whileTap={{ scale: 0.9, rotate: -12 }}
              >
                <Icon size={26} className="text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-green-600/50 py-6 text-center bg-black/40 text-gray-300 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Chetas Agrotech Pvt. Ltd. | All Rights Reserved
        </motion.p>
        <motion.p
          className="mt-2"
          whileHover={{ scale: 1.05, color: "#4ade80" }}
        >
          <Link to="/privacy">Privacy Policy</Link>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
