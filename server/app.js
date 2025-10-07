import express from "express";
import cors from "cors";
//DB connection
import "./dbConnect.js";
//model database
import registerModel from "./model/User.js";


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

//Connect with the user
app.get("/connections/:userId", async (req, res) => {
  const { userId } = req.params;
  const userConnections = await Connection.find({
    $or: [{ fromUserId: userId }, { toUserId: userId }],
  }).populate("fromUserId toUserId");

  // Extract connected users (excluding self)
  const connectedUsers = userConnections.map((conn) =>
    conn.fromUserId._id.toString() === userId ? conn.toUserId : conn.fromUserId
  );

  res.json(connectedUsers);
});
// Chatgpt code :
// app.post("/connect", async (req, res) => {
//   try {
//     const { userId, connectWithId } = req.body;

//     const user = await registerModel.findById(userId);
//     const connectUser = await registerModel.findById(connectWithId);

//     if (!user || !connectUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     if (!user.connections) user.connections = [];
//     if (!user.connections.includes(connectWithId)) {
//       user.connections.push(connectWithId);
//       await user.save();
//     }

//     res.json({ status: "Connected successfully", connectedUser: connectUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.get("/connections/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await registerModel.findById(userId).populate("connections");
//     if (!user) return res.status(404).json({ error: "User not found" });
//     res.json(user.connections || []);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});