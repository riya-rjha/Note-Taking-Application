import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../Model/users.js"; // Consistent import
import "dotenv/config";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new userModel({ username, password }); 
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid username or password");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_secret);
    res.send({ token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
