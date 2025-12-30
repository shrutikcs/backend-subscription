import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all user" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user details" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE user details" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new user" });
});
userRouter.delete("/", (req, res) => {
  res.send({ title: "CREATE new user" });
});

export default userRouter
