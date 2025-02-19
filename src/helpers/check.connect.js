"use strict";

const mongoose = require("mongoose");

// count number of connections
const countConnect = () => {
  const count = mongoose.connections.length;
  console.log(`Number of connections:::`, count);
};

// check overload
const os = require("os");
const process = require("process");
const { convertByteToMB } = require("../utils/convert-unit.utils");
const _SECONDS = 5000;
const _MAX_CONNECTION_EACH_CORE = 5;
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Active connections:::`, numConnection);
    console.log(`Memory usaged:::`, convertByteToMB(memoryUsage));

    // Assumed that each core can maximun processed 5 connections.
    if (numCores * _MAX_CONNECTION_EACH_CORE < numConnection) {
      console.log(`Connection overload detected!`);
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
