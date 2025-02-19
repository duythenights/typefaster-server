"use strict";

const mongoose = require("mongoose");

const connectString = "mongodb://admin:adminpass@localhost:27017/";
console.log(connectString);
mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected mongodb success`))
  .catch((error) => `Connect Fail:${error}`);

module.exports = mongoose;
