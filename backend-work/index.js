const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
require("./src/db/conn");
const UserData = require("./src/models/user");
const userRouter = require("./src/routers/users");
const user = require("./src/models/authschema");
const authrouter = require("./src/routers/authroutes");
const app = express();
const PORT = process.env.PORT || 9000;

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);

app.use("/authroutes", authrouter);
app.listen(PORT, (req, res) => {
  console.log(`app is running on ${PORT}`);
});
