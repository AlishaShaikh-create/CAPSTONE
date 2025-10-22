

// Updated Connections.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Messages from "../Components/Messages"; // Import the updated Messages component
import "../Styles/Connections.css";

const Connections = ({ currentUserId, showAlert }) => {
  const [connections, setConnections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUserId) return;
    setLoading(true);
    axios
      .get(`http://localhost:5000/connections/${currentUserId}`)
      .then((res) => {
        setConnections(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        showAlert({
          type: "danger",
          msg: err.response?.data?.error || "Failed to load connections",
        });
        setLoading(false);
      });
  }, [currentUserId]);

  const handleDisconnect = async (toUserId) => {
    if (!window.confirm("Are you sure you want to disconnect?")) return;
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/connections/${currentUserId}/${toUserId}`);
      setConnections(connections.filter((user) => user._id !== toUserId));
      setLoading(false);
      showAlert({
        type: "success",
        msg: "Disconnected successfully!",
      });
    } catch (err) {
      setLoading(false);
      showAlert({
        type: "danger",
        msg: err.response?.data?.error || "Failed to disconnect",
      });
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
      {loading && <p className="loading">Loading...</p>}
      {filteredConnections.length === 0 && !loading && (
        <p className="no-connections">
          {searchTerm ? "No connections match your search" : "No connections yet"}
        </p>
      )}
      <Messages 
        currentUserId={currentUserId} 
        connections={filteredConnections} 
        onDisconnect={handleDisconnect}
      />
    </div>
  );
};

export default Connections;