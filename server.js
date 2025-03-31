import "dotenv/config";
import express, { response } from "express";
import cors from "cors";
import { connectToDb } from "./config/dbConfig.js";
import { requireAuth } from "@clerk/express";
import { createUser, findUserByEmail, updateUser } from "./model/userModel.js";
import { createNote, findNotes } from "./model/noteModel.js";
import { noteBackgroundColorGenerator } from "./utility/noteBackgroundColorSelector.js";

const app = express();
const PORT = process.env.PROD || 3000;

app.use(cors());
app.use(express.json());

// Apply centralized middleware
app.use(requireAuth());

connectToDb();

app.post("/saveUser", requireAuth(), async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { userId, email, name, role } = req.body;

    const findUser = await findUserByEmail(email);
    if (findUser?._id) {
      await updateUser(email, {
        clerkId: authorization,
        email,
        name,
        role,
      });

      const findUser = await findUserByEmail(email);

      if (findUser._id) res.json({ data: findUser, message: "User found" });
      return;
    }

    const user = await createUser({ clerkId: userId, email, name, role });
    if (user._id) {
      res.json({ data: user });
    }
  } catch (error) {
    res.json({ error: error });
  }
});

// create Note
app.post("/note", requireAuth(), async (req, res) => {
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
app.get("/note", requireAuth(), async (req, res) => {
  try {
    const { userid } = req.headers;

    const note = await findNotes(userid);

    note.length ? res.json({ data: note }) : res.json({ data: note });
  } catch (error) {
    res.json({ error: error, message: "Something went wrong" });
  }
});

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

if (!process.env.PROD) {
  app.listen(PORT, (error) => {
    error
      ? console.log("Could not start server")
      : console.log("Server running successfully");
  });
}

export default (req, res) => {
  app(req, res);
};
