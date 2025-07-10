import React from "react";
import "./order3d.css";

function PlaceOrder() {
  return (
    <div className="order3d-bg">
      <div className="order3d-container">
        <div className="placeorder-3d-effect">
          <div className="placeorder-3d-circle">
            <span className="placeorder-3d-check">✔️</span>
          </div>
        </div>
        <h1 className="order3d-title">Order Placed!</h1>
        <p className="order3d-desc">Thank you for your order. Our chefs are preparing your meal with care and passion!</p>
        <div className="placeorder-3d-foods">
          <span role="img" aria-label="pizza" className="placeorder-3d-food">🍕</span>
          <span role="img" aria-label="burger" className="placeorder-3d-food">🍔</span>
          <span role="img" aria-label="fries" className="placeorder-3d-food">🍟</span>
          <span role="img" aria-label="ice cream" className="placeorder-3d-food">🍨</span>
          <span role="img" aria-label="sushi" className="placeorder-3d-food">🍣</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder; 