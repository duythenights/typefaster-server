const { Router } = require("express");
const { loginUser, registerUser } = require("../controllers/auth.controllers");

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/test", (req, res) => {
  res.send({ message: "hehe" });
});

module.exports = authRouter;
