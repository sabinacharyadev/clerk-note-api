import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    note: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    backgroundColor: {
      type: String,
      default: "bg-white text-black",
    },
  },
  {
    timestamps: true,
  }
);

const noteModel = mongoose.model("note", noteSchema);
export default noteModel;
