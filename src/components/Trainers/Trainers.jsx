import React from 'react';
import './Trainers.css';

function Trainers() {
  const trainers = [
    { name: 'John Doe', specialty: 'Strength & Conditioning' },
    { name: 'Jane Smith', specialty: 'Yoga & Pilates' },
    { name: 'Mike Johnson', specialty: 'Cardio & HIIT' },
  ];

  return (
    <section id="trainers" className="trainers">
      <div className="trainers-container">
        <h2>Our Expert Trainers</h2>
        <div className="trainer-cards">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <div className="trainer-image"></div>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;