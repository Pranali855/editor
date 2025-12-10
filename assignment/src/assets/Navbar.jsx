import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="sub-navbar">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/128/15239/15239921.png"
          alt="Logo"
        />
        <h2 className="logo-name">Diwali</h2>
      </div>

      <div className="menu-bar">
        <Link className="menu" to="/">Home</Link>
        <Link className="menu" to="/about">About</Link>
        <Link className="menu" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;