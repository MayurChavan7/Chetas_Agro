import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Use motion.create for React Router Link (fixes warning)
const MotionLink = motion.create(Link);

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
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo - Left aligned & larger */}
        <Link to="/" className="flex items-center z-[1000]">
          <img
            src="/Logo.png"
            alt="Chetas Agro Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
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
          type="button"
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 text-gray-800 z-[1100]"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-md flex items-center justify-center z-[1000]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="flex flex-col items-center space-y-8 text-2xl text-gray-900 relative"
              onClick={(e) => e.stopPropagation()}
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

              {/* Close button inside menu */}
              <button
                type="button"
                onClick={toggleMenu}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-800 hover:text-green-700 focus:outline-none"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
