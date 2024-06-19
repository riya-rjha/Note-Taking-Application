import { Router } from "express";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import User, { findOne } from "../models/User";
import "dotenv/config";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findOne({ username });
    if (!user || !(await compare(password, user.password))) {
      throw new Error("Invalid username or password");
    }
    const token = sign({ userId: user._id }, process.env.JWT_secret);
    res.send({ token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
