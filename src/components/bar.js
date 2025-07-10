import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Bar() {
  return (
    <header className="bar">
      <div className="bar-left">
        <span className="bar-logo">CHOPS</span>
      </div>
      <nav className="bar-center">
        <Link to="/menu" className="bar-link">Menu</Link>
        <Link to="/about" className="bar-link">About</Link>
        <Link to="/contact" className="bar-link">Contact</Link>
        <Link to="/review" className="bar-link">Reviews</Link>
      </nav>
      <div className="bar-right">
        <Link to="/reserve" className="bar-reserve">Reserve Table</Link>
      </div>
    </header>
  );
}

export default Bar; 