import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's talk</h2>
          <p>I'm currently available to take on new projects so feel free to send me a message about anything that you want to work on. You can contact anytime.</p>
          <div className="contact-details">
            <p><i className="fas fa-envelope"></i> info@teeflexgym.com</p>
            <p><i className="fas fa-phone"></i> 0706734388</p>
            <p><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Write your message here" required></textarea>
          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;