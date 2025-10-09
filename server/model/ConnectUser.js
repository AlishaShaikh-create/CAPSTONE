

import mongoose from "mongoose";

const connectUserSchema = new mongoose.Schema({
  fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: "RegisterForm", required: true },
  toUserId: { type: mongoose.Schema.Types.ObjectId, ref: "RegisterForm", required: true },
}, { timestamps: true });

const ConnectUser = mongoose.model("ConnectUser", connectUserSchema, "user-connections");

export default ConnectUser;