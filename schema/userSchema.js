import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: "buyer",
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
