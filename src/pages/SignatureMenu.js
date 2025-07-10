import React, { useState } from "react";
import './signatureMenu.css';

const menuData = {
  "All Items": [
    {
      title: "The Classic Story",
      price: "$18.00",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Chocolate Lava Cake",
      price: "$14.00",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    },
  ],
  "Premium Steaks": [
    {
      title: "Ribeye Steak",
      price: "$32.00",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    },
  ],
  "Fresh Seafood": [
    {
      title: "Grilled Salmon",
      price: "$24.00",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    },
  ],
  Desserts: [
    {
      title: "Chocolate Lava Cake",
      price: "$14.00",
      img: process.env.PUBLIC_URL + "/images/choco-lava-cake.png",
    },
    {
      title: "Choco Lava Cake",
      price: "$15.00",
      img: process.env.PUBLIC_URL + "/images/choco-lava-cake.png",
    },
  ],
};

const filters = ["All Items", "Premium Steaks", "Fresh Seafood", "Desserts"];

function SignatureMenu() {
  const [activeFilter, setActiveFilter] = useState("All Items");

  return (
    <div className="signature-section">
      <h1 className="signature-heading">Our Signature Menu</h1>
      <p className="signature-subhead">Explore our premium dishes in stunning 3D detail</p>
      <div className="signature-filters">
        <button className="sig-btn sig-arrow" disabled>&#8592;</button>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`sig-btn${activeFilter === filter ? " sig-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <button className="sig-btn sig-arrow" disabled>&#8594;</button>
      </div>
      <div className="signature-card-row">
        {menuData[activeFilter].map((item, idx) => (
          <div className="signature-card" key={idx}>
            <img className="signature-img" src={item.img} alt={item.title} />
            <div className="signature-title">{item.title}</div>
            <div className="signature-price">{item.price}</div>
          </div>
        ))}
      </div>
      <div className="signature-controls">
        <span className="signature-controls-label">Camera Controls:</span>
        <button className="sig-btn sig-ctrl">-</button>
        <button className="sig-btn sig-ctrl">+</button>
        <button className="sig-btn sig-reset">Reset View</button>
      </div>
    </div>
  );
}

export default SignatureMenu; 