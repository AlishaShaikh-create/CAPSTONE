// // import React, { useState } from "react";
// // import SearchUsers from "../Components/SearchUsers.jsx"; // create this component
// // import "../Styles/Dashboard.css";

// // const Dashboard = () => {
// //   const [activePage, setActivePage] = useState("home"); // home | search

// //   return (
// //     <div className="dashboard">
// //       <aside className="sidebar">
// //         <h2 className="logo">TeachMe</h2>
// //         <ul className="sidebar-menu">
// //           <li
// //             className={activePage === "home" ? "active" : ""}
// //             onClick={() => setActivePage("home")}
// //           >
// //             🏠 Home
// //           </li>
// //           <li
// //             className={activePage === "search" ? "active" : ""}
// //             onClick={() => setActivePage("search")}
// //           >
// //             🔍 Search
// //           </li>
// //           <li>💬 Messages</li>
// //           <li>👤 Profile</li>
// //           <li>⚙️ Settings</li>
// //         </ul>
// //       </aside>

// //       <div className="main-content">
// //         {activePage === "home" && <p>Dashboard Home Content</p>}
// //         {activePage === "search" && <SearchUsers />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useState, useEffect } from "react";
// import SearchUsers from "../Components/SearchUsers.jsx"; 
// import axios from "axios";
// import "../Styles/Dashboard.css";

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState("home"); // home | search
//   const [connections, setConnections] = useState([]);
  
//   // Replace this with your logged-in user's ID
//   const currentUserId = "CURRENT_USER_ID";

//   // Fetch connected users
//   const fetchConnections = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:5000/connections/${currentUserId}`);
//       setConnections(data);
//     } catch (error) {
//       console.error("Error fetching connections:", error);
//     }
//   };

//   useEffect(() => {
//     fetchConnections();
//   }, []);

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <h2 className="logo">TeachMe</h2>
//         <ul className="sidebar-menu">
//           <li
//             className={activePage === "home" ? "active" : ""}
//             onClick={() => setActivePage("home")}
//           >
//             🏠 Home
//           </li>
//           <li
//             className={activePage === "search" ? "active" : ""}
//             onClick={() => setActivePage("search")}
//           >
//             🔍 Search
//           </li>
//           <li>💬 Messages</li>
//           <li>👤 Profile</li>
//           <li>⚙️ Settings</li>
//         </ul>
//       </aside>

//       <div className="main-content">
//         {activePage === "home" && (
//           <div className="connections-feed">
//             <h2>🤝 Your Connections</h2>
//             {connections.length > 0 ? (
//               connections.map((user) => (
//                 <div key={user._id} className="connection-card">
//                   <h3>{user.name}</h3>
//                   <p>📍 {user.location}</p>
//                   <p>Teaches: {Array.isArray(user.teach) ? user.teach.join(", ") : user.teach}</p>
//                   <p>Wants to Learn: {Array.isArray(user.learn) ? user.learn.join(", ") : user.learn}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No connections yet. Search and connect with people!</p>
//             )}
//           </div>
//         )}
//         {activePage === "search" && <SearchUsers />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import SearchUsers from "../Components/SearchUsers.jsx";
// import axios from "axios";
// import "../Styles/Dashboard.css";

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState("home"); // home | search
//   const [connectedUsers, setConnectedUsers] = useState([]);

//   const currentUser = JSON.parse(localStorage.getItem("user"));
//   const userId = currentUser?._id;

//   // Fetch connections
//   const fetchConnections = async () => {
//     if (!userId) return;
//     try {
//       const { data } = await axios.get(`http://localhost:5000/connections/${userId}`);
//       setConnectedUsers(data);
//     } catch (error) {
//       console.error("Error fetching connections:", error);
//     }
//   };

//   useEffect(() => {
//     if (activePage === "home") fetchConnections();
//   }, [activePage]);

//   // Callback to add a new connection
//   const addConnection = (newUser) => {
//     setConnectedUsers((prev) => [...prev, newUser]);
//   };

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <h2 className="logo">TeachMe</h2>
//         <ul className="sidebar-menu">
//           <li className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>
//             🏠 Home
//           </li>
//           <li className={activePage === "search" ? "active" : ""} onClick={() => setActivePage("search")}>
//             🔍 Search
//           </li>
//           <li>💬 Messages</li>
//           <li>👤 Profile</li>
//           <li>⚙️ Settings</li>
//         </ul>
//       </aside>

