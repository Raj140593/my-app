import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaHome, FaInfo, FaServicestack, FaEnvelope, FaIndustry, FaChevronDown } from 'react-icons/fa';
import { MdAssuredWorkload, MdDashboard } from 'react-icons/md';
import './style.css';

const Sidebar = ({ isOpen, toggleSidebar, setIsContactModalOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.sidebar')) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, toggleSidebar]);

  useEffect(() => {
    if (!isOpen) {
      setIsServicesOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button className="closebtn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <Link to="#">
          <img src="/img/tecklogo.png" className="logo" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              <FaInfo /> About
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={toggleSidebar}>
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li className={`dropdown ${isServicesOpen ? 'open' : ''}`}>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setIsServicesOpen(!isServicesOpen);
              }}
            >
              <FaServicestack /> Services <FaChevronDown className={`chevron ${isServicesOpen ? 'rotate' : ''}`} />
            </Link>
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/service/web-development" onClick={toggleSidebar}>
                    🌐 Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/service/mobile-app" onClick={toggleSidebar}>
                    📱 Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/service/seo" onClick={toggleSidebar}>
                    📈 SEO Optimization
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/industries" onClick={toggleSidebar}>
              <FaIndustry /> Industries
            </Link>
          </li>
          <li>
            <Link to="/workforce" onClick={toggleSidebar}>
              <MdAssuredWorkload /> Workforce
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={toggleSidebar}>
              <FaServicestack /> Careers
            </Link>
          </li>
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
