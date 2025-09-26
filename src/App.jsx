import { Routes, Route } from "react-router-dom"; // no Router here
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Features from "./pages/Features.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/why-choose-us" element={<WhyChooseUs />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
