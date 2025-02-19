const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet").default;
const compression = require("compression");

const app = express();

// Initialize middlewares
app.use(morgan("dev")); // Modes: dev, combined, common, short, tiny
app.use(helmet());
app.use(compression());

// Initialize DB
require("./dbs/init.mongodb");
const { countConnect, checkOverload } = require("./helpers/check.connect");
countConnect();
checkOverload();
// Initialize routers
app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Welcome!" });
});

// Handle errors

module.exports = app;
