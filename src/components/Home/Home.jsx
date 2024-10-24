import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home">
      <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-content">
          <h1>SHAPE <span>YOUR BODY</span></h1>
          <h2>STAY <span>FIT</span></h2>
          <h2>STAY <span>STRONG</span></h2>
          <Link to="/join" className='button-link'>Join Us</Link> 
        </div>
      </div>
      <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="slide-content">
          <h2>CONSISTENCY IS KEY</h2>
          <h3><span>TO SUCCESS IN THE GYM</span></h3>
        </div>
      </div>
    </section>
  );
}

export default Home;