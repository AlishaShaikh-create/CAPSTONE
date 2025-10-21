// import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema({
//   fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: "RegisterForm", required: true },
//   toUserId: { type: mongoose.Schema.Types.ObjectId, ref: "RegisterForm", required: true },
//   content: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("Message", messageSchema);

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  fromUserId: { type: String, required: true },
  toUserId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Message", messageSchema);

