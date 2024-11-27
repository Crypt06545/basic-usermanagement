const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "mehadi", email: "meahdi@gmail.com" },
  { id: 2, name: "mehadi2", email: "meahdi2@gmail.com" },
  { id: 3, name: "mehadi3", email: "meahdi3@gmail.com" },
];
// get requests
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

// post requests
app.post("/users", (req, res) => {
  //   res.send(users);
  console.log("server hitting ");

  console.log(req.body);
  const newUSer = req.body;
  newUSer.id = users.length + 1;
  users.push(newUSer);
  res.send(newUSer);
});

// console.log(users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
