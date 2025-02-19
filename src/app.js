const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet").default;
const compression = require("compression");

const app = express();

// Initialize middlewares
require("dotenv").config();
app.use(morgan("dev")); // Modes: dev, combined, common, short, tiny
app.use(helmet());
app.use(compression());
app.use(express.json());

// Initialize DB
require("./dbs/init.mongodb");
const { countConnect, checkOverload } = require("./helpers/check.connect");
const authRouter = require("./routers/auth.router");
// countConnect();
// checkOverload();
// Initialize routers
app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Welcome!" });
});
app.use("/api/v1/auth", authRouter);

// Handle errors

module.exports = app;
