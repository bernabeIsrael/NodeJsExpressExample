const Book = require("../domain/Book");

class BookController {
  constructor({ bookRespository }) {
    this.bookRespository = bookRespository;
    this.getBooks = this.getBooks.bind(this);
    this.creatBook = this.creatBook.bind(this);
  }

  async getBooks(req, res) {
    try {
      const books = await this.bookRespository.getBooks();
      res.json(books);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async creatBook(req, res) {
    try {
      const { name, description } = req.body;
      let book = await this.bookRespository.createBook(name, description);
      res.json({
        book: book
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookController;
