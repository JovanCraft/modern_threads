import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h5 className="about-highlight">DISCOVER MODERN THREADS</h5>
          <h2>Your style, our passion</h2>
          <p>
            Modern Threads brings you stylish, high-quality apparel that elevates your wardrobe.
            Our collections are curated with care, ensuring that every piece embodies contemporary fashion and comfort.
            Experience a seamless shopping journey with our user-friendly interface,
            designed to showcase our latest trends and timeless essentials.
            Whether you're dressing for work or a night out, we have the perfect outfit for every occasion.
            Join us in celebrating fashion that makes a statement.
          </p>
          <a href="/contact" className="about-link">Get in touch</a>
        </div>
        <div className="about-image" />
      </div>
    </section>
  );
}

export default About;
