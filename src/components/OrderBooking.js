import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./style.css";

const OrderBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "UPI",
  });

  const [confirmed, setConfirmed] = useState(false);
  const estimatedTime = Math.floor(Math.random() * 20) + 20;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all details.");
      return;
    }
    setConfirmed(true);
  };

  return (
    <div className="order-container">
      <div className="order-left">
        <h2 className="order-title">🧾 Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="order-image" />
            <div className="order-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Subtotal: ₹{item.quantity * item.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                ❌ Remove
              </button>
            </div>
          </div>
        ))}
        <hr />
        <h3 className="order-total">Total: ₹{totalPrice}</h3>
        <button
          className="back-button"
          onClick={() => navigate("/pizza")}
        >
          ⬅ Back to Recipes
        </button>
      </div>

      <div className="order-right">
        {!confirmed ? (
          <div className="order-form">
            <h3>📍 Delivery Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              required
            />

            <h4>💳 Payment Method</h4>
            <select name="payment" value={form.payment} onChange={handleChange}>
              <option value="UPI">UPI</option>
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Credit/Debit Card</option>
            </select>

            <button className="checkout-button" onClick={handleConfirm}>
              ✅ Confirm Order
            </button>
          </div>
        ) : (
          <div className="order-confirmation">
            <h2 className="success-message">🎉 Order Confirmed!</h2>
            <p>Thank you, <strong>{form.name}</strong>! Your order is on the way.</p>
            <p>📞 Phone: {form.phone}</p>
            <p>📍 Address: {form.address}</p>
            <p>💳 Payment Mode: {form.payment}</p>
            <h4>🕒 Estimated Delivery: {estimatedTime} minutes</h4>

            <button
              className="track-button"
              onClick={() => alert("Tracking system coming soon! 🚚")}
            >
              📦 Track Order
            </button>

            <button
              className="checkout-button"
              style={{ marginTop: "10px" }}
              onClick={() => navigate("/")}
            >
              🏠 Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderBooking;
