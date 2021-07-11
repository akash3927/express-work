const express = require("express");
const users = require("../users");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.json(user);
  } else {
    res.status(400).json({ message: `user not found with id-${id}` });
  }

  //   res.json(user);
});

//create user
router.post("/", (req, res) => {
  const newUser = {
    id: (users.length || 0) + 1,
    name: req.body.name,
  };
  if (!newUser.name) {
    res.status(400).json({ message: "please enter the name" });
  } else {
    users.push(newUser);
    res.json(users);
  }
});

//update user
router.put("/", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    const updatedUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(id)) {
        user.name = updatedUser.name;
        return res.json({ message: "user updated", user });
      }
    });
  } else {
    res.status(400).json({ message: `user not found with id-${id}` });
  }
});

//delete user
router.delete("/", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    return res.json({
      message: "user deleted!",
      users: users.filter((user) => user.id != parseInt(id)),
    });
  } else {
    res.status(400).json({ message: `user not found with id-${id}` });
  }
});

module.exports = router;
