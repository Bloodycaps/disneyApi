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
    unique: true,
    type: DataTypes.STRING,
  },
  creationDate: {
    allowNull: false,
    field: "creation_date",
    type: DataTypes.DATE,
  },
  rate: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Movie extends Model {
  static associate(models) {
    this.hasMany(models.Genre, {
      as: "genres",
      foreignKey: "idMovies",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: "Movie",
      timestamps: false,
    };
  }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie };
