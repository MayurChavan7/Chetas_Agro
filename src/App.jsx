import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Features from "./pages/Features.jsx";
import Contact from "./pages/Contact.jsx";
import FertilizerDetails from "./pages/FertilizerDetails.jsx";
import EthanolDetails from "./pages/EthanolDetails.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/fertilizer" element={<FertilizerDetails />} />
        <Route path="/products/ethanol" element={<EthanolDetails />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
