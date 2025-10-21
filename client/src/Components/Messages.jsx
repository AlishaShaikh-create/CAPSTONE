

// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import io from "socket.io-client";
// import "../Styles/Messages.css";

// const socket = io("http://localhost:5000", { 
//   withCredentials: true,
//   transports: ["websocket", "polling"]
// });

// const Messages = ({ currentUserId }) => {
//   const { toUserId } = useParams();
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!currentUserId || !toUserId) return;

//     // Fetch recipient name
//     axios
//       .get(`http://localhost:5000/user/${toUserId}`)
//       .then((res) => setRecipientName(res.data.name))
//       .catch((err) => console.error("Error fetching user:", err));

//     // Fetch initial messages
//     axios
//       .get(`http://localhost:5000/messages/${currentUserId}/${toUserId}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => {
//         console.error("Error fetching messages:", err);
//         alert("Failed to load messages");
//       });

//     // Join Socket.IO room
//     socket.emit("join", currentUserId);

//     // Listen for incoming messages
//     socket.on("receiveMessage", (message) => {
//       if (
//         (message.fromUserId === currentUserId && message.toUserId === toUserId) ||
//         (message.fromUserId === toUserId && message.toUserId === currentUserId)
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("receiveMessage");
//       socket.emit("leave", currentUserId);
//     };
//   }, [currentUserId, toUserId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       const message = {
//         fromUserId: currentUserId,
//         toUserId,
//         content: newMessage
//       };
//       socket.emit("sendMessage", message);
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message");
//     }
//   };

//   return (
//     <div className="messages">
//       <div className="messages-header">
//         <button className="btn-secondary back-button" onClick={() => navigate("/dashboard/connections")}>
//           Back to Connections
//         </button>
//         <h2 className="section-title">Chat with {recipientName || "User"}</h2>
//       </div>
//       <div className="messages-container">
//         {messages.length === 0 ? (
//           <p className="no-messages">No messages yet</p>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
//             >
//               <p className="message-content">{msg.content}</p>
//               <span className="message-timestamp">
//                 {new Date(msg.createdAt).toLocaleTimeString()}
//               </span>
//             </div>
//           ))
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="message-input-group">
//         <input
//           type="text"
//           className="message-input"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <button className="btn-primary send-button" onClick={handleSendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messages;


// 2nd code
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import io from "socket.io-client";
// import "../Styles/Messages.css";

// const socket = io("http://localhost:5000", { 
//   withCredentials: true,
//   transports: ["websocket", "polling"]
// });

// const Messages = ({ currentUserId, showAlert }) => {
//   const { toUserId } = useParams();
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const [loading, setLoading] = useState(false); // CHANGE: Add loading state
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!currentUserId || !toUserId) return;

//     setLoading(true);
//     // Fetch recipient name
//     axios
//       .get(`http://localhost:5000/user/${toUserId}`)
//       .then((res) => {
//         setRecipientName(res.data.name);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching user:", err);
//         showAlert({
//           type: "danger",
//           msg: err.response?.data?.error || "Failed to load user",
//         });
//         setLoading(false);
//       });

//     // Fetch initial messages
//     axios
//       .get(`http://localhost:5000/messages/${currentUserId}/${toUserId}`)
//       .then((res) => {
//         // CHANGE: Ensure res.data is an array
//         setMessages(Array.isArray(res.data) ? res.data : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching messages:", err);
//         showAlert({
//           type: "danger",
//           msg: err.response?.data?.error || "Failed to load messages",
//         });
//         setLoading(false);
//       });

//     // Join Socket.IO room
//     socket.emit("join", currentUserId);

