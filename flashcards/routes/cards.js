const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("card", {
    prompt: "Who is the creator of python?",
    hint: "Dutch Programmer.",
  });
});

module.exports = router;
