import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom"; 
import "./style.css"; 

const CartPage = () => {
  const { cartItems = [], removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const handlePurchase = () => {
    navigate("/buy-now", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <strong>{item.name}</strong>
                  <p className="price">₹{item.price}</p>  
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>➖</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>➕</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: <strong>₹{totalPrice}</strong></p>
            <button className="checkout-button" onClick={handlePurchase}>
              Proceed to Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
