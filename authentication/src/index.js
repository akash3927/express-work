const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routers/user");
require("../src/db/conn");
// const UserData = require("../src/models/users");
const app = express();
// const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.json({
//     message: "it is fine",
//   });
// });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post("/user", async (req, res) => {
//   try {
//     const AddingUserData = new UserData(req.body);
//     console.log(req.body);
//     AddingUserData.save();
//     // "username": "akash",
//     // "email": "akash@gmail.com"
//   } catch (e) {
//     res.send(e);
//   }
// });

app.use("/user", user);

app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
