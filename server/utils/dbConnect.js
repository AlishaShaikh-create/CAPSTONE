import mongoose from 'mongoose'

async function connectDB() {
    try{
        await mongoose.connect(`mongodb+srv://alisha:alisha@cluster0.qygbuhk.mongodb.net/TeachMe`)
        console.log("Connected to MongoDB");
    }catch(error)
    {
        console.log(error);
    }
    
}

connectDB();

export default connectDB;