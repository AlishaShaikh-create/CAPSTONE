import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";


const Login = () => {

  

  return (
   <>
   <div>
    <form >
       <h1>Login</h1>
       
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <p>Don't have an account 
          {/* <a href="Register">Register</a> */}
          <Link to="/Register">Register</Link>
        </p>
    </form>
   </div>
   </>
  );
};

export default Login;
