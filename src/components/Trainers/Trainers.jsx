import React from 'react';
import trainer_img from '../../assets/trainer.jpg';
import './Trainers.css';

function Trainers() {
    const trainer = {
        name: 'Augustine Otieno',
        specialty: 'With years of experience in the fitness industry, Augustine Otieno is an expert in body building and fat loss. His training programs are tailored to help clients achieve their personal fitness goals by building muscle mass, shedding excess fat and adopting a healthier lifestyle. Augustine’s approach focuses on discipline, proper technique and sustainable workout programs to ensure long-term success.',
        image: trainer_img
    };

    return (
        <section id="trainers" className="trainers">
          <div className="trainers-container">
            <h2>Our Expert Trainer</h2>
            <div className="trainer-image-container">
                <img src={trainer.image} alt={`${trainer.name}`} className="trainer-image-small" />
            </div>
            <h3 className="trainer-name">{trainer.name}</h3>
            <p className="trainer-description">{trainer.specialty}</p>
          </div>
        </section>
    );
}

export default Trainers;