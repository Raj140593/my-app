import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const PizzaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Recipe Data:", data); // ✅ Debugging
        setRecipe(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching recipe details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (recipe) {
      addToCart({
        id: recipe.id,
        name: recipe.name,
        price: recipe.caloriesPerServing * 2 || 100, // ✅ Ensure price is valid
        image: recipe.image,
      });
      alert(`${recipe.name} has been added to your cart.`);
    }
  };

  if (loading)
    return <h3 className="text-center mt-5">Loading recipe details... 🍕</h3>;
  if (error) return <h3 className="text-danger text-center mt-5">{error}</h3>;
  if (!recipe)
    return <h3 className="text-center mt-5">Recipe not found! 😔</h3>;

  return (
    <div className="pizza-detail-container">
      {/* Left Side: Image */}
      <div className="pizza-image-container">
        <img src={recipe.image} alt={recipe.name} className="pizza-image" />
      </div>

      {/* Right Side: Details */}
      <div className="pizza-detail-content">
        <h2 className="pizza-title">{recipe.name}</h2>
        <p className="pizza-price">₹{recipe.caloriesPerServing * 2}</p> {/* Fake Price Calculation */}
        <p className="pizza-rating">⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
        <p className="pizza-info"><b>🌎 Cuisine:</b> {recipe.cuisine}</p>
        <p className="pizza-info"><b>🔖 Tags:</b> {recipe.tags.join(', ')}</p>
        <p className="pizza-ingredients"><b>🥗 Ingredients:</b> {recipe.ingredients.join(', ')}</p>
        <p className="pizza-info"><b>📜 Instructions:</b> {Array.isArray(recipe.instructions) ? recipe.instructions.join(' ') : 'No instructions available'}</p>
        <p className="pizza-info"><b>⏳ Prep Time:</b> {recipe.prepTimeMinutes} min</p>
        <p className="pizza-info"><b>🔥 Cook Time:</b> {recipe.cookTimeMinutes} min</p>
        <p className="pizza-info"><b>🍽 Servings:</b> {recipe.servings}</p>
        
        {/* Buttons */}
        <div className="button-container">
          <Link to="/pizza" className="back-button">⬅ Back to Recipes</Link>
          <button className="add-to-cart-button" onClick={handleAddToCart}>🛍 Add to Cart</button>
          <Link to="/buy-now" className="view-cart-button">🛒 View Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
