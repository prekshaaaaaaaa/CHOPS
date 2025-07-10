import React from "react";
import './about.css';

function About() {
  return (
    <div className="page-container about-page">
      <h1>About Us</h1>
      <img src="https://i.pinimg.com/736x/c9/b3/fc/c9b3fc3c388cf7cd28ffec31c2fef353.jpg" alt="CHOPS Restaurant" className="about-restaurant-img" />

      <p>Welcome to CHOPS! We are passionate about delivering an unforgettable dining experience where every dish tells a story of flavor, tradition, and innovation.</p>
      <h2>Our Story</h2>
      <p>Founded over 15 years ago, CHOPS began as a small family-run eatery and has grown into a culinary destination known for its creative fusion of classic and contemporary cuisine. Our journey is rooted in a love for food, hospitality, and community.</p>
      <h2>Our Mission</h2>
      <p>We strive to use only the finest, locally sourced ingredients, prepared with care and artistry by our talented chefs. Our mission is to delight every guest with exceptional food, warm service, and a welcoming atmosphere.</p>
      <h2>Meet Our Chefs</h2>
      <div className="about-chefs">
        <div className="about-chef-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Chef Arjun Mehra" className="about-chef-img" />
          <div><strong>Chef Arjun Mehra</strong><br/>Executive Chef, renowned for his innovative approach to traditional recipes.</div>
        </div>
        <div className="about-chef-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Chef Priya Singh" className="about-chef-img" />
          <div><strong>Chef Priya Singh</strong><br/>Pastry Chef, creator of our signature desserts including the famous Choco Lava Cake.</div>
        </div>
      </div>
      <h2>What Makes Us Unique?</h2>
      <ul>
        <li>Signature dishes crafted with a blend of global and local flavors</li>
        <li>Seasonal menus and chef’s specials</li>
        <li>Elegant, cozy ambiance perfect for any occasion</li>
        <li>Commitment to sustainability and community engagement</li>
      </ul>
    </div>
  );
}

export default About; 