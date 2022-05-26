const awilix = require('awilix');
const BookRepository = require('./repositories/book.repository.js');
const BookController = require('./controllers/book.controller.js');

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
