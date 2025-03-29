import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css"; 

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipe } = location.state || {}; 

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  if (!recipe) {
    return <h3 className="text-center mt-5 text-danger">No product found! Please go back.</h3>;
  }

  const pricePerItem = recipe.caloriesPerServing * 2; // 🔹 Dynamic Pricing
  const totalPrice = (pricePerItem * quantity).toFixed(2); // 🔹 Total Calculation

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value))); // Prevents negative values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Order Placed Successfully!\n\n🛒 ${recipe.name} x ${quantity}\n💰 Total: ₹${totalPrice}\n📍 Address: ${address}\n💳 Payment: ${paymentMethod.toUpperCase()}`);
    navigate("/pizza"); 
  };

  return (
    <div className="buy-now-container">
      <h2 className="text-center">🛒 Checkout</h2>

      <div className="buy-now-content">
        <img src={recipe.image} alt={recipe.name} className="buy-now-image" />
        <div className="buy-now-details">
          <h3>{recipe.name}</h3>
          <p><b>🔥 Price per item:</b> ₹{pricePerItem}</p>
          <label><b>📦 Quantity:</b></label>
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
          <p><b>💰 Total:</b> ₹{totalPrice}</p>
        </div>
      </div>

      {/* ✅ Checkout Form */}
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>👤 Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>📍 Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>💳 Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit_card">💳 Credit Card</option>
          <option value="paypal">🅿 PayPal</option>
          <option value="cash">💵 Cash on Delivery</option>
        </select>

        <div className="button-container">
          <Link to="/pizza" className="back-button">⬅ Back to Recipes</Link>
          <button type="submit" className="confirm-button">✅ Confirm Order</button>
        </div>
      </form>
    </div>
  );
};

export default BuyNow;
