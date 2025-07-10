import React from "react";
import { useNavigate } from "react-router-dom";
import "./dishes.css";

function Dish() {
  const navigate = useNavigate();
  return (
    <div className="dish-section">
      <h1 className="heading">Ice Cream Collection</h1>
      <p className="para1">Indulge in our handcrafted frozen delights</p>
      <div className="dish-list">
        <div className="dish-card">
          <img className="dish-img" src="https://i.pinimg.com/736x/7e/14/7d/7e147dcda0a7f434127d680b297794bd.jpg" alt="Vanilla Dream"/>
          <div className="dish-body">
            <div className="dish-title">Vanilla Dream</div>
            <div className="dish-desc">Madagascar vanilla beans infused in rich cream</div>
            <div className="dish-footer">
              <span className="dish-price">$8.00</span>
              <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
            </div>
          </div>
        </div>
        <div className="dish-card">
          <img className="dish-img" src="https://i.pinimg.com/1200x/73/19/20/7319209836d3804aee783d7abdb982f7.jpg" alt="Chocolate Indulgence"/>
          <div className="dish-body">
            <div className="dish-title">Chocolate Indulgence</div>
            <div className="dish-desc">Belgian chocolate with gold leaf garnish</div>
            <div className="dish-footer">
              <span className="dish-price">$9.00</span>
              <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
            </div>
          </div>
        </div>
        <div className="dish-card">
          <img className="dish-img" src="https://i.pinimg.com/736x/12/e2/fe/12e2fe02d2e9ba338115a951949a4661.jpg" alt="Berry Bliss"/>
          <div className="dish-body">
            <div className="dish-title">Berry Bliss</div>
            <div className="dish-desc">Fresh strawberries with cream swirl</div>
            <div className="dish-footer">
              <span className="dish-price">$8.50</span>
              <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;