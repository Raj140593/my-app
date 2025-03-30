import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./style.css"; // ✅ Import CSS


const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); 

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <strong>{item.name}</strong>
                  <p className="price">₹{item.price || 0}</p>  {/* ✅ Price show hoga */}
                </div>
                <span className="quantity">Qty: {item.quantity}</span>

                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>

                <button className="buy-now-button" onClick={() => navigate("/buy-now", { state: { item } })}>
                  Buy Now
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: <strong>₹{totalPrice}</strong></p>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
