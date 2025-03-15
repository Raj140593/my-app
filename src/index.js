import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Sidebar ke bahar click karne par close karne ka function
  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest(".sidebar") && !e.target.closest(".btn-outline-light")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`main-content ${isOpen ? "shifted" : ""}`}>
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsContactModalOpen={setIsContactModalOpen} />
      <ContactUs isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
      <About />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);
