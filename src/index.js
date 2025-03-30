import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Pizza from "./components/pizza/Pizza";
import PizzaDetail from "./components/pizza/PizzaDetail";
import BuyNow from "./components/pizza/BuyNow";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/Dashboard";
import CartPage from "./components/CartPage"; 
import { CartProvider } from "./components/CartContext"; // ✅ Correct Import

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className={`main-content ${isOpen ? "shifted" : ""}`}>
      <Header toggleSidebar={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <Sidebar 
        isOpen={isOpen} 
        toggleSidebar={() => setIsOpen(!isOpen)} 
        setIsContactModalOpen={setIsContactModalOpen} 
      />
      <ContactUs isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/buy-now" element={<BuyNow />} />
      </Routes>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider> {/* ✅ Ensure Provider is Wrapped Correctly */}
        <Index />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
