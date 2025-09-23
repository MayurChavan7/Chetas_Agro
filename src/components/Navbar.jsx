import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, staggerChildren: 0.1 },
    },
    exit: { x: "-100%", opacity: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img src="/Logo.png" alt="Chetas Agro Logo" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-lg">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative group text-gray-800 hover:text-green-700 transition-colors duration-300"
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-400 to-green-700 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 text-gray-800 z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <motion.div
            key={isOpen ? "open" : "closed"}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center space-y-8 text-2xl text-gray-900 z-40 px-6 sm:px-12"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuItems.map(({ name, path }) => (
              <MotionLink
                key={name}
                to={path}
                variants={menuItemVariants}
                className="hover:text-green-700 font-semibold transition-transform transform hover:scale-105 text-center"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </MotionLink>
            ))}

            {/* Close Button */}
            <motion.button
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-800 hover:text-green-700 focus:outline-none z-50"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close Menu"
            >
              <X size={28} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
