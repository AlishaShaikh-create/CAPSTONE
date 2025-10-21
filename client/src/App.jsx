// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Landing from "./Pages/Landing";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import SearchUsers from "./Components/SearchUsers";
// import Connections from "./Components/Connections";


// function App() {
//     //const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId") || null);
//   const [alert, setAlert] = useState(null);
//   const showAlert = (alert) => {
//     setAlert(alert);
//     setTimeout(() => {
//       setAlert(null);
//     }, 5000);
//   };


//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />

//         <Route path="/login" element={<Login alert={alert} showAlert={showAlert} />} />

//         {/* <Route path="/register" element={<Register />} /> */}

//         <Route
//           path="/register"
//           element={<Register alert={alert} showAlert={showAlert} />}
//         ></Route>

//         {/* Nested dashboard routes */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<h2>Welcome to your Dashboard 🏠</h2>} />

//           <Route path="search" element={<SearchUsers />} />
//           <Route path="connections" element={<Connections />} />


//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


//after changing the code

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Landing from "./Pages/Landing";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import SearchUsers from "./Components/SearchUsers";
// import Connections from "./Components/Connections";
// import Messages from "./Components/Messages";
// function App() {
//     // CHANGE: Uncommented to manage currentUserId state for dynamic user ID
//     const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId") || null);
//     const [alert, setAlert] = useState(null);
//     const showAlert = (alert) => {
//         setAlert(alert);
//         setTimeout(() => {
//             setAlert(null);
//         }, 5000);
//     };

//     // CHANGE: Added logout handler to clear userId and token
//     const handleLogout = () => {
//         localStorage.removeItem("userId");
//         localStorage.removeItem("token");
//         setCurrentUserId(null);
//     };

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Landing />} />

//                 {/* CHANGE: Added setCurrentUserId prop to update state after login */}
//                 <Route path="/login" element={<Login alert={alert} showAlert={showAlert} setCurrentUserId={setCurrentUserId} />} />

//                 <Route
//                     path="/register"
//                     element={<Register alert={alert} showAlert={showAlert} />}
//                 ></Route>

//                 {/* CHANGE: Added currentUserId and handleLogout props to pass dynamic user ID */}
//                 <Route path="/dashboard" element={<Dashboard currentUserId={currentUserId} handleLogout={handleLogout} />}>
//                     <Route index element={<h2>Welcome to your Dashboard 🏠</h2>} />

//                     {/* CHANGE: Added currentUserId prop for dynamic API calls */}
//                     <Route path="search" element={<SearchUsers currentUserId={currentUserId} />} />
//                     <Route path="connections" element={<Connections currentUserId={currentUserId} />} />

//                     <Route path="messages/:toUserId" element={<Messages currentUserId={currentUserId} showAlert={showAlert} />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// }

// export default App;



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