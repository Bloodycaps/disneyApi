const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(16);
const image = Joi.string.uri();
const movie_id = Joi.number().integer();

const createGenreSchema = Joi.Object({
  name: name.required(),
  image: image,
  movie_id: movie_id,
});

const updateGenreSchema = Joi.Object({
  name: name.required(),
  image: image,
  movie_id: movie_id,
});

const getGenreSchema = Joi.Object({
  id: id.required(),
});

module.exports = { createGenreSchema, updateGenreSchema, getGenreSchema };
