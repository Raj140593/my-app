import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../style.css";

const BuyNow = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const totalPrice = location.state?.totalPrice || 0;

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No items to purchase</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🛍️ Purchase Summary</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="buy-now-item">
          <img src={item.image} alt={item.name} className="buy-now-image" />
          <div className="buy-now-details">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price per unit: ₹{item.price}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      <hr />
      <h3 style={{ textAlign: "right" }}>Total: ₹{totalPrice}</h3>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="checkout-button">Pay Now</button>
        <br />
        <Link to="/" className="back-button">⬅ Back to Home</Link>
      </div>
    </div>
  );
};

export default BuyNow;
