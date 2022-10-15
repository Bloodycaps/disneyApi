const { Model, DataTypes, Sequelize } = require("sequelize");

const { MOVIE_TABLE } = require("./movie.model");

const GENRE_TEBLE = "genres";

const GenreSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  idMovies: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "movie_id",
    references: {
      model: MOVIE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Genre extends Model {
  static associate(models) {
    this.belongsTo(models.Movie, { as: "movie" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENRE_TEBLE,
      modelName: "Genre",
      timestamps: false,
    };
  }
}

module.exports = { GENRE_TEBLE, GenreSchema, Genre };
