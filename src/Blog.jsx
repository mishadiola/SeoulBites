import React from "react";
import "./Blog.css";
import heroGif from "./assets/blog/hero.gif";
import inspirationGif from "./assets/blog/inspiration.gif";
import processGif from "./assets/blog/process.gif";
import featuresGif from "./assets/blog/features.gif";
import learningGif from "./assets/blog/learning.gif";
import nextGif from "./assets/blog/next.gif";

export default function Blog() {
  return (
    <div className="sb-blog">
      {}
      <header className="blog-hero">
        <img src={heroGif} alt="Seoul Bites Hero" className="hero-img" />
      </header>

      {}
      <div className="blog-content">
        <section className="blog-section">
          <div className="blog-text">
            <h2>✨ The Inspiration</h2>
            <p>
              Seoul Bites is inspired by my love for Korean food and digital
              creativity. I wanted to merge design, coding, and storytelling
              into one project. What better way than to create an e-commerce
              platform where Korean flavors meet modern design?
            </p>
          </div>
          <img src={inspirationGif} alt="Inspiration" className="blog-img" />
        </section>

        <section className="blog-section reverse">
          <img src={processGif} alt="Process" className="blog-img" />
          <div className="blog-text">
            <h2>💻 The Process</h2>
            <p>
              The journey began with sketches and mood boards. I carefully
              selected fonts, colors, and layouts that would give the brand an
              authentic yet modern Korean aesthetic. Then I moved to development
              with <strong>React</strong>, building pages like Home, Menu,
              Contact, and the Shopping Cart.
            </p>
            <p>
              Along the way, I encountered challenges with styling, responsive
              layouts, and cart logic. Debugging was tough, but every hurdle
              taught me new tricks in CSS and React.
            </p>
          </div>
        </section>

        <section className="blog-section">
          <div className="blog-text">
            <h2>🛠️ The Features</h2>
            <ul>
              <li>Interactive Navbar with smooth navigation</li>
              <li>Dynamic product cards and Add-to-Cart functionality</li>
              <li>Creative contact page for easy reach</li>
              <li>Modern footer with quick links and socials</li>
            </ul>
          </div>
          <img src={featuresGif} alt="Features" className="blog-img" />
        </section>

        <section className="blog-section reverse">
          <img src={learningGif} alt="Learning" className="blog-img" />
          <div className="blog-text">
            <h2>🌟 What I Learned</h2>
            <p>
              This project taught me not only coding but also patience, design
              thinking, and problem-solving. I realized creating something
              meaningful takes time, creativity, and persistence. Every bug
              fixed and every design choice refined brought Seoul Bites closer
              to life.
            </p>
          </div>
        </section>

        <section className="blog-section">
          <div className="blog-text">
            <h2>🚀 The Next Steps</h2>
            <p>
              Seoul Bites is just the beginning. My goal is to keep enhancing
              the site—integrating a payment system, a customer profile, login
              and Sign Up, and a full admin dashboard. This journey excites me
              for more projects that combine my love for tech and creativity.
            </p>
          </div>
          <img src={nextGif} alt="Next Steps" className="blog-img" />
        </section>
      </div>
    </div>
  );
}
