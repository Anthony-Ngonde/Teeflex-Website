import React from 'react';
import about_img from '../../assets/about-photo.jpg'
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={about_img} loading='lazy' alt="About Teeflex Gym" />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <p>At Teeflex Gym and Fitness Centre, we are dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. Our state-of-the-art facilities, expert trainer and diverse range of programs cater to all fitness levels and interests.</p>
          <p>Whether you are just starting your fitness journey or you are a seasoned athlete, we provide the support, guidance and motivation you need to succeed. Join our community and experience the Teeflex difference today!</p>
        </div>
      </div>
    </section>
  );
}

export default About;