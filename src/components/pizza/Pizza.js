import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Pizza = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3 className="text-center mt-5">Loading recipes... 🍕</h3>;
  if (error) return <h3 className="text-danger text-center mt-5">{error}</h3>;

  return (
    <div className="container">
      <h2 className="mt-4 text-center">🍕 Welcome to Pizza & Other Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4">
            <div className="card mb-4">
              {/* ✅ Clickable Link to Recipe Details */}
              <Link to={`/pizza/${recipe.id}`} style={{ textDecoration: "none", color: "black" }}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p><b>🌎 Cuisine:</b> {recipe.cuisine}</p>
                  <p><b>⏳ Prep Time:</b> {recipe.prepTimeMinutes} min</p>
                  <p><b>🔥 Cook Time:</b> {recipe.cookTimeMinutes} min</p>
                  <p><b>🍽 Servings:</b> {recipe.servings}</p>
                  <p><b>⭐ Rating:</b> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
