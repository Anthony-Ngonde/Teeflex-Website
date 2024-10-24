import React from 'react';
import './Program.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Program() {
  return (
    <section id="program" className="program">
      <div className="program-container">
        <div className="program-info">
          <h2>Program</h2>
          <p>Experience a wide range of fitness programs designed to help you achieve your health and wellness goals. Our expert trainers are here to guide you every step of the way.</p>
          <div className="program-features">
            <div className="feature">
              <i className="fas fa-dumbbell"></i>
              <h3>Strength Training</h3>
              <p>Build muscle and increase your strength</p>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <h3>Group Classes</h3>
              <p>Join our energetic group workout sessions</p>
            </div>
            <div className="feature">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Personal Training</h3>
              <p>Get one-on-one attention from our expert trainers</p>
            </div>
          </div>
        </div>
        <div className="program-timetable">
          <h3>Weekly Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Days/Time</th>
                <th>Morning @4:45am</th>
                <th>Evening @6:30pm</th>
                <th>Wazito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Full body circuit</td>
                <td>Full body circuit</td>
                <td>Back Workouts</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Crossfit</td>
                <td>Tyre workouts</td>
                <td>Shoulders</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Leg day</td>
                <td>Leg day</td>
                <td>Leg day</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Aerobics</td>
                <td>Aerobics & Tabata</td>
                <td>Chest day & Arms</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Tyre workouts</td>
                <td>Rest</td>
                <td>Cardio</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td colSpan="3">Weekend Challenge @6:00am</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td colSpan="3">Rest</td>
              </tr>
            </tbody>
          </table>
          <p className="charges">Charges: 100/= on holidays for Monthly subscribers</p>
        </div>
      </div>
    </section>
  );
}

export default Program;