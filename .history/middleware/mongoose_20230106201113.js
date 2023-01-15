import mongoose from 'mongoose';

const connectDb = handler => async (req,res) => {

    if (mongoose.connection.readyState === 1) {
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected.")
    return handler(req,res)
   
    
}
export default connectDb;