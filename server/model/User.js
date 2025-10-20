import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    location:{
    type:String
    },
    about:{
        type:String
    },

   teach: { type: [String], default: [] },
  learn: { type: [String], default: [] },

  verifyToken: {
        email: {
            type: String,
            required: true
        },
        phone:{
            type:String,
            required:true
        }
    },
    userVerified: {
        email: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Boolean,
            default: false
        }
    }

});

const registerModel = mongoose.model("RegisterForm", registerSchema, "user-registration");

export default registerModel;