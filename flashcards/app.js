const { response } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who s the creator of python?",
    hint: "Dutch Programmer.",
  });
});

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}/`);
});
