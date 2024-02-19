const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors=require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(3002, () => {
  console.log("app is listening on 3002");
});
