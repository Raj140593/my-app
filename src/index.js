import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Pizza from "./components/pizza/Pizza";
import PizzaDetail from "./components/pizza/PizzaDetail"; // ✅ Import Detail Page
import BuyNow from "./components/pizza/BuyNow";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={`main-content ${isOpen ? "shifted" : ""}`}>
        <Header toggleSidebar={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} setIsContactModalOpen={setIsContactModalOpen} />
        <ContactUs isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} /> 
          <Route path="/buy-now" element={<BuyNow />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
