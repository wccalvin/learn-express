// import express library
const express = require("express");
// instantiate the app
const app = express();
// setup port number
const PORT = process.env.PORT || 3001;

// invoke app listen method
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
