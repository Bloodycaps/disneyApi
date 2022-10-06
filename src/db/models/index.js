const { Genre, GenreSchema } = require("./genre.model");
const { Movie, MovieSchema} = require("./movie.model");


function setupModel(sequelize) {
  Genre.init(GenreSchema, Genre.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
}

module.exports = setupModel;