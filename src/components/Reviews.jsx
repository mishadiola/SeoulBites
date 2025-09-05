import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Taylor Swift",
      rating: "4.9/5",
      text: "Their Tteokbokki and Ramyun combo instantly reminded me of Korean street food stalls I’ve seen in K-dramas. Affordable, delicious, and comforting!",
      bg: "yellow",
      img: "/reviews/Taylor.png",
    },
    {
      name: "Jeon Jeoungguk",
      rating: "5/5",
      text: "Seoul Bites has quickly become my favorite hangout. Great food, friendly vibe, and the Banana Milk is a must-try. Can’t wait to come back!",
      bg: "brown",
      img: "/reviews/Jeon.png",
    },
    {
      name: "Alden Richards",
      rating: "5/5",
      text: "I ordered Japchae and Kimchi Fried Rice, and both were flavorful and filling. Overall, worth every peso.",
      bg: "red",
      img: "/reviews/Alden.png",
    },
    {
      name: "Elle Fanning",
      rating: "4.9/5",
      text: "I tried their Bibimbap promo and wow — super fresh ingredients, balanced flavors, and the gochujang sauce hits just right. Feels like a taste of Seoul here in the city.",
      bg: "green",
      img: "/reviews/Elle.png",
    },
  ];

  return (
    <section className="reviews">
      <h3 className="reviews-subtitle">Guest Testimonial</h3>
      <h2 className="reviews-title">What They Say?</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className={`review-card ${review.bg}`} key={index}>
            <div className="review-header">
              <img src={review.img} alt={review.name} className="review-img" />
              <div>
                <h4 className="review-name">{review.name}</h4>
                <p className="review-text">{review.text}</p>
              </div>
            </div>
            <span className="review-rating">⭐ {review.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
