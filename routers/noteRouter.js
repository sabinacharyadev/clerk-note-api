import express from "express";
import { requireAuth } from "@clerk/express";
import {
  createNote,
  deleteNotes,
  findNotes,
  updateNote,
} from "../model/noteModel.js";
import { noteBackgroundColorGenerator } from "../utility/noteBackgroundColorSelector.js";

const noteRouter = express.Router();

// create Note
noteRouter.post("/", requireAuth(), async (req, res) => {
  try {
    const { userId, note } = req.body;
    const response = await createNote({
      userId,
      note,
      backgroundColor: noteBackgroundColorGenerator(),
    });
    if (response._id) {
      res.json({ data: response });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

// READ NOTES
noteRouter.get("/", requireAuth(), async (req, res) => {
  try {
    const { userid } = req.headers;
    const note = await findNotes(userid);

    note.length ? res.json({ data: note }) : res.json({ note });
  } catch (error) {
    console.log(error);
    res.json({ error: error, message: "Something went wrong" });
  }
});

// UPDATE NOTE
noteRouter.patch("/", requireAuth(), async (req, res) => {
  try {
    const { note } = req.body;

    const updatedNote = await updateNote(note);
    updatedNote._id
      ? res.json({ data: note })
      : res.json({ message: "could not create note" });
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" });
  }
});

// DELETE NOTES
noteRouter.delete("/", requireAuth(), async (req, res) => {
  try {
    const deletedNotes = await deleteNotes(req.body);
    const { acknowledged, deletedCount } = deletedNotes;
    deletedNotes.acknowledged
      ? res.json({ data: `${deletedCount} note(s) deleted` })
      : res.json({ message: "could not delete note" });
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" });
  }
});

export default noteRouter;
