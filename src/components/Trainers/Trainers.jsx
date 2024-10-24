import React from 'react';
import trainer_img from '../../assets/trainer.jpg'
import './Trainers.css';

function Trainers() {
    const trainer = {
        name: 'Augustine Otieno',
        specialty: 'Body Building and Fat Loss',
        image: trainer_img
    };

    return (
        <section id="trainers" className="trainers">
          <div className="trainers-container">
            <h2>Our Expert Trainer</h2>
            <div className="trainer-card">
                <img src={trainer.image} alt={`${trainer.name}`} className="trainer-image" />
                <h3>{trainer.name}</h3>
                <p>{trainer.specialty}</p>
            </div>
          </div>
        </section>
      );
}

export default Trainers;
