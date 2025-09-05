import React from "react";
import "./HistorySection.css";
import history1 from "../assets/history/history1.png";
import history2 from "../assets/history/history2.png";
import history3 from "../assets/history/history3.png";

const HistorySection = () => {
  return (
    <section className="history-section">
      {}
      <div className="history-header">
        <h2>History</h2>
        <p>
          Seoul Bites, founded in 2025, was created to bring authentic Korean
          flavors closer to the community. From rice meals and noodles to street
          snacks and drinks, we blend tradition with modern taste — giving
          everyone a chance to enjoy the vibrant food culture of Seoul, one bite
          at a time.
        </p>
      </div>

      {}
      <div className="history-grid">
        <img src={history1} alt="Korean Dish" />
        <img src={history2} alt="Korean Snacks" />
        <img src={history3} alt="Korean Food" />
      </div>
    </section>
  );
};

export default HistorySection;
