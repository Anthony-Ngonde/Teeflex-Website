import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://i.pinimg.com/236x/8a/8a/36/8a8a36cb4d4eaa5ae4e874ec9567a7e1.jpg" alt="About Teeflex Gym" />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <p>At Teeflex Gym and Fitness Centre, we're dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. Our state-of-the-art facilities, expert trainers, and diverse range of programs cater to all fitness levels and interests.</p>
          <p>Whether you're just starting your fitness journey or you're a seasoned athlete, we provide the support, guidance, and motivation you need to succeed. Join our community and experience the Teeflex difference today!</p>
        </div>
      </div>
    </section>
  );
}

export default About;