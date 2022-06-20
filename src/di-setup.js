const awilix = require("awilix");
const BookRepository = require("./infrastructure/persistence/sequelize/book.repository.sequelize");
const BookController = require("./controllers/book.controller.js");

const enviroment  = process.env.enviroment;

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});


function setup() {
  container.register({
    bookRespository: awilix.asClass(BookRepository),

    //Controllers
    bookController: awilix.asClass(BookController),
  });
}

module.exports = {
  container,
  setup,
};
