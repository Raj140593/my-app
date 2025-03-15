import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTimes, FaHome, FaInfo, FaServicestack, FaEnvelope } from "react-icons/fa";

import "./style.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, setIsContactModalOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`} onClick={(e) => e.stopPropagation()}>
      <button className="closebtn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <Link to="#"><img src="/img/tecklogo.png" className="logo" alt="Logo" /></Link>
      <ul>
     
        <li><Link to="#" onClick={toggleSidebar}><FaHome /> Home</Link></li>
        <li><Link to="#" onClick={toggleSidebar}><FaInfo /> About</Link></li>
        <li><Link to="#" onClick={toggleSidebar}><FaServicestack /> Services</Link></li>
        <li>
          <Link to="#" onClick={(e) => { 
            e.preventDefault(); 
            setIsContactModalOpen(true); // ✅ Modal Open
            toggleSidebar(); // ✅ Sidebar Close
          }}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
