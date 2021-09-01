const express = require("express");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
    unique: true,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
    require: true,
    trim: true,
  },
  time: {
    type: Number,
    default: new Date().getTime(),
  },
});

const UserData = new mongoose.model("UserData", userSchema);
module.exports = UserData;
