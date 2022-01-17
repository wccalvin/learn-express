// import express library
const express = require("express");
// instantiate the app
const app = express();
// setup port number
const PORT = process.env.PORT || 3000;

// first route
// syntax: path string and callback function
app.get("/", (req, res) => {
  // console.log(req);
  res.send("<h1>hello, world!</h1>");
});

// invoke app listen method
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
