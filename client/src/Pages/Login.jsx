import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//components
import Alert from "../Components/Alert.jsx";

const Login = ({ alert, showAlert }) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        userLogin
      );
      if (data.status) {
        console.log(data);
        console.log(data.status);
        showAlert({
          type: "success",
          msg: data.status,
        });

        //token 
        localStorage.setItem("token" ,data.token)

        navigate("/dashboard");
      } else {
        showAlert({
          type: "danger",
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);

      if(localStorage.getItem("token")){
        localStorage.removeItem('token');
      }


      showAlert({
        type: "danger",
        msg: error.response.data.error,
      });
    }
  };


  return (
    <>
      <div>
        <div>
          <h1>TeachMe Login</h1>
        </div>
        <div>
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
                By creating an account you agree to our{""}
                <i>
                  {" "}
                  <a href="#">Terms & Privacy</a>
                </i>
              </p>

              <center>
                <button type="submit">Login</button>
              </center>
            </div>

            <div className="container signin">
              <p>
                Don't have an account <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styles/Login.css";

// // Components
// import Alert from "../Components/Alert.jsx";

// const Login = ({ alert, showAlert }) => {
//   const [userLogin, setUserLogin] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Handle input change
//   const onChangeHandler = (e) => {
//     setUserLogin({
//       ...userLogin,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/user/login",
//         userLogin
//       );

//       if (data.token) {
//         // Store JWT token
//         localStorage.setItem("token", data.token);

//         showAlert({ type: "success", msg: data.status });

//         // Redirect to dashboard
//         navigate("/dashboard");
//       } else {
//         showAlert({ type: "danger", msg: data.error });
//       }
//     } catch (error) {
//       console.error(error);

//       // Remove token if exists
//       if (localStorage.getItem("token")) {
//         localStorage.removeItem("token");
//       }

//       showAlert({
//         type: "danger",
//         msg: error.response?.data?.error || "Something went wrong",
//       });
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>TeachMe Login</h1>
//       <Alert alert={alert} />

//       <form onSubmit={onSubmitHandler}>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={userLogin.email}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={userLogin.password}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <button type="submit" className="login-btn">
//           Login
//         </button>

//         <p className="signin-link">
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
