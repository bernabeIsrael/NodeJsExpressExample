class BookController {
  constructor({ bookRespository }) {
    this.bookRespository = bookRespository;
    this.getBooks = this.getBooks.bind(this);
  }

  async getBooks(req, res) {
    try {
      const books = await this.bookRespository.getBooks();
      res.json(books);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookController;
