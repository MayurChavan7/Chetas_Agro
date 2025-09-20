// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative text-white">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
//         style={{
//           backgroundImage: "url('/footer-bg.jpg')", // 👉 place footer-bg.jpg in public/
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
//         {/* Quick Links */}
//         <div>
//           <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
//             Quick Links
//           </h5>
//           <ul className="space-y-3 text-lg">
//             <li><Link to="/about" className="hover:text-green-300 transition">About Us</Link></li>
//             <li><Link to="/products" className="hover:text-green-300 transition">Products</Link></li>
//             <li><Link to="/features" className="hover:text-green-300 transition">Features</Link></li>
//             <li><Link to="/why-choose-us" className="hover:text-green-300 transition">Why Us</Link></li>
//             <li><Link to="/contact" className="hover:text-green-300 transition">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
//             Contact Us
//           </h5>
//           <p className="flex items-center gap-2 mb-3"><Phone size={18} /> 020-25871111 / 25870370</p>
//           <p className="flex items-start gap-2 mb-3">
//             <MapPin size={18} />
//             Chetas House, Plot No. 1, Survey No. 8+9,<br />
//             Shree Siddhatek Society, Sutarwadi,<br />
//             Pashan, Pune – 411021, Maharashtra, India
//           </p>
//           <p className="flex items-center gap-2"><Mail size={18} /> info@chetasagro.com</p>
//         </div>

//         {/* About / Commitment */}
//         <div>
//           <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
//             Our Commitment
//           </h5>
//           <p className="text-gray-200 leading-relaxed text-lg">
//             At <span className="font-semibold text-green-300">Chetas Agro</span>, 
//             we are committed to building a sustainable future for farmers and the planet.  
//             By turning organic waste into eco-friendly fertilizers, we help improve soil health,  
//             boost crop yields, and reduce dependence on harmful chemicals.  
//             Together, we grow greener, healthier, and smarter.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-6 mt-6">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
//               <Facebook size={22} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
//               <Instagram size={22} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
//               <Linkedin size={22} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="relative z-10 border-t border-green-600/50 py-4 text-center bg-black/40">
//         <p>
//           &copy; {new Date().getFullYear()} Chetas Agrotech Pvt. Ltd. | All Rights Reserved
//         </p>
//         <p className="mt-2 text-sm">
//           <Link to="/privacy" className="hover:text-green-300 transition">
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { Icon: Facebook, href: "https://facebook.com" },
  { Icon: Instagram, href: "https://instagram.com" },
  { Icon: Linkedin, href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image with Pulsing Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        {/* About Section */}
        <div>
          <h5 className="text-2xl font-bold mb-6 border-b-2 border-green-400 inline-block">
            Our Commitment
          </h5>
          <p className="text-gray-300 leading-relaxed text-lg">
            At{" "}
            <span className="font-semibold text-green-300">Chetas Agro</span>, we are
            committed to building a sustainable future for farmers and the planet.
            Transforming organic waste into eco-friendly fertilizers for healthier
            soils and better yields.
          </p>
        </div>

        {/* Quick Links */}
        <div>
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
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-green-400 transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
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
        </div>

        {/* Social Media */}
        <div>
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
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
              >
                <Icon size={26} className="text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-green-600/50 py-6 text-center bg-black/50 text-gray-300 text-sm select-none">
        <p>
          &copy; {new Date().getFullYear()} Chetas Agrotech Pvt. Ltd. | All Rights
          Reserved
        </p>
        <p className="mt-2">
          <Link to="/privacy" className="hover:text-green-400 transition">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
