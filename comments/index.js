const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors=require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
const commentsById = {};
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsById[req.params.id] || []);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsById[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsById[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(3001, () => {
  console.log("app is listening on 3001");
});
