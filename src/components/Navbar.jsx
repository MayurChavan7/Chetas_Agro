import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Products",
    subItems: [
      { name: "Cow Dung Fertilizer", path: "/products/fertilizer" },
      { name: "Ethanol Solutions", path: "/products/ethanol" },
    ],
  },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Animation variants for mobile drawer
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Images/Logo.png"
            alt="Chetas Agro Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-lg">
          {menuItems.map(({ name, path, subItems }, i) =>
            subItems ? (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-800 hover:text-green-700 transition-colors duration-300">
                  {name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-56"
                    >
                      {subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={i}
                to={path}
                className="relative group text-gray-800 hover:text-green-700 transition-colors duration-300"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-400 to-green-700 transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[88px] right-0 w-full bg-white backdrop-blur-md shadow-xl z-[10000] flex flex-col px-6 pb-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {menuItems.map(({ name, path, subItems }, i) =>
              subItems ? (
                <div key={i} className="flex flex-col mt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === i ? null : i)
                    }
                    className="flex justify-between items-center bg-green-600 text-yellow-300 font-semibold text-lg px-4 py-2 rounded-md"
                  >
                    {name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        activeDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 flex flex-col space-y-2"
                      >
                        {subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="px-3 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <MotionLink
                  key={i}
                  to={path}
                  className="bg-green-600 text-yellow-300 hover:bg-green-800 hover:text-yellow-100 font-semibold text-lg px-4 py-2 rounded-md mt-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </MotionLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
