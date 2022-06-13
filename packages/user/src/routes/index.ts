import express from "express";
import { CellphoneRepository } from "../repositories/cellphone.repository";
import { UserRepository } from "../repositories/user.repository";

export const router = express();

router.get("/", async (req, res) => {
  const userRepository = new UserRepository();

  const users = await userRepository.findAll();

  res.json(users);
});

router.post("/", async (req, res) => {
  const userRepository = new UserRepository();

  const { name } = req.body;

  const result = await userRepository.create({ name });

  res.status(200).json(result);
});

router.put("/:id", async (req, res) => {
  const userRepository = new UserRepository();
  const cellphoneRepository = new CellphoneRepository();

  const { name, cellphone } = req.body;
  const { id } = req.params;

  let user = await userRepository.update({ id, data: { name } });
  if (!user) res.status(404).json({ message: "User not found" });

  if (cellphone) {
    console.log("cellphone", cellphone);
    const phone = await cellphoneRepository.create({
      number: cellphone,
      userId: user.id,
    });
    user = await userRepository.linkCellphone({
      userId: user._id,
      cellphoneId: phone._id,
    });
  }

  res.status(200).json(user);
});
