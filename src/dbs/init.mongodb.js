"use strict";
const mongoose = require("mongoose");
const process = require("process");
const connectString = process.env.MONGO_URI;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    // check env
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log("Connect to DB successfully"))
      .catch((err) => console.log(`ERROR: ${err}`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}
const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
