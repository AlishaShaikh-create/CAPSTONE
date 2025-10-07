import React from "react";
import "../Styles/Connections.css";

const Connections = ({ connections }) => {
  return (
    <div className="connections-page">
      <h2>🤝 Your Connections</h2>
      {connections.length === 0 ? (
        <p>You haven’t connected with anyone yet.</p>
      ) : (
        <div className="connections-grid">
          {connections.map((user) => (
            <div key={user._id} className="connection-card">
              <h3>{user.name}</h3>
              <p>📍 {user.location}</p>
              <p>
                Teaches: {Array.isArray(user.teach) ? user.teach.join(", ") : user.teach}
              </p>
              <p>
                Wants to Learn:{" "}
                {Array.isArray(user.learn) ? user.learn.join(", ") : user.learn}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Connections;
