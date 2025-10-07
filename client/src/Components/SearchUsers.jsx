

import React, { useState } from "react";
import axios from "axios";
import "../Styles/SearchUser.css";

const SearchUsers = ({ setConnections, connections }) => {
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (e) => setSkill(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    try {
      const { data } = await axios.post("http://localhost:5000/search", { skill });
      setResults(data);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setLoading(false);
    }
  };

   const handleConnect = (user) => {
    // prevent duplicates
    if (!connections.some((conn) => conn._id === user._id)) {
      setConnections((prev) => [...prev, user]);
      alert(`${user.name} added to your connections!`);
    } else {
      alert("You are already connected with this user!");
    }
  };
  return (
    <div className="searchUser-page">
      <h2>🔍 Search Users by Skill</h2>

      <form onSubmit={handleSearch} className="searchUser-form">
        <input
          type="text"
          placeholder="Enter a skill (e.g., React, Python)"
          value={skill}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}

      <div className="searchUser-results-container">
        {results.length > 0 ? (
          results.map((user) => (
            <div key={user._id} className="searchUser-card">
              <h3>{user.name}</h3>
              <p>📍 {user.location}</p>
              <p>
                Teaches: {Array.isArray(user.teach) ? user.teach.join(", ") : user.teach}
              </p>
              <p>
                Wants to Learn: {Array.isArray(user.learn) ? user.learn.join(", ") : user.learn}
              </p>
               <button className="connect-btn" onClick={() => handleConnect(user)}>
                🤝 Connect
              </button>
            </div>
          ))
        ) : searched && !loading ? (
          <p>No users found for "{skill}".</p>
        ) : (
          <p>Enter a skill to start searching 🔎</p>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;



