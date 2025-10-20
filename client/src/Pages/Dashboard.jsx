
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchUsers from "../Components/SearchUsers";
import Connections from "../Components/Connections";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [stats, setStats] = useState({ connections: [], teach: [], learn: [] });
  const [expandedCard, setExpandedCard] = useState(null);
   const currentUserId = "68e10910c669d9b33de88389"; // Replace with dynamic user ID in production

 
  useEffect(() => {
    if (!currentUserId) return;
    // Fetch user stats and details
    Promise.all([
      axios.get(`http://localhost:5000/connections/${currentUserId}`),
      axios.get(`http://localhost:5000/user/${currentUserId}`)
    ])
      .then(([connectionsRes, userRes]) => {
        setStats({
          connections: connectionsRes.data,
          teach: userRes.data.teach || [],
          learn: userRes.data.learn || []
        });
      })
      .catch((err) => console.error("Error fetching stats:", err));
  }, [currentUserId]);


//   useEffect(() => {
//     if (!currentUserId) {
//         showAlert({ type: "danger", msg: "Please log in to access the dashboard" });
//         navigate("/login");
//         return;
//     }
//     Promise.all([
//         axios.get(`http://localhost:5000/connections/${currentUserId}`),
//         axios.get(`http://localhost:5000/user/${currentUserId}`)
//     ])
//         .then(([connectionsRes, userRes]) => {
//             setStats({
//                 connections: connectionsRes.data,
//                 teach: userRes.data.data?.teach || [],
//                 learn: userRes.data.data?.learn || []
//             });
//         })
//         .catch((err) => {
//             showAlert({
//                 type: "danger",
//                 msg: err.response?.data?.error || "Failed to fetch stats",
//             });
//         });
// }, [currentUserId, showAlert, navigate]);

  const handleCardClick = (cardType) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">TeachMe</h2>
        <ul className="sidebar-menu">
          <li className={`sidebar-item ${activePage === "home" ? "active" : ""}`} onClick={() => setActivePage("home")}>
            <span className="sidebar-icon">🏠</span> Home
          </li>
          <li className={`sidebar-item ${activePage === "search" ? "active" : ""}`} onClick={() => setActivePage("search")}>
            <span className="sidebar-icon">🔍</span> Search
          </li>
          <li className={`sidebar-item ${activePage === "connections" ? "active" : ""}`} onClick={() => setActivePage("connections")}>
            <span className="sidebar-icon">🤝</span> Connections
          </li>
        </ul>
      </aside>
      <main className="main-content">
        {activePage === "home" && (
          <div className="home-section">
            <div className="welcome-card">
              <h2 className="welcome-title">Welcome to TeachMe 🏠</h2>
              <p className="welcome-description">
                Connect with learners and teachers, share your skills, and grow your knowledge network!
              </p>
            
            </div>
            <div className="stats-container">
              <div
                className={`stat-card ${expandedCard === "connections" ? "expanded" : ""}`}
                onClick={() => handleCardClick("connections")}
              >
                <div className="stat-content">
                  <h3 className="stat-value">{stats.connections.length}</h3>
                  <p className="stat-label">Connections</p>
                </div>
                {expandedCard === "connections" && (
                  <div className="expanded-details">
                    <h4 className="expanded-title">Your Connections</h4>
                    {stats.connections.length === 0 ? (
                      <p className="expanded-info">No connections yet</p>
                    ) : (
                      <ul className="connection-list">
                        {stats.connections.map((user) => (
                          <li key={user._id} className="connection-item">
                            {user.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`stat-card ${expandedCard === "teach" ? "expanded" : ""}`}
                onClick={() => handleCardClick("teach")}
              >
                <div className="stat-content">
                  <h3 className="stat-value">{stats.teach.length}</h3>
                  <p className="stat-label">Skills You Teach</p>
                </div>
                {expandedCard === "teach" && (
                  <div className="expanded-details">
                    <h4 className="expanded-title">Skills You Teach</h4>
                    {stats.teach.length === 0 ? (
                      <p className="expanded-info">No skills listed</p>
                    ) : (
                      <ul className="skill-list">
                        {stats.teach.map((skill, index) => (
                          <li key={index} className="skill-item">{skill}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`stat-card ${expandedCard === "learn" ? "expanded" : ""}`}
                onClick={() => handleCardClick("learn")}
              >
                <div className="stat-content">
                  <h3 className="stat-value">{stats.learn.length}</h3>
                  <p className="stat-label">Skills You Learn</p>
                </div>
                {expandedCard === "learn" && (
                  <div className="expanded-details">
                    <h4 className="expanded-title">Skills You Want to Learn</h4>
                    {stats.learn.length === 0 ? (
                      <p className="expanded-info">No skills listed</p>
                    ) : (
                      <ul className="skill-list">
                        {stats.learn.map((skill, index) => (
                          <li key={index} className="skill-item">{skill}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {activePage === "search" && <SearchUsers currentUserId={currentUserId} />}
        {activePage === "connections" && <Connections currentUserId={currentUserId} />}
      </main>
    </div>
  );
};

export default Dashboard;


