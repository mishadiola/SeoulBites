import React from "react";
import "./TaglineSection.css";
import img1 from "../assets/tagline/img1.png";
import img2 from "../assets/tagline/img2.png";
import img3 from "../assets/tagline/img3.png";

export default function TaglineSection() {
  return (
    <section className="tagline-section">
      <h1 className="tagline-title">SPICE . SWEET . SEOUL</h1>
      <p className="tagline-subtitle">
        Bringing the Streets of Seoul to Your Plate.
      </p>

      <div className="tagline-images">
        <img src={img1} alt="Korean Dish 1" />
        <img src={img2} alt="Korean Dish 2" />
        <img src={img3} alt="Korean Dish 3" />
      </div>
    </section>
  );
}
