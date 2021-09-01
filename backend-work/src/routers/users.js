const express = require("express");

const router = new express.Router();

const UserData = require("../models/user");

router.post("/user", async (req, res) => {
  try {
    const AddingUserData = new UserData(req.body);
    console.log(req.body);
    const insertUser = await AddingUserData.save();
    res.status(201).res.send(insertUser);
  } catch (e) {
    res.status(400).res.send(e);
  }
});
router.get("/user", async (req, res) => {
  try {
    const getUser = await UserData.find({});
    res.send(getUser);
  } catch (e) {
    res.status(400).res.send(e);
  }
});
router.patch("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getUser = await UserData.findByIdAndUpdate(_id, req.body);
    res.send(getUser);
  } catch (e) {
    res.status(500).res.send(e);
  }
});
router.delete("/user/:id", async (req, res) => {
  try {
    const getUser = await UserData.findByIdAndDelete(req.params.id);
    res.send(getUser);
  } catch (e) {
    res.status(500).res.send(e);
  }
});
module.exports = router;
