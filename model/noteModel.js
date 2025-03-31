import noteModel from "../schema/noteSchema.js";

export const createNote = (noteObject) => {
  return noteModel(noteObject).save();
};

export const findNotes = async (userId) => {
  return noteModel.find({ userId: userId }, "_id note");
};
