import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  function onSubmitHandler(e) {
    e.preventDefault();
    // handle login here
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Submit</button>

          <p>
            Don't have an account <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
