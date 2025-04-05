import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from '../CartContext';
import "../style.css";

const BuyNow = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayNow = () => {
    navigate("/order-booking", {
      state: { cartItems, totalPrice },
    });
  };

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
            <p>
              Quantity:{" "}
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                style={{ width: "60px", marginLeft: "10px" }}
              />
            </p>
            <p>Price per unit: ₹{item.price}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              ❌ Remove
            </button>
          </div>
        </div>
      ))}

      <hr />
      <h3 style={{ textAlign: "right" }}>Total: ₹{totalPrice}</h3>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="checkout-button" onClick={handlePayNow}>
          Pay Now
        </button>
        <br />
        <Link to="/orderbooking" className="back-button">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BuyNow;
