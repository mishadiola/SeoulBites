import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Got questions or feedback? We'd love to hear from you! Reach out and
          let’s bring you closer to Seoul flavors.
        </p>
      </div>

      <div className="contact-container">
        {}
        <form className="contact-form">
          <h3>Send us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            <strong>Address:</strong> 123 Seoul Street, Dasmariñas, Cavite
          </p>
          <p>
            <strong>Phone:</strong> +63 912 345 6789
          </p>
          <p>
            <strong>Email:</strong> hello@seoulbites.com
          </p>

          {}
          <div className="map-container">
            <iframe
              title="Seoul Bites Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.274490768273!2d120.98221437590504!3d14.329455186173523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cdd34c1d94cf%3A0x3ff6c9c2d06a9b3f!2sDasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1694176093987!5m2!1sen!2sph"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
