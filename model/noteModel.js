import noteModel from "../schema/noteSchema.js";

export const createNote = (noteObject) => {
  return noteModel(noteObject).save();
};

export const findNotes = async (userId) => {
  return noteModel.find(
    { userId: userId },
    "_id note updatedAt backgroundColor"
  );
};

export const updateNote = async (noteObject) => {
  const { id } = noteObject;
  return noteModel.findOneAndUpdate(id, noteObject);
};

export const deleteNotes = async (noteIds) => {
  return noteModel.deleteMany({ _id: noteIds });
};
