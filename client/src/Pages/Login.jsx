import { useTheme } from '../context/ThemeContext';

import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert.jsx";

const Login = ({ alert, showAlert, setCurrentUserId }) => {

  const { isDarkMode, toggleTheme } = useTheme();


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

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/user/login",
  //       userLogin
  //     );

  //     if (data.token) {
  //       localStorage.setItem("userId", data.userId);
  //       setCurrentUserId(data.userId);
  //       axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
  //       localStorage.setItem("token", data.token);

  //       showAlert({
  //         type: "success",
  //         msg: "Login successful!",
  //       });

  //       navigate("/dashboard");
  //     } else {
  //       showAlert({
  //         type: "danger",
  //         msg: data.error || "Login failed!",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("userId");
  //     delete axios.defaults.headers.common["Authorization"];
  //     showAlert({
  //       type: "danger",
  //       msg: error.response?.data?.error || "Server error. Try again!",
  //     });
  //   }
  // };
const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post("http://localhost:5000/api/user/login", userLogin);

    if (data.token) {
      localStorage.setItem("userId", data.userId);
      setCurrentUserId(data.userId);
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
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    delete axios.defaults.headers.common["Authorization"];
    // Use a single alert for all errors
    showAlert({
      type: "danger",
      msg: error.response?.data?.error || "Server error. Try again!",
    });
  }
};
  return (
    <div className="login-page">
     
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-title">Login</h1>
          <p className="signup-link">
            Doesn’t have an account yet? <Link to="/register">Sign Up</Link>
          </p>
          <Alert alert={alert} />

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                name="email"
                value={userLogin.email}
                onChange={onChangeHandler}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter 6 characters or more"
                  name="password"
                  value={userLogin.password}
                  onChange={onChangeHandler}
                  required
                />
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
            </div>

           
           

            <button type="submit" className="login-btn">
              LOGIN
            </button>
            <div className="social-login">
              
            </div>
          </form>
        </div>
        <div className="login-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/470/919/non_2x/email-marketing-illustration-for-design-digital-vector.jpg"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;