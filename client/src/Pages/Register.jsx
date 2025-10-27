// import React ,{useState} from 'react';

// import axios from 'axios'
// // Alert component
// import Alert from '../Components/Alert.jsx';

// import {Link ,useNavigate} from 'react-router-dom'



// //Style
// import '../Styles/Register.css';

// const Register = ({alert,showAlert}) => {
  
//   const [registerFormData , setRegisterFormData] = useState({
//     name:"",
//     email:"",
//     phone:"",
//     password:"",
//     passwordRepeat:"",
//     location:"",
//     about:"",
//     teach:"",
//     learn:""
//   });

//   let navigate = useNavigate();


// const onChangeHandler = (e) =>{
//   try{
//      console.log(e.target.name , e.target.value);
//     setRegisterFormData({
//       ...registerFormData,
//       [e.target.name]:e.target.value
//     })

//   }catch(error)
//   {
//     console.log(error);
//   }
// }  

// const onSubmitHandler =  async(e) =>{
// try
// {
//   e.preventDefault();


//   if(registerFormData.password!== registerFormData.passwordRepeat)
//   {
   
//      showAlert({
//                   type: 'danger',
//                   msg: 'password does not match'
//                 })
//   }

//   else{
//     const {data} =  await axios.post("http://localhost:5000/api/user/register",registerFormData)
//     //  console.log(data);
//       showAlert({
//                   type: 'success',
//                   msg: data.success
//                 })
//     console.log("data send");
//   }
// navigate('/login' , {replace:true})

// }catch(error)
// {
//   console.log(error);
//   showAlert({
//     type:"danger",
//     msg:error.response.data.error
//   })
// }

// }




// // Frontend code
//   return (
//     <div className="register-bw">
//       <Alert alert={alert}/>
//       <form className="register-form" onSubmit={onSubmitHandler}>
//         <h2>Create Your Account</h2>

//         <label htmlFor="name">Name</label>
//         <input type="text" id="name"name="name"  placeholder="Enter your name" required onChange={onChangeHandler} />

//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" placeholder="Enter your email" required  onChange={onChangeHandler}/>

    
//         <label htmlFor="phone">Phone</label>
//         <input type="tel" id="phone" placeholder="Enter your Phone number" name="phone"required onChange={onChangeHandler} />

//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" placeholder="Enter your password" name="password" required onChange={onChangeHandler}/>

//         <label htmlFor="passwordRepeat">Re-Enter Password</label>
//         <input type="password" id="passwordRepeat" placeholder="Re - Enter password"  name="passwordRepeat" required onChange={onChangeHandler}/>

//         <label htmlFor="location">Location</label>
//         <input type="text" id="location" placeholder="Enter your location" name="location" onChange={onChangeHandler} />

//         <label htmlFor="about">About You</label>
//         <textarea id="about" placeholder="Write about yourself" name="about" onChange={onChangeHandler}></textarea>

//         <label htmlFor="teach">Skills to Teach</label>
//         <input type="text" id="teach" placeholder="Skills that you can teach" name="teach" onChange={onChangeHandler} />

//         <label htmlFor="learn">Skills to Learn</label>
//         <input type="text" id="learn" placeholder="Skills that you want to learn" name="learn" onChange={onChangeHandler}/>
        

//         <button type="submit" className="bw-btn">Register</button>
//         {/* <Link  to ='/login'className="bw-btn">Register</Link> */}

//         <div>
//               <p>
//                 Already have an account ? <Link to="/login">Login</Link>
//               </p>
//             </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
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

      if (registerFormData.password !== registerFormData.passwordRepeat) {
        showAlert({
          type: "danger",
          msg: "password does not match",
        });
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/user/register",
          registerFormData
        );
        //  console.log(data);
        showAlert({
          type: "success",
          msg: data.success,
        });
        console.log("data send");
      }
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      showAlert({
        type: "danger",
        msg: error.response.data.error,
      });
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
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/470/919/non_2x/email-marketing-illustration-for-design-digital-vector.jpg"
            alt="register"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;