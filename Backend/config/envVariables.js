import dotenv from "dotenv";

dotenv.config();

const envVariables = {
  PORT: process.env.PORT || 8000,
  MONGO_URI: "mongodb+srv://root:root@mern.lqjfrhn.mongodb.net/depi-project?retryWrites=true&w=majority&appName=mern",
};

export default envVariables;
