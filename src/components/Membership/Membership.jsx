import React from 'react';
import './Membership.css';

function Membership() {
  return (
    <section id="membership" className="membership">
      <div className="membership-container">
        <div className="membership-info">
          <h2>Membership Rates</h2>
          <p>Choose the membership plan that fits your lifestyle and fitness goals. All plans include access to our state-of-the-art equipment and facilities.</p>
          <div className="membership-features">
            <div className="feature">
              <i className="fas fa-calendar-alt"></i>
              <h3>Flexible Options</h3>
              <p>Daily, weekly, and monthly plans available</p>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <h3>Group Discounts</h3>
              <p>Special rates for group work out sessions</p>
            </div>
            <div className="feature">
              <i className="fas fa-dumbbell"></i>
              <h3>Personal Training</h3>
              <p>One-on-one sessions with our expert trainers</p>
            </div>
          </div>
        </div>
        <div className="membership-rates">
          <h3>Teeflex Fitness Centre Rates</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Daily</th>
                <th>Weekly</th>
                <th>Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body Building without trainer</td>
                <td>150/-</td>
                <td>700/-</td>
                <td>2500/-</td>
              </tr>
              <tr>
                <td>Body Building with trainer</td>
                <td>350/-</td>
                <td>1500/-</td>
                <td>4500/-</td>
              </tr>
              <tr>
                <td>Group Work Out with trainer</td>
                <td>350/-</td>
                <td>1500/-</td>
                <td>4500/-</td>
              </tr>
              <tr>
                <td>Personal Training</td>
                <td>450/-</td>
                <td>2000/-</td>
                <td>6000/-</td>
              </tr>
              <tr>
                <td>Membership Annually</td>
                <td>500/-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <p className="contact">TEL 0700504156 / 0715198135</p>
        </div>
      </div>
    </section>
  );
}

export default Membership;