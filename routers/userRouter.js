import express from "express";
import { requireAuth } from "@clerk/express";
import { createUser, findUserByEmail, updateUser } from "../model/userModel.js";

const userRouter = express.Router();

userRouter.post("/", requireAuth(), async (req, res) => {
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

export default userRouter;
