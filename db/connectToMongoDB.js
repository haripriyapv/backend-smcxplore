import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try{
      const res =   await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("connected to MongoDB");
    }catch(error){
console.log("error connecting to MongoDB",error .message);
    }
     };

     




