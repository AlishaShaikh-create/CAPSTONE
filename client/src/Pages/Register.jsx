


import React, { useState, useEffect } from "react";
import axios from "axios";
// Alert component
import Alert from "../Components/Alert.jsx";
import { Link, useNavigate } from "react-router-dom";

//Style
import "../Styles/Register.css";

const Register = ({ alert, showAlert }) => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordRepeat: "",
    location: "",
    about: "",
    teach: "",
    learn: "",
  });

  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    try {
      console.log(e.target.name, e.target.value);
      setRegisterFormData({
        ...registerFormData,
        [e.target.name]: e.target.value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      // Clear any existing alert before showing a new one
      // Note: This assumes showAlert can handle clearing; adjust parent if needed
      showAlert({ type: "", msg: "" }); // Attempt to clear alert

      if (registerFormData.password !== registerFormData.passwordRepeat) {
        showAlert({
          type: "danger",
          msg: "password does not match",
        });
        return; // Do not navigate if passwords don't match
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/user/register",
          registerFormData
        );
        showAlert({
          type: "success",
          msg: data.success,
        });
        console.log("data send");
      }
      // Navigate only if passwords match and registration succeeds
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000); // Delay to show alert
    } catch (error) {
      console.log(error);
      showAlert({
        type: "danger",
        msg: error.response?.data?.error || "Registration failed",
      });
      // Navigate on other errors with delay
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000); // Delay to show alert
    }
  };

  // Frontend code
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">Create Your Account</h2>
          <p className="signup-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <Alert alert={alert} />
          <form className="register-form" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your Phone number"
                name="phone"
                required
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                required
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="passwordRepeat">Re-Enter Password</label>
              <input
                type="password"
                id="passwordRepeat"
                placeholder="Re - Enter password"
                name="passwordRepeat"
                required
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                name="location"
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="about">About You</label>
              <textarea
                id="about"
                placeholder="Write about yourself"
                name="about"
                onChange={onChangeHandler}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="teach">Skills to Teach</label>
              <input
                type="text"
                id="teach"
                placeholder="Skills that you can teach"
                name="teach"
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label htmlFor="learn">Skills to Learn</label>
              <input
                type="text"
                id="learn"
                placeholder="Skills that you want to learn"
                name="learn"
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>
        </div>
        <div className="login-image">
         
        </div>
      </div>
    </div>
  );
};

export default Register;