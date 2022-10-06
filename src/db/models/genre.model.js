const { Model, DataTypes, Sequelize } = require("sequelize");

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
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  idMovies: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Genre extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENRE_TEBLE,
      modelName: "Genre",
      timestamp: false,
    };
  }
}

module.exports = { GENRE_TEBLE, GenreSchema, Genre };
