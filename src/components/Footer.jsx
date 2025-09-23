import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

const Footer = React.memo(() => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const socialIcons = useMemo(
    () => [
      { Icon: Facebook, href: "https://www.facebook.com/chetascontrolsystem" },
      { Icon: Instagram, href: "https://www.instagram.com/chetascontrolsystems/" },
      { Icon: Linkedin, href: "https://www.linkedin.com/company/chetas-control/" },
    ],
    []
  );

  const quickLinks = useMemo(
    () => [
      { to: "/about", label: "About Us" },
      { to: "/products", label: "Products" },
      { to: "/features", label: "Features" },
      { to: "/why-choose-us", label: "Why Us" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/70 to-black/80 animate-gradient-flow" />

      {/* Floating Orbs */}
      <div className="absolute w-40 h-40 bg-green-500/20 rounded-full blur-3xl top-10 left-10 animate-orb1 will-change-transform" />
      <div className="absolute w-32 h-32 bg-green-400/10 rounded-full blur-3xl bottom-20 right-10 animate-orb2 will-change-transform" />

      {/* Footer Content */}
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
            At <span className="font-semibold text-green-300">Chetas Agro</span>, we are
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
            {quickLinks.map(({ to, label }) => (
              <motion.li
                key={to}
                whileHover={{ x: 6, color: "#4ade80" }}
                transition={{ type: "spring", stiffness: 250 }}
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
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-green-700 hover:bg-green-500 transition shadow-lg will-change-transform transform hover:scale-110"
              >
                <Icon size={26} className="text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-green-600/50 py-6 text-center bg-black/40 text-gray-300 text-sm">
        <p>&copy; {new Date().getFullYear()} Chetas Agrotech Pvt. Ltd. | All Rights Reserved</p>
        <p className="mt-2">
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-green-400 transition underline"
          >
            Privacy Policy
          </button>
        </p>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 rounded-2xl max-w-3xl w-full p-8 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
            <p className="mb-4">
              At Chetas Agrotech, we respect your privacy. This privacy policy explains
              how we collect, use, and protect your personal information when you visit
              our website.
            </p>
            <p className="mb-4">
              <strong>Information Collection:</strong> We may collect your name, email,
              phone number, and other details only when voluntarily submitted.
            </p>
            <p className="mb-4">
              <strong>Use of Information:</strong> The information is used solely to
              provide services, respond to inquiries, and improve our offerings.
            </p>
            <p className="mb-4">
              <strong>Data Security:</strong> We take reasonable measures to protect your
              information. We do not sell or share your personal data with third parties
              without consent.
            </p>
            <p className="mb-4">
              <strong>Cookies:</strong> Our website may use cookies to improve user
              experience. You can disable cookies in your browser settings.
            </p>
            <p className="mb-4">
              By using our website, you agree to the terms of this Privacy Policy.
            </p>
            <p className="mt-6 text-sm text-gray-500">Last updated: September 2025</p>
          </div>
        </div>
      )}
    </footer>
  );
});

export default Footer;
