import React from 'react';
import './Trainers.css';

function Trainers() {
    const trainers = [
        { name: 'John Doe', specialty: 'Strength & Conditioning', image: 'https://i.pinimg.com/control/236x/43/c9/36/43c936339f94cd2842a6069b8b913f07.jpg' },

        { name: 'Jane Smith', specialty: 'Yoga & Pilates', image: 'https://i.pinimg.com/control/236x/43/c9/36/43c936339f94cd2842a6069b8b913f07.jpg' },
        { name: 'Mike Johnson', specialty: 'Cardio & HIIT', image: 'https://i.pinimg.com/control/236x/43/c9/36/43c936339f94cd2842a6069b8b913f07.jpg' },
      ];

      return (
        <section id="trainers" className="trainers">
          <div className="trainers-container">
            <h2>Our Expert Trainers</h2>
            <div className="trainer-cards">
              {trainers.map((trainer, index) => (
                <div key={index} className="trainer-card">
                  <img src={trainer.image} alt={`${trainer.name}`} className="trainer-image" />
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