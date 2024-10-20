import React, { useState, useEffect } from 'react';
import logo from '../../assets/teeflex-logo.png';
import './Footer.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Teeflex Fitness Logo" />
          <p>Elevate your fitness journey with our comprehensive gym offerings. From state-of-the-art equipment to personalized training programs, we're dedicated to helping you achieve your fitness goals.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a> {/* Added TikTok Icon */}
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Business</a></li>
              <li><a href="#">Franchise</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Network</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Web Design Mastery. All rights reserved.</p>
        {isVisible && (
          <button className="back-to-top" 
          title='back to top'
          onClick={scrollToTop}>
            ↑ 
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