//     // Listen for incoming messages
//     socket.on("receiveMessage", (message) => {
//       if (
//         (message.fromUserId === currentUserId && message.toUserId === toUserId) ||
//         (message.fromUserId === toUserId && message.toUserId === currentUserId)
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("receiveMessage");
//       socket.emit("leave", currentUserId);
//     };
//   }, [currentUserId, toUserId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       setLoading(true);
//       const message = {
//         fromUserId: currentUserId,
//         toUserId,
//         content: newMessage
//       };
//       // CHANGE: Persist message to backend
//       const { data } = await axios.post(`http://localhost:5000/messages`, message);
//       socket.emit("sendMessage", data);
//       setNewMessage("");
//       setLoading(false);
//       showAlert({
//         type: "success",
//         msg: "Message sent!",
//       });
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setLoading(false);
//       showAlert({
//         type: "danger",
//         msg: err.response?.data?.error || "Failed to send message",
//       });
//     }
//   };

//   return (
//     <div className="messages">
//       <div className="messages-header">
//         <button className="btn-secondary back-button" onClick={() => navigate("/dashboard/connections")}>
//           Back to Connections
//         </button>
//         <h2 className="section-title">Chat with {recipientName || "User"}</h2>
//       </div>
//       {/* CHANGE: Add loading indicator */}
//       {loading && <p className="loading">Loading...</p>}
//       <div className="messages-container">
//         {messages.length === 0 && !loading && (
//           <p className="no-messages">No messages yet</p>
//         )}
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
//           >
//             <p className="message-content">{msg.content}</p>
//             <span className="message-timestamp">
//               {new Date(msg.createdAt).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="message-input-group">
//         <input
//           type="text"
//           className="message-input"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <button className="btn-primary send-button" onClick={handleSendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messages;



// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import io from "socket.io-client";
// import "../Styles/Messages.css";

// const socket = io("http://localhost:5000", { 
//   withCredentials: true,
//   transports: ["websocket", "polling"]
// });

// const Messages = ({ currentUserId }) => {
//   const { toUserId } = useParams();
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!currentUserId || !toUserId) return;

//     // Fetch recipient name
//     axios
//       .get(`http://localhost:5000/user/${toUserId}`)
//       .then((res) => setRecipientName(res.data.name))
//       .catch((err) => console.error("Error fetching user:", err));

//     // Fetch initial messages
//     axios
//       .get(`http://localhost:5000/messages/${currentUserId}/${toUserId}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => {
//         console.error("Error fetching messages:", err);
//         alert("Failed to load messages");
//       });

//     // CHANGE: Add connection error handling
//     socket.on("connect_error", (error) => {
//       console.error("Socket connection error:", error);
//       alert("Connection failed. Please check server.");
//     });

//     socket.emit("join", currentUserId);

