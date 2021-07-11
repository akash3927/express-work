const express = require("express");
const path = require("path");
const app = express();

// const users = require("./users");
const logger = require("./middleware/logger");
const useRouter = require("./routes/users");

const PORT = process.env.PORT || 4000;

// const users = [
//   {
//     id: 1,
//     name: "sky1",
//   },
//   {
//     id: 2,
//     name: "sky2",
//   },
//   {
//     id: 3,
//     name: "sky3",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("<h1>hello world!</h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const logger = (req, res, next) => {
//   console.log(`${req.protocol}://${req.get("host")}${req.url}--${new Date()}`);
//   next();
// };

//init logger
app.use(express.json());
app.use(logger);
app.use("/api/users", useRouter);

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id === parseInt(id));

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(400).json({ message: `user not found with id-${id}` });
//   }

//   //   res.json(user);
// });

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`app.listening on port ${PORT}`));
