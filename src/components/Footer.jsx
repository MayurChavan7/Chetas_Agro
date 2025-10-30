import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react";
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
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <footer className="relative text-white overflow-hidden backdrop-blur-md bg-gradient-to-r from-green-900/70 via-green-800/60 to-lime-700/60 shadow-[0_-4px_30px_rgba(0,0,0,0.2)] border-t border-white/10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/footer-bg.jpg')] bg-cover bg-center" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Our Commitment */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-lime-300 inline-block pb-1">
            Our Commitment
          </h5>
          <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
            At <span className="font-semibold text-lime-300">Chetas Agrotech</span>, we’re
            committed to a sustainable future — converting{" "}
            <span className="font-semibold text-green-200">organic cow dung</span> into
            nutrient-rich fertilizers and producing{" "}
            <span className="font-semibold text-yellow-200">renewable ethanol</span> for
            green energy and pharma-grade uses.
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
          <h5 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-lime-300 inline-block pb-1">
            Quick Links
          </h5>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {quickLinks.map(({ to, label }) => (
              <motion.li
                key={to}
                whileHover={{ x: 5, color: "#bef264" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Link to={to} className="hover:text-lime-200 transition">
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
          className="text-sm sm:text-base"
        >
          <h5 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-lime-300 inline-block pb-1">
            Contact Us
          </h5>
          <div className="space-y-3 sm:space-y-4 text-gray-100">
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-lime-300" />
              <a href="tel:02025871111" className="hover:text-lime-200 transition">
                020-25871111 / 25870370
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={18} className="text-lime-300 mt-1" />
              <address className="not-italic leading-relaxed">
                Chetas House, Plot No. 1, Survey No. 8+9, <br />
                Shree Siddhatek Society, Sutarwadi, Pashan, <br />
                Pune – 411021, Maharashtra, India
              </address>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-lime-300" />
              <a
                href="mailto:info@chetasagro.com"
                className="hover:text-lime-200 transition"
              >
                info@chetasagro.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-lime-300 inline-block pb-1">
            Follow Us
          </h5>
          <div className="flex justify-start sm:justify-start gap-4 sm:gap-5">
            {socialIcons.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-lime-300 hover:text-green-800 transition transform hover:scale-110 shadow-md"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 py-5 text-center text-sm text-gray-100 bg-black/20 backdrop-blur-md">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-lime-300">Chetas Agrotech Pvt. Ltd.</span> | All Rights Reserved
        </p>
        <button
          onClick={() => setShowPrivacy(true)}
          className="hover:text-lime-200 underline transition mt-2"
        >
          Privacy Policy
        </button>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] px-4">
          <div className="bg-white text-gray-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[80vh] shadow-2xl">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-900"
            >
              <X size={28} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700">
              Privacy Policy
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700">
              <p>
                At Chetas Agrotech, we respect your privacy. This policy explains how we
                collect, use, and protect your data when you visit our website.
              </p>
              <p>
                <strong>Information Collection:</strong> We collect information voluntarily
                provided via contact forms or inquiries.
              </p>
              <p>
                <strong>Use of Information:</strong> Data is used only to respond to
                queries, provide services, and improve user experience.
              </p>
              <p>
                <strong>Security:</strong> We implement appropriate measures to protect
                your information and do not sell or share it with third parties.
              </p>
              <p>
                <strong>Cookies:</strong> Some pages may use cookies for analytics and
                improved performance.
              </p>
              <p>By using our site, you agree to this Privacy Policy.</p>
              <p className="mt-4 text-xs text-gray-500">Last updated: October 2025</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
});

export default Footer;
