const express = require("express");
const GenreService = require("../services/genre.service");

const router = express.Router();
const service = new GenreService();

router.get("/", async (req, res, next) => {
  try {
    const genres = await service.findAll();
    res.json(genres);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const newGenre = await service.create(body);
    res.status(201).json(newGenre);
  } catch (error) {
    next(error);    
  }
});

router.put("/", (req, res) => {

});

router.delete("/:id", (req, res) => {

});

module.exports = router;
