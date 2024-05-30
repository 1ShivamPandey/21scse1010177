import React, { useState, useEffect } from "react";
import data from "./data.json"; 

const AllProduct = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    setProductData(data); 
    setFilteredData(data); 
    const allCategories = [...new Set(data.map((item) => item.category))];
    setCategories(["All", ...allCategories]);
  }, []);

  useEffect(() => {
    const sortData = (sortBy) => {
      const sorted = [...filteredData].sort((a, b) => {
        if (sortBy === "rating") {
          return b.rating - a.rating; 
        }
        return 0;
      });
      setFilteredData(sorted);
    };

    sortData(sortBy);
  }, [sortBy, filteredData]);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredData(productData); 
    } else {
      const filtered = productData.filter((item) => item.category === category);
      setFilteredData(filtered); 
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div style={{marginTop:'150px'}} className="App">
      <h1>Product List</h1>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" onChange={(e) => handleCategoryChange(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={handleSortChange}>
          <option value="rating">Rating (Highest to Lowest)</option>
        </select>
      </div>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            Product Name: {item.productName}, Price: ${item.price}, Rating: {item.rating}, Category: {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProduct;
