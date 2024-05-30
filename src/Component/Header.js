import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div>
     <h1 style={{fontWeight:'bold',color:'white'}} > Ecommerce</h1>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <div className="menu-icon" onClick={toggleMenu}>
            ⏸
          </div>

          <div className={`nav-bar ${isOpen ? "open" : ""}`}>
            <div>
              <Link
                className="link-style"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                className="link-style"
                style={{ textDecoration: "none" }}
                to="/filteredProduct"
              >
                 Specific Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
