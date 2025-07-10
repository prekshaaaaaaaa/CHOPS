import React from "react";
import './menuPage.css';

const menuItems = [
  {
    name: "Classic Burger",
    price: "$12.00",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80", // burger
    desc: "Juicy beef patty, cheddar, lettuce, tomato, and house sauce."
  },
  {
    name: "Grilled Salmon",
    price: "$18.00",
    img: "https://i.pinimg.com/736x/1d/8e/0c/1d8e0c9991b2d309dfe09f2811b6d369.jpg", // salmon
    desc: "Fresh salmon fillet, lemon butter, and seasonal veggies."
  },
  {
    name: "Chocolate Lava Cake",
    price: "$9.00",
    img: "https://i.pinimg.com/736x/38/6c/e0/386ce0691d979867a8bdfe781cf67743.jpg", // chocolate lava cake
    desc: "Warm chocolate cake with gooey center and vanilla ice cream."
  },
  {
    name: "Caesar Salad",
    price: "$10.00",
    img: "https://i.pinimg.com/1200x/18/63/5d/18635db151c11af1d5048b2b8b0d3e78.jpg", // caesar salad
    desc: "Crisp romaine, parmesan, croutons, and Caesar dressing."
  },
  {
    name: "Bruschetta",
    price: "$8.00",
    img: "https://i.pinimg.com/1200x/d8/3d/80/d83d8074cfa8c86d815e6a0641b70bc2.jpg", // bruschetta
    desc: "Grilled bread, garlic, tomatoes, olive oil, and basil."
  },
  {
    name: "Margherita Pizza",
    price: "$14.00",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80", // margherita pizza
    desc: "Classic pizza with tomato, mozzarella, and fresh basil."
  },
  {
    name: "Tiramisu",
    price: "$7.00",
    img: "https://i.pinimg.com/736x/cb/c9/48/cbc948cdb3b472d1fede9fc5c816e5c2.jpg", // tiramisu
    desc: "Coffee-flavored Italian dessert with mascarpone and cocoa."
  },
  {
    name: "Lemonade",
    price: "$4.00",
    img: "https://i.pinimg.com/1200x/ff/02/5b/ff025bc01db3a954679604c06cd73b00.jpg", // lemonade
    desc: "Freshly squeezed lemons, sugar, and sparkling water."
  },
  {
    name: "Espresso",
    price: "$3.00",
    img: "https://i.pinimg.com/736x/c3/08/3f/c3083f19382f9853b01595c0cf73adae.jpg", // espresso
    desc: "Rich and bold Italian espresso shot."
  },
];



function MenuPage() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Signature Menu</h1>
      <p className="menu-subtitle">Discover our chef-curated specialties and guest favorites</p>
      <div className="menu-collection">
        {menuItems.map((item, idx) => (
          <div className="menu-card" key={idx}>
            <img className="menu-img" src={item.img} alt={item.name} />
            <div className="menu-card-content">
              <div className="menu-name">{item.name}</div>
              <div className="menu-desc">{item.desc}</div>
              <div className="menu-footer">
                <span className="menu-price">{item.price}</span>
                <button className="menu-order-btn">Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      </div>
  );
}

export default MenuPage; 