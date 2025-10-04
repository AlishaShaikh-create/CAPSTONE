import React from 'react';
import '../Styles/Register.css';


const Register = () => {
  return (
    <div className="register-bw">
      <form className="register-form">
        <h2>Create Your Account</h2>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter your location" />

        <label htmlFor="about">About You</label>
        <textarea id="about" placeholder="Write about yourself"></textarea>

        <label htmlFor="teach">Skills to Teach</label>
        <input type="text" id="teach" placeholder="Skills that you can teach" />

        <label htmlFor="learn">Skills to Learn</label>
        <input type="text" id="learn" placeholder="Skills that you want to learn" />

        <button type="submit" className="bw-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
