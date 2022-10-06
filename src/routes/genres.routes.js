const express = require("express");
const GenreService = require("../services/genre.service");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {

});

router.put("/", (req, res) => {

});

router.delete("/:id", (req, res) => {

});

module.exports = router;
