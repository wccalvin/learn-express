const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.get("/sandbox", (req, res) => {
  res.render("sandbox", {
    title: "Sandbox Page",
    name: "Clayton",
    colors,
  });
});

module.exports = router;
