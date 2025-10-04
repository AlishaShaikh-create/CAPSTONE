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

  teach:{
    type:String
  },
  learn:{
    type:String
    
  }

});

const registerModel = mongoose.model("RegisterForm", registerSchema, "user-registration");

export default registerModel;