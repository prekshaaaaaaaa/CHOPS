import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-logo">CHOPS</div>
          <div className="footer-desc">
            Premium dining experience with exceptional cuisine and service.
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="footer-social-icon">📷</a>
            <a href="#" aria-label="Instagram" className="footer-social-icon">📸</a>
            <a href="#" aria-label="Twitter" className="footer-social-icon">🐦</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Quick Links</div>
          <a href="#" className="footer-link">Menu</a>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Reviews</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">Services</div>
          <a href="#" className="footer-link">Private Dining</a>
          <a href="#" className="footer-link">Catering</a>
          <a href="#" className="footer-link">Events</a>
          <a href="#" className="footer-link">Gift Cards</a>
        </div>
        <div className="footer-col">
          <div className="footer-title">Contact Info</div>
          <div className="footer-info">123 Gourmet Avenue</div>
          <div className="footer-info">Downtown District, NY 10001</div>
          <div className="footer-info">(555) 123-CHOPS</div>
          <div className="footer-info">info@chopsrestaurant.com</div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 CHOPS Restaurant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 