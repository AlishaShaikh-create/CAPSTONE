import React ,{useState} from 'react';
import '../Styles/Register.css';
import axios from 'axios'
// Alert component
import Alert from '../Components/Alert.jsx';
import {Link} from 'react-router-dom'



const Register = ({alert,showAlert}) => {
  
  const [registerFormData , setRegisterFormData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    passwordRepeat:"",
    location:"",
    about:"",
    teach:"",
    learn:""
  });

// On change handler
const onChangeHandler = (e) =>{
  try{
    console.log(e.target.name , e.target.value);
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]:e.target.value
    })

  }catch(error)
  {
    console.log(error);
  }
}  

// after submitting the form data
const onSubmitHandler =  async(e) =>{
try
{
  e.preventDefault();
  console.log(registerFormData);
  // This code is if the form passwords does not match
  if(registerFormData.password!=registerFormData.passwordRepeat)
  {
    // console.log("Password do not match");
     showAlert({
                  type: 'danger',
                  msg: 'password does not match'
                })
  }
  else{
    const {data} =  await axios.post("http://localhost:5000/register",registerFormData)
    //  console.log(data);
      showAlert({
                  type: 'success',
                  msg: 'User Registered'
                })
    console.log("data send");
  }
}catch(error)
{
  console.log(error);
}

}

// Frontend code
  return (
    <div className="register-bw">
      <Alert alert={alert}/>
      <form className="register-form" onSubmit={onSubmitHandler}>
        <h2>Create Your Account</h2>

        <label htmlFor="name">Name</label>
        <input type="text" id="name"name="name"  placeholder="Enter your name" required onChange={onChangeHandler} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required  onChange={onChangeHandler}/>

    
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" placeholder="Enter your Phone number" name="phone"required onChange={onChangeHandler} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name="password" required onChange={onChangeHandler}/>

        <label htmlFor="passwordRepeat">Re-Enter Password</label>
        <input type="password" id="passwordRepeat" placeholder="Re - Enter password"  name="passwordRepeat" required onChange={onChangeHandler}/>

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Enter your location" name="location" onChange={onChangeHandler} />

        <label htmlFor="about">About You</label>
        <textarea id="about" placeholder="Write about yourself" name="about" onChange={onChangeHandler}></textarea>

        <label htmlFor="teach">Skills to Teach</label>
        <input type="text" id="teach" placeholder="Skills that you can teach" name="teach" onChange={onChangeHandler} />

        <label htmlFor="learn">Skills to Learn</label>
        <input type="text" id="learn" placeholder="Skills that you want to learn" name="learn" onChange={onChangeHandler}/>
        

        <button type="submit" className="bw-btn">Register</button>
        {/* <Link  to ='/login'className="bw-btn">Register</Link> */}
      </form>
    </div>
  );
};

export default Register;
