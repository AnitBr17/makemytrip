import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any questions or assistance</p>
      </section>

      <section className="contact-content container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p><i className="fas fa-map-marker-alt"></i> 123 Travel Street, Mumbai, India</p>
            <p><i className="fas fa-phone"></i> +91 123 456 7890</p>
            <p><i className="fas fa-envelope"></i> info@destinationplanner.com</p>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;