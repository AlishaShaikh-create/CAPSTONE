import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SearchUsers from "./Components/SearchUsers";
import Connections from "./Components/Connections";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        {/* <Route path="/register" element={<Register />} /> */}

        <Route
          path="/register"
          element={<Register alert={alert} showAlert={showAlert} />}
        ></Route>

        {/* Nested dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h2>Welcome to your Dashboard 🏠</h2>} />

          <Route path="search" element={<SearchUsers />} />
          <Route path="connections" element={<Connections />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
