const { Model, DataTypes, Sequelize } = require("sequelize");

const { CHARACTER_TABLE } = require("./character.model");
const { MOVIE_TABLE } = require("./movie.model");

const FILMS_TABLE = "movies_characters";

const FilmSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  movieId: {
    field: "movie_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVIE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },

  characterId: {
    field: "character_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CHARACTER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Film extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FILMS_TABLE,
      modelName: "Film",
      timestamps: false,
    };
  }
}

module.exports = { Film, FilmSchema, FILMS_TABLE };
