import express from "express";
import { requireAuth } from "@clerk/express";
import { createNote, findNotes } from "../model/noteModel";
import { noteBackgroundColorGenerator } from "../utility/noteBackgroundColorSelector";

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
    res.json({ error: error });
  }
});

// READ NOTES
noteRouter.get("/", requireAuth(), async (req, res) => {
  try {
    const { userid } = req.headers;

    const note = await findNotes(userid);

    note.length ? res.json({ data: note }) : res.json({ data: note });
  } catch (error) {
    res.json({ error: error, message: "Something went wrong" });
  }
});

export default noteRouter;
