import express from "express";

export const router = express();

router.get("/", (req, res) => {
  res.send("Hello World From Client");
});