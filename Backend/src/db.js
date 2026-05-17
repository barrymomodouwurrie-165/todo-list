import mongoose from "mongoose";

 const db_connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("database connected successfuly");
  } catch (error) {
    console.error("db connection failed", error);
  }
};

export default db_connect