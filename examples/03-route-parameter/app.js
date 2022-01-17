// import express library
const express = require("express");
// instantiate the app
const app = express();
// setup port number
const PORT = process.env.PORT || 3000;

// first route
// syntax: path string and callback function
app.get("/", (req, res) => {
  res.send('<h1 style="color: blue;">hello, world!</h1>');
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1 style="font-size: 80px; color: green">hello, ${name}!</h1>`);
});

// invoke app listen method
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
