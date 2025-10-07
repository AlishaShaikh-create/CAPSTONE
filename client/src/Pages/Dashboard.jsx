
// import React, { useState, useEffect } from "react";
// import SearchUsers from "../Components/SearchUsers.jsx";
// import axios from "axios";
// import "../Styles/Dashboard.css";

// const Dashboard = () => {

//   const [activePage, setActivePage] = useState("home"); // home | search
//   const [connectedUsers, setConnectedUsers] = useState([]);

//   const currentUser = JSON.parse(localStorage.getItem("user"));
//   const userId = currentUser?._id;

//   // Fetch connections when home page loads
//   // const fetchConnections = async () => {
//   //   if (!userId) return;
//   //   try {
//   //     const { data } = await axios.get(`http://localhost:5000/connections/${userId}`);
//   //     setConnectedUsers(data);
//   //   } catch (error) {
//   //     console.error("Error fetching connections:", error);
//   //   }
//   // };

//   useEffect(() => {
//     if (activePage === "home") fetchConnections();
//   }, [activePage]);

//   // Callback to add a new connection instantly
//   const addConnection = (newUser) => {
//     // Avoid duplicates
//     if (!connectedUsers.some((u) => u._id === newUser._id)) {
//       setConnectedUsers((prev) => [...prev, newUser]);
//     }
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
          
//         </ul>
//       </aside>

//       <div className="main-content">
//         {activePage === "home" && (
//           <div>
//             <h2>🤝 Connected Users</h2>
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


import React, { useState } from "react";
import "../Styles/Dashboard.css";
import SearchUsers from "../Components/SearchUsers.jsx";
import Connections from "../Components/Connections.jsx";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
    const [connections, setConnections] = useState([]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">TeachMe</h2>
        <ul className="sidebar-menu">
          <li
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            🏠 Home
          </li>
          <li
            className={activePage === "search" ? "active" : ""}
            onClick={() => setActivePage("search")}
          >
            🔍 Search
          </li>

           <li
            className={activePage === "connections" ? "active" : ""}
            onClick={() => setActivePage("connections")}
          >
            🤝 Connections
          </li>


          <li>💬 Messages</li>
        </ul>
      </aside>

      <main className="main-content">
        {activePage === "home" && <h2>Welcome to your Dashboard 🏠</h2>}
        {/* {activePage === "search" && <SearchUsers />} */}

        {activePage === "search" && (
          <SearchUsers setConnections={setConnections} connections={connections} />
        )}
        {activePage === "connections" && <Connections connections={connections} />}
           
      </main>
    </div>
  );
};

export default Dashboard;
