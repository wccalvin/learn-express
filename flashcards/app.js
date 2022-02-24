const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.render("hello", { name: req.cookies.username });
});

app.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.render("hello", { name: req.body.username });
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
