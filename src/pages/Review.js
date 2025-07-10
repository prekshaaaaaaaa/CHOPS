import React from "react";
import "./review.css";
const reviews = [
  {
    stars: 5,
    text: "Absolutely incredible dining experience! The ribeye was cooked to perfection and the service was exceptional. Will definitely be returning soon.",
    name: "Sarah Johnson",
    role: "Food Enthusiast",
  },
  {
    stars: 5,
    text: "The atmosphere is perfect for special occasions. The salmon was fresh and beautifully presented. Outstanding culinary craftsmanship!",
    name: "Michael Chen",
    role: "Business Executive",
  },
  {
    stars: 5,
    text: "Every detail was perfect from start to finish. The chocolate lava cake was divine! This is now our go-to restaurant for celebrations.",
    name: "Emily Rodriguez",
    role: "Local Resident",
  },
  {
    stars: 4,
    text: "Great ambiance and friendly staff. The steak was juicy and flavorful, though the wait time was a bit long. Overall, a wonderful experience!",
    name: "Amit Patel",
    role: "Travel Blogger",
  },
  {
    stars: 5,
    text: "The desserts are out of this world! Especially loved the Choco Lava Cake. Will recommend to all my friends.",
    name: "Priya Sharma",
    role: "Dessert Lover",
  },
  {
    stars: 4,
    text: "Lovely place for a family dinner. The kids enjoyed the pizza and the staff was very accommodating.",
    name: "Ravi Verma",
    role: "Parent",
  },
  {
    stars: 5,
    text: "A hidden gem! The seafood platter was fresh and delicious. The chef even came out to greet us. Five stars!",
    name: "Linda Green",
    role: "Food Critic",
  },
  {
    stars: 5,
    text: "Impeccable service and a beautiful setting. Perfect for date night. The wine selection is top-notch.",
    name: "Carlos Mendez",
    role: "Sommelier",
  },
];

function Review() {
  return (
    <div className="page-container review-page">
      <h1 className="review-heading">What Our Guests Say</h1>
      <p className="review-subhead">See what makes CHOPS unforgettable</p>
      <div className="review-list">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-stars">{"★".repeat(r.stars)}</div>
            <div className="review-text">“{r.text}”</div>
            <div className="review-user">
              <div className="review-avatar">👤</div>
              <div>
                <div className="review-name">{r.name}</div>
                <div className="review-role">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review; 
