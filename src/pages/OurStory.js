import React from "react";
import './ourStory.css';

function OurStory() {
  return (
    <div className="ourstory-section">
      <div className="ourstory-content">
        <div className="ourstory-left">
          <h1 className="ourstory-heading">Our Story</h1>
          <p className="ourstory-main">
            At CHOPS, we believe in the art of perfect preparation. Our master chefs combine traditional techniques with modern innovation to create an unforgettable dining experience.
          </p>
          <p className="ourstory-sub">
            Every dish is crafted with premium ingredients sourced from the finest suppliers, ensuring quality that exceeds expectations.
          </p>
          <div className="ourstory-stats">
            <div>
              <span className="ourstory-stat-num">15+</span>
              <span className="ourstory-stat-label">Years Experience</span>
            </div>
            <div>
              <span className="ourstory-stat-num">50+</span>
              <span className="ourstory-stat-label">Signature Dishes</span>
            </div>
            <div>
              <span className="ourstory-stat-num">1000+</span>
              <span className="ourstory-stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="ourstory-right">
          <img
            className="ourstory-img"
            src="https://i.pinimg.com/736x/de/72/0a/de720a9a4aff63156c55643685bbf925.jpg"
            alt="CHOPS Cafe"
          />
        </div>
      </div>
    </div>
  );
}

export default OurStory; 