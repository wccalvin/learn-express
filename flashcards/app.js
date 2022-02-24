const { response } = require("express");
const express = require("express");

const app = express();
const port = 3000;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.post("/hello", (req, res) => {
  res.render("hello");
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is the creator of python?",
    hint: "Dutch Programmer.",
  });
});

app.get("/sandbox", (req, res) => {
  res.render("sandbox", {
    title: "Sandbox Page",
    name: "Clayton",
    colors,
  });
});

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}/`);
});
