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
  },
  {
    timestamps: true,
  }
);

const noteModel = mongoose.model("note", noteSchema);
export default noteModel;
