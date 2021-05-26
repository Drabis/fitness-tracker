//Import path package
const path = require("path");
//Import express Router
const express = require("express");
const router = express.Router();
// Router to get render all the exercises.
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// router to render all the stats.
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
// route to render the main HTML pagae
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html.html"));
});

module.exports = router;
