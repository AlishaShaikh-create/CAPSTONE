import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
// import Registration from "./Pages/Register";
// import SignIn from "./Pages/SignIn";
// import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        {/* <Route path ='/home' element ={<Home/>} />
        <Route path='/register' element={<Registration />} />
        <Route path='/signin' element={<SignIn />} />   */}
      </Routes>
    </Router>
  );
}

export default App;
