import express from "express";
import { UserRepository } from "../repositories/user.repository";

export const router = express();

router.get("/", (req, res) => {
  res.send("Hello World From User");
});

router.post("/", async (req, res) => {
  const userRepository = new UserRepository();

  const { name, email } = req.body;

  const result = await userRepository.create({ name });

  res.status(200).json(result);
});
