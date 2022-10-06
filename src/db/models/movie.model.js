const { Model, DataTypes, Sequelize } = require("sequelize");

const MOVIE_TABLE = "movies";

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  creationDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  rate: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Movie extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: "Movie",
      timestamp: false,
    };
  }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie };
