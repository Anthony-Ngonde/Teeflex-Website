import React, { useState, useEffect } from 'react';
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
          <h1>SHAPE YOUR BODY</h1>
          <h2>STAY <span>FIT</span></h2>
          <h2>STAY <span>STRONG</span></h2>
          <button className="join-btn">JOIN US</button>
        </div>
      </div>
      <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="slide-content">
          <h2>CONSISTENCY IS KEY</h2>
          <h3>TO SUCCESS IN THE GYM</h3>
        </div>
      </div>
    </section>
  );
}

export default Home;