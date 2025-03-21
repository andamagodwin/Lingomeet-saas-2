import { useEffect, useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-Green/80 backdrop-blur-2xl" : "bg-gradient-to-r from-green-500 to-green-700"
      }`}
    >
      <div className="flex items-center">
        <img src="./logo.svg" alt="logo" className="w-16 h-16" />
      </div>
      <Nav />
    </div>
  );
};

export default Header;