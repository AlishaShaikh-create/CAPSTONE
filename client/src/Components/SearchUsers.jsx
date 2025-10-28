

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/SearchUser.css";

const SearchUsers = ({ currentUserId, showAlert }) => {
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState([]);
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUserId) return;
    setLoading(true);
    axios
      .get(`http://localhost:5000/connections/${currentUserId}`)
      .then((res) => {
        setConnections(res.data);
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

  const handleSearch = async () => {
    if (!skill.trim()) {
      setResults([]);
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/api/user/search", { skill });
      setResults(Array.isArray(data.data) ? data.data : []);
      setLoading(false);
    } catch (err) {
      console.error("Error searching users:", err);
      setLoading(false);
      showAlert({
        type: "danger",
        msg: err.response?.data?.error || "Error searching users",
      });
      setResults([]);
    }
  };

  const handleConnect = async (toUserId) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/connect", { fromUserId: currentUserId, toUserId });
      const connectedUser = results.find((u) => u._id === toUserId);
      setConnections([...connections, connectedUser]);
      setLoading(false);
      showAlert({
        type: "success",
        msg: `${connectedUser.name} connected successfully!`,
      });
    } catch (err) {
      setLoading(false);
      showAlert({
        type: "danger",
        msg: err.response?.data?.error || "Connection failed",
      });
    }
  };

  const isConnected = (userId) => connections.some((u) => u._id === userId);

  return (
    <div className="search-users">
      <h2 className="section-title">Search Users by Skill</h2>
      {loading && <p className="loading">Loading...</p>}
      <div className="search-form">
        <input
          className="search-input"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Search by skill, e.g., React"
        />
        <button className="btn-primary" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
      </div>
      <div className="results-container">
        {results.length === 0 && !loading && <p className="no-results">No users found</p>}
        {results.map((user) => (
          <div key={user._id} className="user-card">
            <h4 className="user-name">{user.name}</h4>
            <p className="user-info">Can teach: {user.teach.length ? user.teach.join(", ") : "None"}</p>
            <p className="user-info">Wants to learn: {user.learn.length ? user.learn.join(", ") : "None"}</p>
            <button
              className={`btn-primary connect-button ${isConnected(user._id) ? "connected" : ""}`}
              disabled={isConnected(user._id)}
              onClick={() => handleConnect(user._id)}
            >
              {isConnected(user._id) ? "Connected" : "Connect"}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SearchUsers;