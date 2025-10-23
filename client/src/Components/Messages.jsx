

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "../Styles/Messages.css";

const socket = io("http://localhost:5000", { 
  withCredentials: true,
  transports: ["websocket", "polling"]
});

const Messages = ({ currentUserId, connections, onDisconnect }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [recipientName, setRecipientName] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!currentUserId || !selectedUser) return;

    axios
      .get(`http://localhost:5000/user/${selectedUser._id}`)
      .then((res) => setRecipientName(res.data.name))
      .catch((err) => console.error("Error fetching user:", err));

    axios
      .get(`http://localhost:5000/messages/${currentUserId}/${selectedUser._id}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));

    socket.emit("join", currentUserId);

    const handleReceiveMessage = (message) => {
      if (
        (message.fromUserId === currentUserId && message.toUserId === selectedUser._id) ||
        (message.fromUserId === selectedUser._id && message.toUserId === currentUserId)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.emit("leave", currentUserId);
    };
  }, [currentUserId, selectedUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (selectedUser && !connections.some((user) => user._id === selectedUser._id)) {
      setSelectedUser(null);
      setMessages([]);
      setRecipientName("");
    }
  }, [connections, selectedUser]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;
    try {
      const message = {
        fromUserId: currentUserId,
        toUserId: selectedUser._id,
        content: newMessage,
        createdAt: new Date().toISOString(), // Temporary timestamp for optimistic update
      };
      socket.emit("sendMessage", message, (ack) => {
        if (ack && ack.error) console.error("Send failed:", ack.error);
      });
      setMessages((prev) => [...prev, message]); // Optimistic update with timestamp
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleCloseChat = () => {
    setSelectedUser(null);
    setMessages([]);
    setRecipientName("");
  };

  const formatTime = (dateString) => {
    if (!dateString) return "Just now"; // Fallback for invalid dates
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="messages-wrapper">
      <div className="connections-container">
        {connections.map((user) => (
          <div key={user._id} className="connection-card">
            <div className="connection-avatar">
              <span className="avatar-initial">{user.name[0]?.toUpperCase() || '?'}</span>
            </div>
            <div className="connection-details">
              <h4 className="connection-name">{user.name}</h4>
              <p className="connection-info">Email: {user.email}</p>
              <p className="connection-info">Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}</p>
              <p className="connection-info">Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}</p>
              <div className="button-group">
                <button
                  className="btn-primary"
                  onClick={() => setSelectedUser(user)}
                >
                  Message
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => onDisconnect(user._id)}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="chat-container">
          <div className="messages-header">
            <button className="btn-secondary back-button" onClick={handleCloseChat}>
              Close Chat
            </button>
            <h2 className="section-title">Chat with {recipientName}</h2>
          </div>
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
                    {formatTime(msg.createdAt)}
                  </span>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="message-input-group">
            <input
              type="text"
              className="message-input"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="btn-primary send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;