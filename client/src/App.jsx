import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/login' element={ <Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
