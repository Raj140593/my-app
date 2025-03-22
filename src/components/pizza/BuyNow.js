import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css"; // ✅ Import CSS

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipe } = location.state || {}; // Get data from state

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  if (!recipe) {
    return <h3 className="text-center mt-5 text-danger">No product found! Please go back.</h3>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Order Placed!\n📦 ${recipe.name} x ${quantity} \n📍 Shipping to: ${address}`);
    navigate("/pizza"); // Redirect to pizza page after order
  };

  return (
    <div className="buy-now-container">
      <h2>🛒 Checkout</h2>
      <div className="buy-now-content">
        <img src={recipe.image} alt={recipe.name} className="buy-now-image" />
        <div className="buy-now-details">
          <h3>{recipe.name}</h3>
          <p><b>🔥 Price:</b> $12.99</p> {/* Fixed Price (Can be dynamic) */}
          <label><b>📦 Quantity:</b></label>
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
          <p><b>💰 Total:</b> ${(12.99 * quantity).toFixed(2)}</p>
        </div>
      </div>

      {/* ✅ Checkout Form */}
      <form onSubmit={handleSubmit}>
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
        <Link to="/pizza" className="back-button">⬅ Back to Recipes</Link>
        <button type="submit" className="confirm-button">✅ Confirm Order</button>
      </form>
    </div>
  );
};

export default BuyNow;
