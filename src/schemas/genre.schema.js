const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(16);
const image = Joi.string().uri();
const movie_id = Joi.number().integer();

const createGenreSchema = Joi.object({
  name: name.required(),
  image: image,
  movie_id: movie_id,
});

const updateGenreSchema = Joi.object({
  name: name.required(),
  image: image,
  movie_id: movie_id,
});

const getGenreSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGenreSchema, updateGenreSchema, getGenreSchema };
