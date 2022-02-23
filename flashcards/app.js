const { response } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/hello", (req, res) => {
  res.send("<h1>Hello, JS dev!</h1>");
});

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}/`);
});
