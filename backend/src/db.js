import mongoose from 'mongoose';



const connectDB=async ()=>{
    try {
       
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
}

export default connectDB;