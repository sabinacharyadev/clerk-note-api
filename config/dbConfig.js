import mongoose from "mongoose";

const DATABASE = "clerk";
const CONNECTION_URI = process.env.DATABASE_URL + DATABASE;

export const connectToDb = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI);
    if (connect) {
      console.log(`Database connected successfully at ${CONNECTION_URI}`);
    }
  } catch (error) {
    console.log(error);
  }
};
