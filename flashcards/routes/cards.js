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
    templateData.id = id;
    templateData.sideToShow = "answer";
    templateData.sideToShowDisplay = "Answer";
  } else if (side === "answer") {
    templateData.hint = hint;
    templateData.id = id;
    templateData.sideToShow = "question";
    templateData.sideToShowDisplay = "Question";
  }
  res.render("card", templateData);
});

module.exports = router;
