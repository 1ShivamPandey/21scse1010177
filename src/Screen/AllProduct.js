import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "./data.json"; 

const AllProduct = () => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProductData(data); 
    }, 1000); 
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      {error && <p>{error}</p>}
      <ul>
        {productData.map((item, index) => (
          <li style={{color:'blue'}} key={index}>
            Product Name: {item.productName}, Price: ${item.price},
          </li>

       
        ))}
      </ul>
    </div>
  );
};

export default AllProduct;
