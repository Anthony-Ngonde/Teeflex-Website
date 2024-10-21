import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "94e3b4f9-7e2d-42df-9719-7e53640ba8e6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset(); // Reset the form
      setShowSuccess(true); // Show success popup
      setTimeout(() => setShowSuccess(false), 3000); // Hide popup after 3 seconds
    } else {
      alert("There was an error. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {showSuccess && (
          <div className="success-popup">
            <span className="success-icon">✔</span>
            <p>Email sent successfully!</p>
          </div>
        )}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We are here to help you on your fitness journey! Whether you have
            questions about our programs, membership options or facility hours,
            feel free to get in touch with us. You can reach us by phone, email
            or by visiting our gym. We're excited to hear from you and assist in
            any way we can!
          </p>
          <div className="contact-details">
            <p><i className="fas fa-envelope"></i> anto.ngonde@gmail.com</p>
            <p><i className="fas fa-phone"></i> 0715198135</p>
            <p><i className="fas fa-map-marker-alt"></i> Imara Daima, Nairobi</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write your message here" required></textarea>
          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;