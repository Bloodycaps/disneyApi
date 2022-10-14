const { Genre, GenreSchema } = require("./genre.model");
const { Movie, MovieSchema } = require("./movie.model");
const { Character, CharacterSchema } = require("./character.model");

function setupModel(sequelize) {
  Genre.init(GenreSchema, Genre.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
  Character.init(CharacterSchema, Character.config(sequelize));

  Genre.associate(sequelize.models);
  Movie.associate(sequelize.models);
}

module.exports = setupModel;
