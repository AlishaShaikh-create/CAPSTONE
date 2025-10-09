
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Connections = ({ currentUserId }) => {
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     if (!currentUserId) return;
//     axios.get(`http://localhost:5000/connections/${currentUserId}`)
//       .then(res => setConnections(res.data))
//       .catch(err => console.error(err));
//   }, [currentUserId]);

//   return (
//     <div>
//       <h2>My Connections</h2>
//       {connections.length === 0 && <p>No connections yet</p>}
//       {connections.map(user => (
//         <div key={user._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//           <h4>{user.name}</h4>
//           <p>Email: {user.email}</p>
//           <p>Can Teach: {user.teach.join(", ")}</p>
//           <p>Wants to Learn: {user.learn.join(", ")}</p>
//           <button></button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Connections;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import '../Styles/Connections.css'

// const Connections = ({ currentUserId }) => {
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     if (!currentUserId) return;
//     axios
//       .get(`http://localhost:5000/connections/${currentUserId}`)
//       .then((res) => setConnections(res.data))
//       .catch((err) => console.error(err));
//   }, [currentUserId]);

//   return (
//     <div className="connections">
//       <h2 className="section-title">My Connections</h2>
//       {connections.length === 0 && <p className="no-connections">No connections yet</p>}
//       <div className="connections-container">
//         {connections.map((user) => (
//           <div key={user._id} className="connection-card">
//             <h4 className="connection-name">{user.name}</h4>
//             <p className="connection-info">Email: {user.email}</p>
//             <p className="connection-info">
//               Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}
//             </p>
//             <p className="connection-info">
//               Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}
//             </p>
//             <button className="btn-primary">Message</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Connections;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/Connections.css";

// const Connections = ({ currentUserId }) => {
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     if (!currentUserId) return;
//     axios
//       .get(`http://localhost:5000/connections/${currentUserId}`)
//       .then((res) => setConnections(res.data))
//       .catch((err) => console.error(err));
//   }, [currentUserId]);

//   const handleDisconnect = async (toUserId) => {
//     if (!window.confirm("Are you sure you want to disconnect?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/connections/${currentUserId}/${toUserId}`);
//       setConnections(connections.filter((user) => user._id !== toUserId));
//       alert("Disconnected successfully!");
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to disconnect");
//     }
//   };

//   return (
//     <div className="connections">
//       <h2 className="section-title">My Connections</h2>
//       {connections.length === 0 && <p className="no-connections">No connections yet</p>}
//       <div className="connections-container">
//         {connections.map((user) => (
//           <div key={user._id} className="connection-card">
//             <h4 className="connection-name">{user.name}</h4>
//             <p className="connection-info">Email: {user.email}</p>
//             <p className="connection-info">
//               Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}
//             </p>
//             <p className="connection-info">
//               Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}
//             </p>
//             <div className="button-group">
//               <button className="btn-primary">Message</button>
//               <button
//                 className="btn-secondary"
//                 onClick={() => handleDisconnect(user._id)}
//               >
//                 Disconnect
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Connections;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Connections.css";

const Connections = ({ currentUserId }) => {
  const [connections, setConnections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!currentUserId) return;
    axios
      .get(`http://localhost:5000/connections/${currentUserId}`)
      .then((res) => setConnections(res.data))
      .catch((err) => console.error(err));
  }, [currentUserId]);

  const handleDisconnect = async (toUserId) => {
    if (!window.confirm("Are you sure you want to disconnect?")) return;
    try {
      await axios.delete(`http://localhost:5000/connections/${currentUserId}/${toUserId}`);
      setConnections(connections.filter((user) => user._id !== toUserId));
      alert("Disconnected successfully!");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to disconnect");
    }
  };

  const filteredConnections = connections.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="connections">
      <div className="connections-header">
        <h2 className="section-title">My Connections</h2>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search connections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {filteredConnections.length === 0 && (
        <p className="no-connections">
          {searchTerm ? "No connections match your search" : "No connections yet"}
        </p>
      )}
      <div className="connections-container">
        {filteredConnections.map((user) => (
          <div key={user._id} className="connection-card">
            <div className="connection-avatar">
              <span className="avatar-initial">{user.name[0]?.toUpperCase() || '?'}</span>
            </div>
            <div className="connection-details">
              <h4 className="connection-name">{user.name}</h4>
              <p className="connection-info">Email: {user.email}</p>
              <p className="connection-info">
                Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}
              </p>
              <p className="connection-info">
                Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}
              </p>
              <div className="button-group">
                <button className="btn-primary">Message</button>
                <button
                  className="btn-secondary"
                  onClick={() => handleDisconnect(user._id)}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;