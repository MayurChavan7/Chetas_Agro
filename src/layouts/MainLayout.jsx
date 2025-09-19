import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
