// import express from "express";
// import cors from "cors";

// // import bcrypt from 'bcrypt';

// //DB connection
// import "./utils/dbConnect.js";


// //model registration database
// import registerModel from "./model/User.js";


// //controller
// import userRouter from './controllers/userController.js'


// // importing the connect user database
// import ConnectUser from "./model/ConnectUser.js";


// import Message from "./model/Message.js";


// const PORT = 5000;

// const app = express();
// app.use(express.json());
// app.use(cors());




// // This is just to check if the server is running at that particular port '/' or not 
// app.get("/", (req, res) => {
//   res.send("The server is running");
// });

// app.use('/api/user',userRouter);

// //Register route
// // app.post("/register", async (req, res) => {
// //   try {

  
// //     let hash = await bcrypt.hash(req.body.password ,12 );
// //     req.body.password = hash;
// //     console.log(req.body.password);


// //     const registerFormData = await  registerModel(req.body);
// //     await registerFormData.save();
// //     // res.json({ status: "Data sent", user: registerFormData });

// //     res.status(200).json({Success:"User Registered Successfully!"})
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({ error: "Internal Server Error , Try again" });
// //   }
// // });




// // Login api
// // app.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await registerModel.findOne({ email, password });
// //     if (user)
// //       {
// //        console.log(user.password ,user.email);
// //        const comparehash = await bcrypt.compare(psw , user.psw);

// //       }
      
// //       if(!user)
// //       {
// //         console.error('This email is not associated with any account');
// //         return res.json({ error : "This email is not associated with any account"})
// //       } else if(!comparehash)
// //       {
// //         console.error('Incorrect Password');
// //         return res.json({error : "Incorrect Password!"})
// //       }
// //     res.status(200).json({status: 'User verified!'});


// //   } catch (error) {
// //     console.log(error);
    
// //     res.status(500).json({ error: "Something went wrong" });
// //   }
// // });

// //searching user based on their skills

// // app.post("/search", async (req, res) => {
// //   try {
// //     const { skill } = req.body;
// //     const users = await registerModel.find({
// //       teach: { $regex: skill, $options: "i" },
// //     });
// //     res.json(users);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Something went wrong" });
// //   }
// // });

// // Connect two users
// // POST /connect
// app.post("/connect", async (req, res) => {
//   try {
//     const { fromUserId, toUserId } = req.body;

//     if (!fromUserId || !toUserId)
//       return res.status(400).json({ error: "Both user IDs are required" });

//     // Prevent duplicate connections
//     const existing = await ConnectUser.findOne({
//       $or: [
//         { fromUserId, toUserId },
//         { fromUserId: toUserId, toUserId: fromUserId },
//       ],
//     });

//     if (existing)
//       return res.status(400).json({ error: "You are already connected!" });

//     const newConnection = new ConnectUser({ fromUserId, toUserId });
//     await newConnection.save();

//     res.json({ message: "Connection created successfully", newConnection });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong while connecting" });
//   }
// });


// // Get all connections for a user
// // GET /connections/:userId
// app.get("/connections/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const connections = await ConnectUser.find({
//       $or: [{ fromUserId: userId }, { toUserId: userId }],
//     }).populate("fromUserId toUserId");

//     // Extract the connected users (exclude self)
//     const connectedUsers = connections.map(conn =>
//       conn.fromUserId._id.toString() === userId ? conn.toUserId : conn.fromUserId
//     );

//     res.json(connectedUsers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong while fetching connections" });
//   }
// });


// // New route to fetch user details
// app.get("/user/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await registerModel.findById(userId).select("name teach learn location about");
//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


// app.delete("/connections/:fromUserId/:toUserId", async (req, res) => {
//   try {
//     const { fromUserId, toUserId } = req.params;
//     const connection = await ConnectUser.findOneAndDelete({
//       $or: [
//         { fromUserId, toUserId },
//         { fromUserId: toUserId, toUserId: fromUserId }
//       ]
//     });
//     if (!connection) {
//       return res.status(404).json({ error: "Connection not found" });
//     }
//     res.json({ message: "Disconnected successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong while disconnecting" });
//   }
// });