//       <div className="main-content">
//         {activePage === "home" && (
//           <div>
//             <h2>Connected Users</h2>
//             {connectedUsers.length > 0 ? (
//               connectedUsers.map((user) => (
//                 <div key={user._id} className="user-card">
//                   <h3>{user.name}</h3>
//                   <p>📍 {user.location}</p>
//                   <p>Teaches: {user.teach.join(", ")}</p>
//                   <p>Wants to Learn: {user.learn.join(", ")}</p>
//                 </div>
//               ))
//             ) : (
//               <p>You have no connections yet. Go to Search to connect! 🤝</p>
//             )}
//           </div>
//         )}

//         {activePage === "search" && <SearchUsers onConnect={addConnection} />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from "react";
// import SearchUsers from "../Components/SearchUsers.jsx";
// import axios from "axios";
// import "../Styles/Dashboard.css";

// const Dashboard = () => {
//   const [activePage, setActivePage] = useState("home");
//   const [connectedUsers, setConnectedUsers] = useState([]);

//   const currentUser = JSON.parse(localStorage.getItem("user"));
//   const userId = currentUser?._id;

//   // Fetch connected users
//   const fetchConnections = async () => {
//     if (!userId) return;
//     try {
//       const { data } = await axios.get(`http://localhost:5000/connections/${userId}`);
//       setConnectedUsers(data);
//     } catch (error) {
//       console.error("Error fetching connections:", error);
//     }
//   };

//   useEffect(() => {
//     if (activePage === "home") fetchConnections();
//   }, [activePage]);

//   // Add new connection immediately
//   const addConnection = (newUser) => {
//     setConnectedUsers((prev) => [...prev, newUser]);
//   };

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <h2 className="logo">TeachMe</h2>
//         <ul className="sidebar-menu">
//           <li className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>
//             🏠 Home
//           </li>
//           <li className={activePage === "search" ? "active" : ""} onClick={() => setActivePage("search")}>
//             🔍 Search
//           </li>
//           <li>💬 Messages</li>
//           <li>👤 Profile</li>
//           <li>⚙️ Settings</li>
//         </ul>
//       </aside>

//       <div className="main-content">
//         {activePage === "home" && (
//           <div>
//             <h2>Connected Users</h2>
//             {connectedUsers.length > 0 ? (
//               connectedUsers.map((user) => (
//                 <div key={user._id} className="user-card">
//                   <h3>{user.name}</h3>
//                   <p>📍 {user.location}</p>
//                   <p>Teaches: {user.teach.join(", ")}</p>
//                   <p>Wants to Learn: {user.learn.join(", ")}</p>
//                 </div>
//               ))
//             ) : (
//               <p>You have no connections yet. Go to Search to connect! 🤝</p>
//             )}
//           </div>
//         )}

//         {activePage === "search" && <SearchUsers onConnect={addConnection} />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useState, useEffect } from "react";
import SearchUsers from "../Components/SearchUsers.jsx";
import axios from "axios";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home"); // home | search
  const [connectedUsers, setConnectedUsers] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?._id;

  // Fetch connections when home page loads
  const fetchConnections = async () => {
    if (!userId) return;
    try {
      const { data } = await axios.get(`http://localhost:5000/connections/${userId}`);
      setConnectedUsers(data);
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  };

  useEffect(() => {
    if (activePage === "home") fetchConnections();
  }, [activePage]);

  // Callback to add a new connection instantly
  const addConnection = (newUser) => {
    // Avoid duplicates
    if (!connectedUsers.some((u) => u._id === newUser._id)) {
      setConnectedUsers((prev) => [...prev, newUser]);
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">TeachMe</h2>
        <ul className="sidebar-menu">
          <li className={activePage === "home" ? "active" : ""} onClick={() => setActivePage("home")}>
            🏠 Home
          </li>
          <li className={activePage === "search" ? "active" : ""} onClick={() => setActivePage("search")}>
            🔍 Search
          </li>
          <li>💬 Messages</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      <div className="main-content">
        {activePage === "home" && (
          <div>
            <h2>🤝 Connected Users</h2>
            {connectedUsers.length > 0 ? (
              connectedUsers.map((user) => (
                <div key={user._id} className="user-card">
                  <h3>{user.name}</h3>
                  <p>📍 {user.location}</p>
                  <p>Teaches: {user.teach.join(", ")}</p>
                  <p>Wants to Learn: {user.learn.join(", ")}</p>
                </div>
              ))
            ) : (
              <p>You have no connections yet. Go to Search to connect! 🤝</p>
            )}
          </div>
        )}

        {activePage === "search" && <SearchUsers onConnect={addConnection} />}
      </div>
    </div>
  );
};

export default Dashboard;
