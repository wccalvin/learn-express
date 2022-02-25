const express = require("express");
const { data } = require("../data/flashcardData.json");
const { cards } = data;

const router = express.Router();

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text };
  if (side === "question") {
    templateData.hint = hint;
  }
  res.render("card", templateData);
});

module.exports = router;
