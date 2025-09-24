import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // POP, PUSH, REPLACE

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ✅ smooth scroll
    });
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
