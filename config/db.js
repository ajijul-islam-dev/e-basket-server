import mongoose from "mongoose";


const connectDB = async()=>{
    try {
        const DB_URI =  process.env.MONGO_DB_URI;
        const connection = await mongoose.connect(DB_URI)
    } catch (error) {
        console.log("db error",error);
    }
}

export default connectDB;