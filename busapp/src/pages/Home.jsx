import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Bus Tracker</h1>
        <p>Track your bus in real-time and never miss your ride again!</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Real-Time Tracking</h2>
          <p>Monitor the location of your bus live with our accurate tracking system.</p>
        </div>
        <div className="feature">
          <h2>Schedule Management</h2>
          <p>View and manage bus schedules with ease.</p>
        </div>
        <div className="feature">
          <h2>Seat Availability</h2>
          <p>Check seat availability before you board the bus.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
