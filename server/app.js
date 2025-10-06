// import express from 'express'
// import cors from 'cors'

// //db connection
// import './dbConnect.js';

// //Model import 
// import registerModel from './model/User.js';


// const app = express();
// app.use(express.json())
// app.use(cors())

// const PORT = 5000;

// app.get('/' , (req,res)=>{
//     res.send("The server is running")
// });


// //register data 
// app.post('/register', async(req,res)=>{
// try{
//     console.log(req.body)
//     const registerFormData = new registerModel(req.body);
//     console.log(registerFormData);

//     await registerFormData.save()
//     res.json({status:"Data sent"})
// }catch(error)
// {
//     console.log(error);
// }

// })




// // Search option

// app.post("/search", async (req, res) => {
//   try {
//     const { skill } = req.body;

//     // 🔍 Find users where teach OR learn contains the skill
//     const users = await registerModel.find({
//       $or: [
//         { teach: { $regex: skill, $options: "i" } }, 
//         { learn: { $regex: skill, $options: "i" } },
//       ],
//     });

//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


// //connection option
// // Connect with a user
// app.post("/connect", async (req, res) => {
//   try {
//     const { userId, connectWithId } = req.body;

//     // Add the connection if not already connected
//     const user = await registerModel.findById(userId);
//     if (!user.connections.includes(connectWithId)) {
//       user.connections.push(connectWithId);
//       await user.save();
//     }

//     res.json({ status: "Connected successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// //connect with user:
// app.get("/connections/:userId", async (req, res) => {
//   try {
//     const user = await registerModel.findById(req.params.userId).populate('connections');
//     res.json(user.connections || []);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });




// app.listen(PORT , ()=>{
//     console.log(`The app is listening to the port ${PORT}`)
// })





// 2nd time
// import express from 'express';
// import cors from 'cors';

// // DB connection
// import './dbConnect.js';

// // Model import
// import registerModel from './model/User.js';

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = 5000;

// // Home route
// app.get('/', (req, res) => {
//   res.send("The server is running");
// });

// // Register route
// app.post('/register', async (req, res) => {
//   try {
//     const registerFormData = new registerModel(req.body);
//     await registerFormData.save();
//     res.json({ status: "Data sent", user: registerFormData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
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

// // Search route - only users who can teach
// app.post("/search", async (req, res) => {
//   try {
//     const { skill } = req.body;
//     const users = await registerModel.find({
//       teach: { $regex: skill, $options: "i" },
//     });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // Connect route
// app.post("/connect", async (req, res) => {
//   try {
//     const { userId, connectWithId } = req.body;

//     const user = await registerModel.findById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     if (!user.connections) user.connections = [];
//     if (!user.connections.includes(connectWithId)) {
//       user.connections.push(connectWithId);
//       await user.save();
//     }

//     res.json({ status: "Connected successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// //fetch the data 
// // Get connected users for a logged-in user
// app.get("/connections/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const user = await registerModel.findById(userId).populate("connections");
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Fetch all users whose _id is in the connections array
//     const connectedUsers = await registerModel.find({
//       _id: { $in: user.connections || [] },
//     });

//     res.json(connectedUsers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });




// app.listen(PORT, () => {
//   console.log(`The app is listening on port ${PORT}`);
// });




// import express from "express";
// import cors from "cors";

// // DB connection
// import "./dbConnect.js";

// // Model import
// import registerModel from "./model/User.js";

// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = 5000;

// // ✅ Home route
// app.get("/", (req, res) => {
//   res.send("The server is running");
// });

// // ✅ Register route
// app.post("/register", async (req, res) => {
//   try {
//     const registerFormData = new registerModel(req.body);
//     await registerFormData.save();
//     res.json({ status: "Data sent", user: registerFormData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // ✅ Login route
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

// // ✅ Search route
// app.post("/search", async (req, res) => {
//   try {
//     const { skill } = req.body;
//     const users = await registerModel.find({
//       teach: { $regex: skill, $options: "i" },
//     });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // ✅ Connect route
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

//     // ✅ Return the connected user's details
//     res.json({ status: "Connected successfully", connectedUser: connectUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // ✅ Get all connections of a user
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

// app.listen(PORT, () => {
//   console.log(`The app is listening on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import "./dbConnect.js";
import registerModel from "./model/User.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerModel.findOne({ email, password });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

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

//Chatgpt code :
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