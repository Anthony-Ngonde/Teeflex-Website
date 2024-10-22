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
          <p>Elevate your fitness journey with our comprehensive gym offerings. From state-of-the-art equipment to personalized training programs, we are dedicated to helping you achieve your fitness goals.</p>
          <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61564170611436" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/teeflexgym/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/teeflexgym" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.tiktok.com/@teeflexgym?_t=8q7ppy1bVvJ&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaa_K3wsTxK3C2RRKD_9gpmPaJyZ0PErYIq8ydcTuo0x1a2kTdsJhtj7X0E_aem_3nxYIQYmbddk6KMZKVmOlg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@teeflexgymimara" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Business</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Franchise</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Partnership</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Network</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Blogs</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Security</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a></li>
            </ul>
          </div>
</div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Teeflex Gym and Fitness Center. All rights reserved.</p>
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
