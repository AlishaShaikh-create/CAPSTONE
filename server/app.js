import express from "express";
import cors from "cors";
//DB connection
import "./dbConnect.js";
//model registration database
import registerModel from "./model/User.js";


// importing the connect user database
import ConnectUser from "./model/ConnectUser.js";


const app = express();
app.use(express.json());
app.use(cors());


const PORT = 5000;

// This is just to check if the server is running at that particular port '/' or not 
app.get("/", (req, res) => {
  res.send("The server is running");
});


//Register route
app.post("/register", async (req, res) => {
  try {
    const registerFormData = new registerModel(req.body);
    await registerFormData.save();
    res.json({ status: "Data sent", user: registerFormData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

//Login api
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await registerModel.findOne({ email, password });
//     if (!user) return res.status(401).json({ error: "Invalid credentials" });
//     res.json({ user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });




//searching user based on their skills

app.post("/search", async (req, res) => {
  try {
    const { skill } = req.body;
    const users = await registerModel.find({
      teach: { $regex: skill, $options: "i" },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// //Connect with the user
// app.get("/connections/:userId", async (req, res) => {
//   const { userId } = req.params;
//   const userConnections = await Connection.find({
//     $or: [{ fromUserId: userId }, { toUserId: userId }],
//   }).populate("fromUserId toUserId");

//   // Extract connected users (excluding self)
//   const connectedUsers = userConnections.map((conn) =>
//     conn.fromUserId._id.toString() === userId ? conn.toUserId : conn.fromUserId
//   );

//   res.json(connectedUsers);
// });


// Building the connect feature:




// Connect two users
// POST /connect
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
// GET /connections/:userId
app.get("/connections/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const connections = await ConnectUser.find({
      $or: [{ fromUserId: userId }, { toUserId: userId }],
    }).populate("fromUserId toUserId");

    // Extract the connected users (exclude self)
    const connectedUsers = connections.map(conn =>
      conn.fromUserId._id.toString() === userId ? conn.toUserId : conn.fromUserId
    );

    res.json(connectedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while fetching connections" });
  }
});


// New route to fetch user details
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
        { fromUserId: toUserId, toUserId: fromUserId }
      ]
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

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});



