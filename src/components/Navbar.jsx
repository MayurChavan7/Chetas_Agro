import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">Chetas Agrotech</Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
          <Link to="/features" className="hover:text-yellow-300">Features</Link>
          <Link to="/why-choose-us" className="hover:text-yellow-300">Why Us</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
