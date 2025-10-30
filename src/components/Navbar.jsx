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
    <nav className="fixed top-0 w-full z-[9999] bg-gradient-to-r from-green-700 via-green-600 to-lime-500 text-white backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* 🌿 Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/Images/Logo.png"
            alt="Chetas Agro Logo"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-lg">
          {menuItems.map(({ name, path, subItems }, i) =>
            subItems ? (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white hover:text-yellow-200 transition">
                  {name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-white text-green-800 shadow-lg rounded-md py-2 w-56"
                    >
                      {subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-green-100 hover:text-green-700 transition-colors"
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
                className="relative group text-white hover:text-yellow-200 transition duration-300"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* 📱 Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-yellow-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📲 Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[88px] right-0 w-full bg-gradient-to-b from-green-700 via-green-600 to-lime-500 text-white backdrop-blur-md shadow-xl z-[10000] flex flex-col px-6 pb-4"
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
                    className="flex justify-between items-center bg-white/10 text-yellow-200 font-semibold text-lg px-4 py-2 rounded-md"
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
                            className="px-3 py-2 bg-white/10 text-white hover:bg-green-100 hover:text-green-700 rounded-md"
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
                  className="bg-white/10 hover:bg-white/20 text-yellow-100 font-semibold text-lg px-4 py-2 rounded-md mt-2 transition"
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
