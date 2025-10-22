

import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert.jsx";

const Login = ({ alert, showAlert, setCurrentUserId }) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        userLogin
      );

      if (data.token) {
        // CHANGE: Store userId in localStorage and update App.jsx state
        localStorage.setItem("userId", data.userId);
        setCurrentUserId(data.userId);
        // CHANGE: Set Authorization header for protected routes
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        localStorage.setItem("token", data.token);
        showAlert({
          type: "success",
          msg: "Login successful!",
        });
        navigate("/dashboard");
      } else {
        showAlert({
          type: "danger",
          msg: data.error || "Login failed!",
        });
      }
    } catch (error) {
      console.error(error);
      // CHANGE: Clear userId and Authorization header on error
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      delete axios.defaults.headers.common["Authorization"];
      showAlert({
        type: "danger",
        msg: error.response?.data?.error || "Server error. Try again!",
      });
    }
  };

  return (
    <div>
      <h1>TeachMe Login</h1>
      <Alert alert={alert} />

      <form onSubmit={onSubmitHandler}>
        <div className="container">
          <p>Please fill this form to login</p>
          <hr />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            onChange={onChangeHandler}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            onChange={onChangeHandler}
            required
          />

          <hr />

          <p>
            By creating an account you agree to our{" "}
            <i>
              <a href="#">Terms & Privacy</a>
            </i>
          </p>

          <center>
            <button type="submit">Login</button>
          </center>
        </div>

        <div className="container signin">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;