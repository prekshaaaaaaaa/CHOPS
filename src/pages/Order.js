import React from "react";
import { useNavigate } from "react-router-dom";
import "./order3d.css";

function Order() {
  const navigate = useNavigate();
  return (
    <div className="order3d-bg" style={{ marginTop: '40px' }}>
      <div className="order3d-container">
        <h1 className="order3d-title">Place Your Order</h1>
        <p className="order3d-desc">Experience a new dimension of ordering at CHOPS!</p>
        <div className="order3d-cube">
          <div className="order3d-face order3d-face-front">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Pizza Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
          <div className="order3d-face order3d-face-back">
            <img src="https://stickershop.line-scdn.net/stickershop/v1/product/1012221/LINEStorePC/main.png;compress=true" alt="Burger Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
          <div className="order3d-face order3d-face-right">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Fries Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
          <div className="order3d-face order3d-face-left">
            <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Ice Cream Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
          <div className="order3d-face order3d-face-top">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046861.png" alt="Sushi Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
          <div className="order3d-face order3d-face-bottom">
            <img src="https://cdn-icons-png.flaticon.com/512/2718/2718224.png" alt="Donut Sticker" style={{width: '80%', height: '80%', objectFit: 'contain'}} />
          </div>
        </div>
        <button className="order3d-btn" onClick={() => navigate("/placeorder")}>Start Order</button>
      </div>
    </div>
  );
}

export default Order; 