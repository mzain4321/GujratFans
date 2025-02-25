import mongoose from "mongoose";

const { MONGODB_URI} = process.env;
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1)
    {
      console.log("Connected to MongoDB");
      return Promise.resolve(true);
    }
  } 
  catch (error)
  {
    console.log(error);
    return Promise.reject(error);
  }
};