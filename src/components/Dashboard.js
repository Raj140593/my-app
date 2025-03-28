import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];
  const filteredRecipes = selectedCuisine
    ? recipes.filter(recipe => recipe.cuisine === selectedCuisine)
    : recipes;

  const chartData = filteredRecipes.map(recipe => ({
    name: recipe.name,
    cookingTime: recipe.cookTimeMinutes || 0,
    rating: recipe.rating || 0
  }));

  const totalRecipes = filteredRecipes.length;
  const avgRating = filteredRecipes.length > 0
    ? (filteredRecipes.reduce((acc, recipe) => acc + recipe.rating, 0) / filteredRecipes.length).toFixed(1)
    : 0;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A028FF"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📊 Recipe Dashboard</h2>

      <label>Select Cuisine: </label>
      <select onChange={(e) => setSelectedCuisine(e.target.value)} value={selectedCuisine}>
        <option value="">All</option>
        {cuisines.map((cuisine, index) => (
          <option key={index} value={cuisine}>{cuisine}</option>
        ))}
      </select>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
        {/* Total Recipes Bar Chart */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3>Total Recipes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[{ name: "Total", count: totalRecipes }]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Average Rating Line Chart */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3>Avg Rating</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={[{ name: "Avg", rating: avgRating }]}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#FF8042" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cooking Time Bar Chart */}
      <h3>Cooking Time (in Minutes)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cookingTime" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Recipe Ratings Pie Chart */}
      <h3>Recipe Ratings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="rating" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
