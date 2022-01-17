// import express library
const express = require("express");
// instantiate the app
const app = express();
// setup port number
const PORT = process.env.PORT || 3000;

// first route
// syntax: path string and callback function
app.get("/", (req, res) => {
  res.send("hello, world!");
});

// invoke app listen method
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
