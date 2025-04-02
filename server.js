import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToDb } from "./config/dbConfig.js";
import userRouter from "./routers/userRouter.js";
import noteRouter from "./routers/noteRouter.js";

const app = express();
const PORT = process.env.PROD || 3000;

app.use(cors());
app.use(express.json());

connectToDb();

app.use("/user", userRouter);
app.use("/note", noteRouter);

// HOME ROUTE
app.get("/", (req, res) => {
  res.json({
    data: "Visit https://clerk-note-client.vercel.app to see whats cooking ✨",
  });
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
