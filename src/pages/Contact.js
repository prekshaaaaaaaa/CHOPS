import React from "react";
import './contact.css';

function Contact() {
  return (
    <div className="page-container contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <img src="https://i.pinimg.com/736x/71/6b/82/716b820a8a1d65e7f0bfd5bdb4636dca.jpg" alt="CHOPS Location" className="contact-location-img" />
      <p className="contact-desc">We'd love to hear from you! Reach out for reservations, feedback, or any questions.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" required />
        <input type="email" placeholder="Your Email" className="contact-input" required />
        <textarea placeholder="Your Message" className="contact-input contact-textarea" required></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
      <div className="contact-details">
        <div><strong>Email:</strong> info@chops.com</div>
        <div><strong>Phone:</strong> +91 98765 43210</div>
        <div><strong>Address:</strong> 123 Culinary Lane, Food City</div>
      </div>
    </div>
  );
}

export default Contact; 