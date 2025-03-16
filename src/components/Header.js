import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Header = ({ toggleSidebar, isOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <nav className={`navbar navbar-dark bg-dark ${isOpen ? "sidebar-open" : ""}`}>
        {!isOpen && (
          <button className="btn btn-outline-light" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}

        <li className="text-white">United States, Canada & India</li>
        <li className="text-white">Email: info@teckleap.com</li>
        <li className="text-white">Office: +1 (469) 277-7001</li>
        <li className="text-white">Mon-Fri, 9:00am – 5:00pm</li>
      </nav>
    </>
  );
};

export default Header;
