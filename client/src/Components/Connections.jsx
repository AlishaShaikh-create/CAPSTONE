import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Connections.css";

const Connections = ({ currentUserId }) => {
  const [connections, setConnections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChatUserId, setActiveChatUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

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
      if (activeChatUserId === toUserId) {
        setActiveChatUserId(null);
        setMessages([]);
      }
      alert("Disconnected successfully!");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to disconnect");
    }
  };

  const handleMessageClick = async (toUserId) => {
    if (activeChatUserId === toUserId) {
      setActiveChatUserId(null);
      setMessages([]);
      return;
    }
    setActiveChatUserId(toUserId);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/messages/${currentUserId}/${toUserId}`
      );
      setMessages(data);
    } catch (err) {
      console.error("Error fetching messages:", err);
      alert("Failed to load messages");
    }
  };

  const handleSendMessage = async (toUserId) => {
    if (!newMessage.trim()) return;
    try {
      const { data } = await axios.post(`http://localhost:5000/messages`, {
        fromUserId: currentUserId,
        toUserId,
        content: newMessage
      });
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message");
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
          <div key={user._id} className={`connection-card ${activeChatUserId === user._id ? "active-chat" : ""}`}>
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
                <button
                  className="btn-primary"
                  onClick={() => handleMessageClick(user._id)}
                >
                  {activeChatUserId === user._id ? "Close Chat" : "Message"}
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => handleDisconnect(user._id)}
                >
                  Disconnect
                </button>
              </div>
              {activeChatUserId === user._id && (
                <div className="chat-section">
                  <div className="messages-container">
                    {messages.length === 0 ? (
                      <p className="no-messages">No messages yet</p>
                    ) : (
                      messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
                        >
                          <p className="message-content">{msg.content}</p>
                          <span className="message-timestamp">
                            {new Date(msg.createdAt).toLocaleTimeString()}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="message-input-group">
                    <input
                      type="text"
                      className="message-input"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage(user._id)}
                    />
                    <button
                      className="btn-primary send-button"
                      onClick={() => handleSendMessage(user._id)}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;