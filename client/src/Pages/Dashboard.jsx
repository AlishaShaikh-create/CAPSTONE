
import React from "react";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">TeachMe</h2>
        <ul className="sidebar-menu">
          <li className="active">🏠 Home</li>
          <li>🔍 Search</li>
          <li>💬 Messages</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <nav className="navbar">
          <h3>Welcome back 👋</h3>
          <div className="navbar-user">
            <span className="user-name">Alisha</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="user avatar"
              className="user-avatar"
            />
          </div>
        </nav>

        {/* Dashboard Widgets */}
        <div className="widgets">
          <div className="card">
            <h3>🔍 Find People</h3>
            <p>Search for learners and teachers by skills.</p>
          </div>
          <div className="card">
            <h3>💬 Messages</h3>
            <p>Connect and chat with your matches.</p>
          </div>
          <div className="card">
            <h3>👤 My Profile</h3>
            <p>Update your skills and details anytime.</p>
          </div>
        </div>

        {/* Example Activity Feed */}
        <div className="activity-feed">
          <h2>📢 Recent Activity</h2>
          <ul>
            <li>Jane connected with John (Python ↔ React)</li>
            <li>Sarah updated her profile</li>
            <li>Mike is looking for a Java mentor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
