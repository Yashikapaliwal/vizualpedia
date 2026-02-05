"use client";
import { useEffect, useState } from "react";

const Testing = () => {
  const [products, setProducts] = useState([]); // All data from JSON
  const [filtered, setFiltered] = useState([]); // Filtered data
  const [activeFilter, setActiveFilter] = useState("all"); // Track selected filter

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Handle filter click
  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((item) => item.category === category));
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => handleFilter("all")} className="mx-3 border px-3 py-2 rounded">All</button>
        <button onClick={() => handleFilter("bottle")} className="mx-3 border px-3 py-2 rounded">Bottles</button>
        <button onClick={() => handleFilter("casserole")} className="mx-3 border px-3 py-2 rounded">Casseroles</button>
        <button onClick={() => handleFilter("tiffin")} className="mx-3 border px-3 py-2 rounded">Tiffins</button>
      </div>

      {/* Active Filter Info */}
      <p>
        Showing: <strong>{activeFilter}</strong>
      </p>

      {/* Product List */}
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} — ₹{item.price}<br/>
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;
