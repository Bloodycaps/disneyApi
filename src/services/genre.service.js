const boom = require("@hapi/boom");
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
  async findById(id) {
    const genre = await models.Genre.findByPk(id, {
      include: ["movie"],
    });
    return genre;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = GenreService;
