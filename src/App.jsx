import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Features from "./pages/Features";
// import WhyChooseUs from "./pages/WhyChooseUs";
// import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Features from "./pages/Features.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;
