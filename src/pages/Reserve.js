import React, { useState } from "react";
import './reserve.css';

function Reserve() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-container reserve-page">
      <h1 className="reserve-heading">Reserve a Table</h1>
      <p className="reserve-subhead">Book your unforgettable dining experience at CHOPS</p>
      <form className="reserve-form" onSubmit={handleSubmit}>
        <input type="text" className="reserve-input" placeholder="Your Name" required />
        <input type="email" className="reserve-input" placeholder="Your Email" required />
        <input type="tel" className="reserve-input" placeholder="Phone Number" required />
        <input type="date" className="reserve-input" required />
        <input type="time" className="reserve-input" required />
        <input type="number" className="reserve-input" placeholder="Number of Guests" min="1" max="20" required />
        <textarea className="reserve-input reserve-textarea" placeholder="Special Requests (optional)" />
        <button type="submit" className="reserve-btn">Reserve Now</button>
      </form>
      {submitted && (
        <div className="reserve-success">Reservation submitted! We look forward to welcoming you. 🎉</div>
      )}
    </div>
  );
}

export default Reserve; 