import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHome, FaInfo, FaServicestack, FaEnvelope, FaIndustry } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import "./style.css";

const Sidebar = ({ isOpen, toggleSidebar, setIsContactModalOpen }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the sidebar is open and the click is outside the sidebar
      if (isOpen && !event.target.closest(".sidebar")) {
        toggleSidebar(); // Close sidebar
      }
    };

    // Add event listener to detect outside click
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* Overlay to capture clicks outside sidebar */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <button className="closebtn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <Link to="#"><img src="/img/tecklogo.png" className="logo" alt="Logo" /></Link>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/pizza" onClick={toggleSidebar}><FaInfo /> About</Link></li>
          <li><Link to="#" onClick={toggleSidebar}><FaServicestack /> Services</Link></li>
          <li><Link to="#" onClick={toggleSidebar}><FaIndustry /> Industries</Link></li>
          <li><Link to="#" onClick={toggleSidebar}><MdAssuredWorkload /> Workforce</Link></li>
          <li><Link to="#" onClick={toggleSidebar}><FaServicestack /> Careers</Link></li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setIsContactModalOpen(true);
                toggleSidebar();
              }}
            >
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
