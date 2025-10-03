// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const MotionLink = motion(Link);

// const menuItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   {
//     name: "Products",
//     path: "/products",
//     subItems: [
//       { name: "Cow Dung Fertilizer", path: "/products/fertilizer" },
//       { name: "Ethanol Solutions", path: "/products/ethanol" },
//     ],
//   },
//   { name: "Features", path: "/features" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(false);

//   const menuVariants = {
//     hidden: { x: "-100%", opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 20,
//         staggerChildren: 0.1,
//       },
//     },
//     exit: {
//       x: "-100%",
//       opacity: 0,
//       transition: { type: "spring", stiffness: 120, damping: 20 },
//     },
//   };

//   const menuItemVariants = {
//     hidden: { x: -20, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.25 } },
//   };

//   return (
//     <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <Link to="/" className="flex items-center z-[1000]">
//           <img
//             src="/Images/Logo.png"
//             alt="Chetas Agro Logo"
//             className="h-16 md:h-20 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10 font-semibold text-lg relative">
//           {menuItems.map(({ name, path, subItems }) =>
//             subItems ? (
//               <div key={name} className="relative group">
//                 <button className="flex items-center gap-1 text-gray-800 hover:text-green-700 transition-colors duration-300">
//                   {name}
//                   <ChevronDown size={16} />
//                 </button>
//                 {/* Dropdown */}
//                 <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56">
//                   {subItems.map((sub) => (
//                     <Link
//                       key={sub.name}
//                       to={sub.path}
//                       className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700"
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={name}
//                 to={path}
//                 className="relative group text-gray-800 hover:text-green-700 transition-colors duration-300"
//               >
//                 {name}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-400 to-green-700 transition-all group-hover:w-full"></span>
//               </Link>
//             )
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           type="button"
//           className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 text-gray-800 z-[1100]"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed top-0 left-0 h-full w-64 bg-white backdrop-blur-md shadow-xl z-[1000] flex flex-col p-6 overflow-y-auto"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             {/* Close Button */}
//             <div className="flex justify-end mb-6">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 aria-label="Close Menu"
//                 className="text-green-700 hover:text-green-900 transition-colors duration-300"
//               >
//                 <X size={28} />
//               </button>
//             </div>

//             {/* Mobile Nav Items */}
//             <motion.div className="flex flex-col space-y-4 mt-4">
//               {menuItems.map(({ name, path, subItems }) =>
//                 subItems ? (
//                   <div key={name} className="flex flex-col">
//                     <button
//                       onClick={() => setOpenDropdown((prev) => !prev)}
//                       className="flex justify-between items-center bg-green-600 text-yellow-300 font-semibold text-lg px-4 py-2 rounded-md"
//                     >
//                       {name}
//                       <ChevronDown
//                         size={18}
//                         className={`transition-transform ${
//                           openDropdown ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {openDropdown && (
//                       <div className="ml-4 mt-2 flex flex-col space-y-2">
//                         {subItems.map((sub) => (
//                           <Link
//                             key={sub.name}
//                             to={sub.path}
//                             className="px-3 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <MotionLink
//                     key={name}
//                     to={path}
//                     variants={menuItemVariants}
//                     className="bg-green-600 text-yellow-300 hover:bg-green-800 hover:text-yellow-100 font-semibold text-lg px-4 py-2 rounded-md transition-colors duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {name}
//                   </MotionLink>
//                 )
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
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
    path: "/products",
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
  const [openDropdown, setOpenDropdown] = useState(null);

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
        {/* Logo */}
        <Link to="/" className="flex items-center z-[1000]">
          <img
            src="/Images/Logo.png"
            alt="Chetas Agro Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-lg relative">
          {menuItems.map(({ name, path, subItems }) =>
            subItems ? (
              <div key={name} className="relative group">
                <button className="flex items-center gap-1 text-gray-800 hover:text-green-700 transition-colors duration-300">
                  {name}
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56">
                  {subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={name}
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
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 text-gray-800 z-[1100]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-white backdrop-blur-md shadow-xl z-[1000] flex flex-col p-6 overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-green-700 hover:text-green-900 transition-colors duration-300"
              >
                <X size={28} />
              </button>
            </div>

            <motion.div className="flex flex-col space-y-4 mt-4">
              {menuItems.map(({ name, path, subItems }, index) =>
                subItems ? (
                  <div key={name} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="flex justify-between items-center bg-green-600 text-yellow-300 font-semibold text-lg px-4 py-2 rounded-md"
                    >
                      {name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
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
                      </div>
                    )}
                  </div>
                ) : (
                  <MotionLink
                    key={name}
                    to={path}
                    variants={menuItemVariants}
                    className="bg-green-600 text-yellow-300 hover:bg-green-800 hover:text-yellow-100 font-semibold text-lg px-4 py-2 rounded-md transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </MotionLink>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
