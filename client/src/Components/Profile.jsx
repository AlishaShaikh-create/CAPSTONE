// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Profile.css";

const Profile = ({ currentUserId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [teachInput, setTeachInput] = useState("");
  const [learnInput, setLearnInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!currentUserId) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user/${currentUserId}`);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err);
        setLoading(false);
      }
    };

    fetchUser();
  }, [currentUserId, navigate]);

  const addSkill = async (type, skill) => {
    if (!skill.trim()) return;
    const updated = { ...user };
    updated[type] = [...(updated[type] || []), skill.trim()];
    await updateUser(updated);
    type === "teach" ? setTeachInput("") : setLearnInput("");
  };

  const removeSkill = async (type, index) => {
    const updated = { ...user };
    updated[type].splice(index, 1);
    await updateUser(updated);
  };

  const updateUser = async (updatedUser) => {
    setSaving(true);
    try {
      const res = await axios.put(`http://localhost:5000/api/user/${currentUserId}`, updatedUser);
      setUser(res.data);
    } catch (err) {
      console.error("Error updating user:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="profile-loading">Loading profile...</div>;
  if (!user) return <div className="profile-error">User not found</div>;

  return (
    <div className="profile-wrapper">
      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-role">{user.email}</p>
        {user.location && <p className="profile-location">Location: {user.location}</p>}
      </div>

      {/* Body */}
      <div className="profile-body">
        {/* About */}
        <div className="about-card">
          <h3 className="section-title">About Me</h3>
          <textarea
            className="about-textarea"
            value={user.about || ""}
            onChange={(e) => updateUser({ ...user, about: e.target.value })}
            placeholder="Tell us about yourself..."
            rows="5"
          />
        </div>

        {/* Location */}
        <div className="location-card">
          <h3 className="section-title">Location</h3>
          <input
            type="text"
            className="location-input"
            value={user.location || ""}
            onChange={(e) => updateUser({ ...user, location: e.target.value })}
            placeholder="e.g. San Francisco, CA"
          />
        </div>

        {/* Teach Skills */}
        <div className="skills-card">
          <h3 className="section-title">Skills I Teach</h3>
          <div className="skills-input-group">
            <input
              type="text"
              placeholder="Add a skill you teach..."
              value={teachInput}
              onChange={(e) => setTeachInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addSkill("teach", teachInput)}
              className="skills-input"
            />
            <button
              onClick={() => addSkill("teach", teachInput)}
              disabled={saving || !teachInput.trim()}
              className="add-skill-btn"
            >
              Add
            </button>
          </div>
          <div className="skills-list">
            {user.teach?.length === 0 ? (
              <p className="no-skills">No skills listed</p>
            ) : (
              user.teach?.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                  <button
                    onClick={() => removeSkill("teach", i)}
                    disabled={saving}
                    className="remove-skill"
                  >
                    X
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Learn Skills */}
        <div className="skills-card">
          <h3 className="section-title">Skills I Want to Learn</h3>
          <div className="skills-input-group">
            <input
              type="text"
              placeholder="Add a skill you want to learn..."
              value={learnInput}
              onChange={(e) => setLearnInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addSkill("learn", learnInput)}
              className="skills-input"
            />
            <button
              onClick={() => addSkill("learn", learnInput)}
              disabled={saving || !learnInput.trim()}
              className="add-skill-btn"
            >
              Add
            </button>
          </div>
          <div className="skills-list">
            {user.learn?.length === 0 ? (
              <p className="no-skills">No skills listed</p>
            ) : (
              user.learn?.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                  <button
                    onClick={() => removeSkill("learn", i)}
                    disabled={saving}
                    className="remove-skill"
                  >
                    X
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {saving && <div className="saving-indicator">Saving changes...</div>}
    </div>
  );
};

export default Profile;