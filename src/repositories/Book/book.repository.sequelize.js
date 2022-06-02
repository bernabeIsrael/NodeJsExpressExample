const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book-db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
});

const BookRepositoryInterface = require("./book.repository.interface");

class BookSequelizeRepository extends BookRepositoryInterface {
  getBooks() {
    return new Promise((resolve, reject) => {
      let books = [
        {
          id: 1,
          title: "The Lord of the Rings",
        },
        {
          id: 1,
          title: "OKRs",
        },
      ];
      resolve(books);
    });
  }
}

module.exports = BookSequelizeRepository;
