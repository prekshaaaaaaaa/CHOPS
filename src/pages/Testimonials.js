import React from "react";
import './testimonials.css';
import './visit.css';
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="testimonials-section">
        <h1 className="testimonials-heading">What Our Guests Say</h1>
        <p className="testimonials-subhead">
          Experience the excellence through our customers' words
        </p>
        <div className="testimonials-list">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">
              "Absolutely incredible dining experience! The ribeye was cooked to perfection and the service was exceptional. Will definitely be returning soon."
            </div>
            <div className="testimonial-user">
              <div className="testimonial-avatar">👤</div>
              <div>
                <div className="testimonial-name">Sarah Johnson</div>
                <div className="testimonial-role">Food Enthusiast</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">
              "The atmosphere is perfect for special occasions. The salmon was fresh and beautifully presented. Outstanding culinary craftsmanship!"
            </div>
            <div className="testimonial-user">
              <div className="testimonial-avatar">👤</div>
              <div>
                <div className="testimonial-name">Michael Chen</div>
                <div className="testimonial-role">Business Executive</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">
              "Every detail was perfect from start to finish. The chocolate lava cake was divine! This is now our go-to restaurant for celebrations."
            </div>
            <div className="testimonial-user">
              <div className="testimonial-avatar">👤</div>
              <div>
                <div className="testimonial-name">Emily Rodriguez</div>
                <div className="testimonial-role">Local Resident</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visit-section">
        <h1 className="visit-heading">Visit Us Today</h1>
        <p className="visit-subhead">Experience culinary excellence at CHOPS</p>
        <div className="visit-content">
          <div className="visit-info">
            <div className="visit-info-block">
              <div className="visit-icon location-icon">📍</div>
              <div>
                <div className="visit-label">Location</div>
                <div className="visit-detail">123 Gourmet Avenue<br/>Downtown District, NY 10001</div>
              </div>
            </div>
            <div className="visit-info-block">
              <div className="visit-icon hours-icon">⏰</div>
              <div>
                <div className="visit-label">Hours</div>
                <div className="visit-detail">
                  Monday - Thursday: 5:00 PM - 10:00 PM<br/>
                  Friday - Saturday: 5:00 PM - 11:00 PM<br/>
                  Sunday: 4:00 PM - 9:00 PM
                </div>
              </div>
            </div>
            <div className="visit-info-block">
              <div className="visit-icon reservations-icon">📞</div>
              <div>
                <div className="visit-label">Reservations</div>
                <div className="visit-detail">(555) 123-CHOPS<br/>reservations@chopsrestaurant.com</div>
              </div>
            </div>
            <button className="visit-reserve-btn" onClick={() => navigate('/reserve')}>Make a Reservation</button>
          </div>
          <div className="visit-map">
            <img src="https://i.pinimg.com/1200x/62/df/ef/62dfefc5b636ec353ed1efb026491e52.jpg" alt="Map" className="visit-map-img" style={{borderRadius: '20px', width: '100%', height: 'auto'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 
