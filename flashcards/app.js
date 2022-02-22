const { response } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, there!</h1>");
});
app.get("/hello", (req, res) => {
  res.send("<h1>Hello, JS dev!</h1>");
});

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}/`);
});
