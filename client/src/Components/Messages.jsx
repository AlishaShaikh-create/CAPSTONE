

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "../Styles/Messages.css";

const socket = io("http://localhost:5000", { 
  withCredentials: true,
  transports: ["websocket", "polling"]
});

const Messages = ({ currentUserId }) => {
  const { toUserId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!currentUserId || !toUserId) return;

    // Fetch recipient name
    axios
      .get(`http://localhost:5000/user/${toUserId}`)
      .then((res) => setRecipientName(res.data.name))
      .catch((err) => console.error("Error fetching user:", err));

    // Fetch initial messages
    axios
      .get(`http://localhost:5000/messages/${currentUserId}/${toUserId}`)
      .then((res) => setMessages(res.data))
      .catch((err) => {
        console.error("Error fetching messages:", err);
        alert("Failed to load messages");
      });

    // Join Socket.IO room
    socket.emit("join", currentUserId);

    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      if (
        (message.fromUserId === currentUserId && message.toUserId === toUserId) ||
        (message.fromUserId === toUserId && message.toUserId === currentUserId)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off("receiveMessage");
      socket.emit("leave", currentUserId);
    };
  }, [currentUserId, toUserId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const message = {
        fromUserId: currentUserId,
        toUserId,
        content: newMessage
      };
      socket.emit("sendMessage", message);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="messages">
      <div className="messages-header">
        <button className="btn-secondary back-button" onClick={() => navigate("/dashboard/connections")}>
          Back to Connections
        </button>
        <h2 className="section-title">Chat with {recipientName || "User"}</h2>
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
                {new Date(msg.createdAt).toLocaleTimeString()}
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
  );
};

export default Messages;