//     socket.on("receiveMessage", (message) => {
//       if (
//         (message.fromUserId === currentUserId && message.toUserId === toUserId) ||
//         (message.fromUserId === toUserId && message.toUserId === currentUserId)
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     return () => {
//       socket.off("receiveMessage");
//       socket.off("connect_error");
//       socket.emit("leave", currentUserId);
//     };
//   }, [currentUserId, toUserId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       const message = {
//         fromUserId: currentUserId,
//         toUserId,
//         content: newMessage
//       };
//       const { data } = await axios.post(`http://localhost:5000/messages`, message);
//       socket.emit("sendMessage", data);
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message");
//     }
//   };

//   return (
//     <div className="messages">
//       <div className="messages-header">
//         <button className="btn-secondary back-button" onClick={() => navigate("/dashboard/connections")}>
//           Back to Connections
//         </button>
//         <h2 className="section-title">Chat with {recipientName || "User"}</h2>
//       </div>
//       <div className="messages-container">
//         {messages.length === 0 ? (
//           <p className="no-messages">No messages yet</p>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
//             >
//               <p className="message-content">{msg.content}</p>
//               <span className="message-timestamp">
//                 {new Date(msg.createdAt).toLocaleTimeString()}
//               </span>
//             </div>
//           ))
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="message-input-group">
//         <input
//           type="text"
//           className="message-input"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <button className="btn-primary send-button" onClick={handleSendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messages;


// final code


// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import io from "socket.io-client";
// import "../Styles/Messages.css";

// const socket = io("http://localhost:5000", { 
//   withCredentials: true,
//   transports: ["websocket", "polling"]
// });

// const Messages = ({ currentUserId, connections }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [recipientName, setRecipientName] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!currentUserId || !selectedUser) return;

//     // Fetch recipient name
//     axios
//       .get(`http://localhost:5000/user/${selectedUser._id}`)
//       .then((res) => setRecipientName(res.data.name))
//       .catch((err) => console.error("Error fetching user:", err));

//     // Fetch initial messages
//     axios
//       .get(`http://localhost:5000/messages/${currentUserId}/${selectedUser._id}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => console.error("Error fetching messages:", err));

//     // Join Socket.IO room
//     socket.emit("join", currentUserId);

//     // Listen for incoming messages
//     socket.on("receiveMessage", (message) => {
//       if (
//         (message.fromUserId === currentUserId && message.toUserId === selectedUser._id) ||
//         (message.fromUserId === selectedUser._id && message.toUserId === currentUserId)
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("receiveMessage");
//       socket.emit("leave", currentUserId);
//     };
//   }, [currentUserId, selectedUser]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim() || !selectedUser) return;
//     try {
//       const message = {
//         fromUserId: currentUserId,
//         toUserId: selectedUser._id,
//         content: newMessage,
//       };
//       socket.emit("sendMessage", message);
//       setMessages((prev) => [...prev, message]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleCloseChat = () => {
//     setSelectedUser(null);
//     setMessages([]);
//     setRecipientName("");
//   };

//   const formatTime = (dateString) => {
//     return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <div className="messages-wrapper">
//       <div className="connections-container">
//         {connections.map((user) => (
//           <div key={user._id} className="connection-card">
//             <div className="connection-avatar">
//               <span className="avatar-initial">{user.name[0]?.toUpperCase() || '?'}</span>
//             </div>
//             <div className="connection-details">
//               <h4 className="connection-name">{user.name}</h4>
//               <p className="connection-info">Email: {user.email}</p>
//               <p className="connection-info">Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}</p>
//               <p className="connection-info">Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}</p>
//               <div className="button-group">
//                 <button
//                   className="btn-primary"
//                   onClick={() => setSelectedUser(user)}
//                 >
//                   Message
//                 </button>
//                 <button className="btn-secondary">Disconnect</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedUser && (
//         <div className="chat-container">
//           <div className="messages-header">
//             <button className="btn-secondary back-button" onClick={handleCloseChat}>
//               Close Chat
//             </button>
//             <h2 className="section-title">Chat with {recipientName}</h2>
//           </div>
//           <div className="messages-container">
//             {messages.length === 0 ? (
//               <p className="no-messages">No messages yet</p>
//             ) : (
//               messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
//                 >
//                   <p className="message-content">{msg.content}</p>
//                   <span className="message-timestamp">
//                     {formatTime(msg.createdAt)}
//                   </span>
//                 </div>
//               ))
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="message-input-group">
//             <input
//               type="text"
//               className="message-input"
//               placeholder="Type a message..."
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button className="btn-primary send-button" onClick={handleSendMessage}>
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Messages;



// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import io from "socket.io-client";
// import "../Styles/Messages.css";

// const socket = io("http://localhost:5000", { 
//   withCredentials: true,
//   transports: ["websocket", "polling"]
// });

// const Messages = ({ currentUserId, connections }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [recipientName, setRecipientName] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!currentUserId || !selectedUser) return;

//     // Fetch recipient name
//     axios
//       .get(`http://localhost:5000/user/${selectedUser._id}`)
//       .then((res) => setRecipientName(res.data.name))
//       .catch((err) => console.error("Error fetching user:", err));

//     // Fetch initial messages
//     axios
//       .get(`http://localhost:5000/messages/${currentUserId}/${selectedUser._id}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => console.error("Error fetching messages:", err));

//     // Join Socket.IO room
//     socket.emit("join", currentUserId);

//     // Listen for incoming messages
//     socket.on("receiveMessage", (message) => {
//       if (
//         (message.fromUserId === currentUserId && message.toUserId === selectedUser._id) ||
//         (message.fromUserId === selectedUser._id && message.toUserId === currentUserId)
//       ) {
//         setMessages((prev) => [...prev, message]);
//       }
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("receiveMessage");
//       socket.emit("leave", currentUserId);
//     };
//   }, [currentUserId, selectedUser]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!newMessage.trim() || !selectedUser) return;
//     try {
//       const message = {
//         fromUserId: currentUserId,
//         toUserId: selectedUser._id,
//         content: newMessage,
//       };
//       socket.emit("sendMessage", message);
//       setMessages((prev) => [...prev, message]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleCloseChat = () => {
//     setSelectedUser(null);
//     setMessages([]);
//     setRecipientName("");
//   };

//   const formatTime = (dateString) => {
//     return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <div className="messages-wrapper">
//       <div className="connections-container">
//         {connections.map((user) => (
//           <div key={user._id} className="connection-card">
//             <div className="connection-avatar">
//               <span className="avatar-initial">{user.name[0]?.toUpperCase() || '?'}</span>
//             </div>
//             <div className="connection-details">
//               <h4 className="connection-name">{user.name}</h4>
//               <p className="connection-info">Email: {user.email}</p>
//               <p className="connection-info">Can Teach: {user.teach.length ? user.teach.join(", ") : "None"}</p>
//               <p className="connection-info">Wants to Learn: {user.learn.length ? user.learn.join(", ") : "None"}</p>
//               <div className="button-group">
//                 <button
//                   className="btn-primary"
//                   onClick={() => setSelectedUser(user)}
//                 >
//                   Message
//                 </button>
//                 <button className="btn-secondary">Disconnect</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedUser && (
//         <div className="chat-container">
//           <div className="messages-header">
//             <button className="btn-secondary back-button" onClick={handleCloseChat}>
//               Close Chat
//             </button>
//             <h2 className="section-title">Chat with {recipientName}</h2>
//           </div>
//           <div className="messages-container">
//             {messages.length === 0 ? (
//               <p className="no-messages">No messages yet</p>
//             ) : (
//               messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`message ${msg.fromUserId === currentUserId ? "sent" : "received"}`}
//                 >
//                   <p className="message-content">{msg.content}</p>
//                   <span className="message-timestamp">
//                     {formatTime(msg.createdAt)}
//                   </span>
//                 </div>
//               ))
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="message-input-group">
//             <input
//               type="text"
//               className="message-input"
//               placeholder="Type a message..."
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button className="btn-primary send-button" onClick={handleSendMessage}>
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Messages;



import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "../Styles/Messages.css";

const socket = io("http://localhost:5000", { 
  withCredentials: true,
  transports: ["websocket", "polling"]
});

const Messages = ({ currentUserId, connections }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [recipientName, setRecipientName] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!currentUserId || !selectedUser) return;

    // Fetch recipient name
    axios
      .get(`http://localhost:5000/user/${selectedUser._id}`)
      .then((res) => setRecipientName(res.data.name))
      .catch((err) => console.error("Error fetching user:", err));

    // Fetch initial messages
    axios
      .get(`http://localhost:5000/messages/${currentUserId}/${selectedUser._id}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));

    // Join Socket.IO room
    socket.emit("join", currentUserId);

    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      if (
        (message.fromUserId === currentUserId && message.toUserId === selectedUser._id) ||
        (message.fromUserId === selectedUser._id && message.toUserId === currentUserId)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off("receiveMessage");
      socket.emit("leave", currentUserId);
    };
  }, [currentUserId, selectedUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;
    try {
      const message = {
        fromUserId: currentUserId,
        toUserId: selectedUser._id,
        content: newMessage,
      };
      socket.emit("sendMessage", message);
      setMessages((prev) => [...prev, message]);
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
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
                <button className="btn-secondary">Disconnect</button>
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