

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client"; // CHANGE: Import socket.io-client for global connection
import axios from "axios"; // CHANGE: Import axios for auth header management
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SearchUsers from "./Components/SearchUsers";
import Connections from "./Components/Connections";
import Messages from "./Components/Messages";
import Alert from "./Components/Alert"; // CHANGE: Import Alert for consistent error/success messages

// CHANGE: Initialize Socket.IO globally
const socket = io("http://localhost:5000", {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

function App() {
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId") || null);
  const [alert, setAlert] = useState(null);

  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // CHANGE: Handle logout to clear userId, token, and disconnect socket
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    socket.disconnect(); // Disconnect socket on logout
    setCurrentUserId(null);
    showAlert({ type: "success", msg: "Logged out successfully!" });
  };

  // CHANGE: Manage Socket.IO connection based on login state
  useEffect(() => {
    if (currentUserId) {
      socket.connect(); // Ensure socket is connected
      socket.emit("join", currentUserId);
      console.log(`App: User ${currentUserId} joined socket room`);

      // Set auth header for API requests
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      // Cleanup on user change or unmount
      return () => {
        socket.emit("leave", currentUserId);
        socket.disconnect();
      };
    } else {
      socket.disconnect(); // Disconnect if no user is logged in
    }
  }, [currentUserId]);

  return (
    <Router>
      <div className="App">
        {/* CHANGE: Render Alert component to display alerts globally */}
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={<Login alert={alert} showAlert={showAlert} setCurrentUserId={setCurrentUserId} />}
          />
          <Route path="/register" element={<Register alert={alert} showAlert={showAlert} />} />
          <Route
            path="/dashboard"
            element={<Dashboard currentUserId={currentUserId} handleLogout={handleLogout} />}
          >
            <Route index element={<h2>Welcome to your Dashboard 🏠</h2>} />
            {/* CHANGE: Pass showAlert to SearchUsers and Connections for consistent error handling */}
            <Route
              path="search"
              element={<SearchUsers currentUserId={currentUserId} showAlert={showAlert} />}
            />
            <Route
              path="connections"
              element={<Connections currentUserId={currentUserId} showAlert={showAlert} />}
            />
            {/* CHANGE: Pass socket prop to Messages for real-time messaging */}
            <Route
              path="messages/:toUserId"
              element={<Messages currentUserId={currentUserId} socket={socket} showAlert={showAlert} />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;