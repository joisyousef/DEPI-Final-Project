import mongoose from "mongoose";
import envVariables from "./envVariables.js";

const connectDatabase = async function () {
  try {
    const connection = await mongoose.connect(envVariables.MONGO_URI);
    console.log(
      `Database is connected successfull on ${connection.connection.host}`
    );
  } catch (error) {
    throw new Error(`Can't connect to database ${error}`);
  }
};

export default connectDatabase;
