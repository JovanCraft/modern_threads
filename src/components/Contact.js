import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h5 className="contact-subtitle">GET IN TOUCH</h5>
        <h2>We'd love to hear from you!</h2>
        <form>
          <label>Name *</label>
          <input type="text" placeholder="Jane Smith" required />

          <label>Email address *</label>
          <input type="email" placeholder="email@website.com" required />

          <label>Phone number *</label>
          <input type="tel" placeholder="555-555-5555" required />

          <label>Message</label>
          <textarea rows="5" placeholder="Girl, I love it here!"/>

          <div className="checkbox-wrap">
            <input type="checkbox" required />
            <span>I allow this website to store my submission so they can respond to my inquiry. *</span>
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
