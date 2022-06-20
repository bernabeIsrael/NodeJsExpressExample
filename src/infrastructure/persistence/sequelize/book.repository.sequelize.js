const BookSequelize = require("./models/Book");
const Book = require("../../../domain/Book");

const BookRepositoryInterface = require("../../../repositories/Book/book.repository.interface");

class BookSequelizeRepository extends BookRepositoryInterface {
  /*
   * Get book list
   * @return {Book[]} books
   */
  async getBooks() {
    let books = [];
    try {
      books = await BookSequelize.findAll();
      books = books.map((bookSequelize) => {
        return Book.create(
          bookSequelize.id,
          bookSequelize.name,
          bookSequelize.description
        );
      });
    } catch (error) {
      console.log("error", error);
    }
    return books;
  }

  /*
   * Create a book
   * @param {string} name
   * @param {string} description
   * @return {Book}
   */
  async createBook(name,description) {
    let newBook = await BookSequelize.create({name,description});
    return Book.create(newBook.id, newBook.name, newBook.description);
  }
}

module.exports = BookSequelizeRepository;
