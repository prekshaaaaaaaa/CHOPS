import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#111', minHeight: '100vh' }}>
      <div className="dish-section">
        <h1 className="heading">
          Our Signature Menu
        </h1>
        <p className="para1">
          Discover our chef-curated specialties and guest favorites
        </p>
        <div className="dish-list">
          <div className="dish-card">
            <img className="dish-img" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" alt="Classic Burger" />
            <div className="dish-body">
              <div className="dish-title">Classic Burger</div>
              <div className="dish-desc">Juicy beef patty, cheddar, lettuce, tomato, and house sauce</div>
              <div className="dish-footer">
                <span className="dish-price">$12.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/736x/1d/8e/0c/1d8e0c9991b2d309dfe09f2811b6d369.jpg" alt="Grilled Salmon" />
            <div className="dish-body">
              <div className="dish-title">Grilled Salmon</div>
              <div className="dish-desc">Fresh salmon fillet, lemon butter, and seasonal veggies</div>
              <div className="dish-footer">
                <span className="dish-price">$18.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/736x/38/6c/e0/386ce0691d979867a8bdfe781cf67743.jpg" alt="Chocolate Lava Cake" />
            <div className="dish-body">
              <div className="dish-title">Chocolate Lava Cake</div>
              <div className="dish-desc">Warm chocolate cake with gooey center and vanilla ice cream</div>
              <div className="dish-footer">
                <span className="dish-price">$9.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/1200x/18/63/5d/18635db151c11af1d5048b2b8b0d3e78.jpg" alt="Caesar Salad" />
            <div className="dish-body">
              <div className="dish-title">Caesar Salad</div>
              <div className="dish-desc">Crisp romaine, parmesan, croutons, and Caesar dressing</div>
              <div className="dish-footer">
                <span className="dish-price">$10.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" alt="Margherita Pizza" />
            <div className="dish-body">
              <div className="dish-title">Margherita Pizza</div>
              <div className="dish-desc">Classic pizza with tomato, mozzarella, and fresh basil</div>
              <div className="dish-footer">
                <span className="dish-price">$14.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/736x/cb/c9/48/cbc948cdb3b472d1fede9fc5c816e5c2.jpg" alt="Tiramisu" />
            <div className="dish-body">
              <div className="dish-title">Tiramisu</div>
              <div className="dish-desc">Coffee-flavored Italian dessert with mascarpone and cocoa</div>
              <div className="dish-footer">
                <span className="dish-price">$7.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/1200x/ff/02/5b/ff025bc01db3a954679604c06cd73b00.jpg" alt="Lemonade" />
            <div className="dish-body">
              <div className="dish-title">Lemonade</div>
              <div className="dish-desc">Freshly squeezed lemons, sugar, and sparkling water</div>
              <div className="dish-footer">
                <span className="dish-price">$4.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/736x/c3/08/3f/c3083f19382f9853b01595c0cf73adae.jpg" alt="Espresso" />
            <div className="dish-body">
              <div className="dish-title">Espresso</div>
              <div className="dish-desc">Rich and bold Italian espresso shot</div>
              <div className="dish-footer">
                <span className="dish-price">$3.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <img className="dish-img" src="https://i.pinimg.com/1200x/d8/3d/80/d83d8074cfa8c86d815e6a0641b70bc2.jpg" alt="Bruschetta" />
            <div className="dish-body">
              <div className="dish-title">Bruschetta</div>
              <div className="dish-desc">Grilled bread, garlic, tomatoes, olive oil, and basil</div>
              <div className="dish-footer">
                <span className="dish-price">$8.00</span>
                <button className="order-btn" onClick={() => navigate("/order")}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
