import React from 'react';
import './AdminMain.css'; // Assuming you have some CSS for styling
import AdminImage from '../assets/images/AdminImage.jpeg';
import Header from './AdminHeader';
import Footer from './AdminFooter';

const AdminMain = () => {
  return (
    <div className="AdminMain">
      <Header />
      
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Customizable Calendars</h3>
            <p>Create and manage your own schedules with ease.</p>
          </div>
          <div className="feature">
            <h3>Task Lists</h3>
            <p>Prioritize and track your tasks effectively.</p>
          </div>
          <div className="feature">
            <h3>Reminders</h3>
            <p>Set reminders to stay on top of important deadlines.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits</h2>
        <ul>
          <li>Increased productivity</li>
          <li>Better time management</li>
          <li>Enhanced organization</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"This system has transformed the way I manage my schedule!"</p>
            <cite>- Alex, Student</cite>
          </div>
          <div className="testimonial">
            <p>"A must-have tool for every educator."</p>
            <cite>- Dr. Smith, Professor</cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminMain;
