import React from "react";
import Register from "./Register";
import AllProduct from "./AllProduct"
export default function Home() {
  return (
    <div>
    <h1 style={{textAlign:'center'}}>Home</h1>  
      <Register />
      <AllProduct/>
    </div>
  );
}
