import express from "express";
import { ClientRepository } from "../repositories/client.repository";

export const router = express();

router.get("/", (req, res) => {
  res.send("Hello World From Client");
});

router.post("/", async (req, res) => {
  const clientRepository = new ClientRepository();

  const { name, email } = req.body;

  const result = await clientRepository.create({ name, email })

  res
    .status(200)
    .json(result);
});
