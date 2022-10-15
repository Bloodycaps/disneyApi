const express = require("express");
const GenreService = require("../services/genre.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  createGenreSchema,
  getGenreSchema,
  updateGenreSchema,
} = require("./../schemas/genre.schema");

const router = express.Router();
const service = new GenreService();

router.get(
  "/",
  validatorHandler(getGenreSchema, "params"),
  async (req, res, next) => {
    try {
      const genres = await service.findAll();
      res.json(genres);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getGenreSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const genre = await service.findById(id);
      res.json(genre);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/", 
validatorHandler(createGenreSchema, "body"),
async (req, res, next) => {
  try {
    const body = req.body;
    const newGenre = await service.create(body);
    res.status(201).json(newGenre);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id",
validatorHandler(getGenreSchema, "params"),
validatorHandler(updateGenreSchema, "body"),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const genre = await service.update(id, body);
    res.json(genre);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(204).json({ id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
