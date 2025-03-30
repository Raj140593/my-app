import React from "react";
import { useLocation } from "react-router-dom";
import "../style.css"; // ✅ Import CSS
import { Link } from "react-router-dom";
const BuyNow = () => {
  const location = useLocation();
  const item = location.state?.item; // Get selected item

  if (!item) {
    return <h2 style={{ textAlign: "center" }}>No item selected</h2>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", textAlign: "center" }}>
      <h2>Confirm Your Purchase</h2>
      <img src={item.image} alt={item.name} style={{ width: "100px", borderRadius: "10px" }} />
      <h3>{item.name}</h3>
      <p><strong>Price: ₹{item.price || 0}</strong></p> {/* ✅ Price Fix */}
      <button style={{ padding: "10px 20px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Pay Now
      </button>
       <Link to="/pizza" className="back-button">⬅ Back to Recipes</Link>
    </div>
  );
};

export default BuyNow;
