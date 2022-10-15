const { models } = require("./../libs/sequelize");
class GenreService {
  constructor() {}
  async create(data) {
    const newGenre = await models.Genre.create(data);
    return newGenre;
  }

  async findAll() {
    const genres = await models.Genre.findAll();
    return genres;
  }
  findById() {}

  update() {}

  delete() {}
}

module.exports = GenreService;