// // New message routes
// app.get("/messages/:fromUserId/:toUserId", async (req, res) => {
//   try {
//     const { fromUserId, toUserId } = req.params;
//     const messages = await Message.find({
//       $or: [
//         { fromUserId, toUserId },
//         { fromUserId: toUserId, toUserId: fromUserId }
//       ]
//     }).sort({ createdAt: 1 });
//     res.json(messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong while fetching messages" });
//   }
// });

// app.post("/messages", async (req, res) => {
//   try {
//     const { fromUserId, toUserId, content } = req.body;
//     if (!fromUserId || !toUserId || !content) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }
//     const message = new Message({ fromUserId, toUserId, content });
//     await message.save();
//     res.json(message);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong while sending message" });
//   }
// });




// app.listen(PORT, () => {
//   console.log(`The app is listening on port ${PORT}`);
// });



import express from "express";
import cors from "cors";
import http from "http"; // Import http module for Socket.IO
import { Server } from "socket.io"; // Import Socket.IO
import "./utils/dbConnect.js"; // DB connection
import registerModel from "./model/User.js"; // User model
import userRouter from "./controllers/userController.js"; // User routes
import ConnectUser from "./model/ConnectUser.js"; // Connection model
import Message from "./model/Message.js"; // Message model

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Match your frontend URL (update if different, e.g., 3000 for Create React App)
    methods: ["GET", "POST"],
  },
});

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", (userId) => {
    socket.join(userId); // Join a room based on userId
    console.log(`User ${userId} joined room`);
  });

  socket.on("sendMessage", (message) => {
    const { fromUserId, toUserId, content } = message;
    console.log(`Message from ${fromUserId} to ${toUserId}: ${content}`);

    // Save message to database
    const newMessage = new Message({ fromUserId, toUserId, content });
    newMessage.save()
      .then(() => {
        // Broadcast to recipient and sender
        io.to(toUserId).emit("receiveMessage", newMessage);
        io.to(fromUserId).emit("receiveMessage", newMessage); // Optional: Echo to sender
      })
      .catch((err) => console.error("Error saving message:", err));
  });

  socket.on("leave", (userId) => {
    socket.leave(userId);
    console.log(`User ${userId} left room`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Root route to check server status
app.get("/", (req, res) => {
  res.send("The server is running");
});

app.use("/api/user", userRouter);

// Connect two users
app.post("/connect", async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.body;

    if (!fromUserId || !toUserId)
      return res.status(400).json({ error: "Both user IDs are required" });

    // Prevent duplicate connections
    const existing = await ConnectUser.findOne({
      $or: [
        { fromUserId, toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });

    if (existing)
      return res.status(400).json({ error: "You are already connected!" });

    const newConnection = new ConnectUser({ fromUserId, toUserId });
    await newConnection.save();

    res.json({ message: "Connection created successfully", newConnection });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while connecting" });
  }
});

// Get all connections for a user
app.get("/connections/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const connections = await ConnectUser.find({
      $or: [{ fromUserId: userId }, { toUserId: userId }],
    }).populate("fromUserId toUserId");

    const connectedUsers = connections.map(conn =>
      conn.fromUserId._id.toString() === userId ? conn.toUserId : conn.fromUserId
    );

    res.json(connectedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while fetching connections" });
  }
});

// Fetch user details
app.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await registerModel.findById(userId).select("name teach learn location about");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/connections/:fromUserId/:toUserId", async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.params;
    const connection = await ConnectUser.findOneAndDelete({
      $or: [
        { fromUserId, toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });
    if (!connection) {
      return res.status(404).json({ error: "Connection not found" });
    }
    res.json({ message: "Disconnected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while disconnecting" });
  }
});

// Fetch messages
app.get("/messages/:fromUserId/:toUserId", async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.params;
    const messages = await Message.find({
      $or: [
        { fromUserId, toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while fetching messages" });
  }
});

// Send message
app.post("/messages", async (req, res) => {
  try {
    const { fromUserId, toUserId, content } = req.body;
    if (!fromUserId || !toUserId || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const message = new Message({ fromUserId, toUserId, content });
    await message.save();
    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while sending message" });
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
