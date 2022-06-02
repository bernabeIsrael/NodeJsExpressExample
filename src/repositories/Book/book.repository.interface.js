class BookRepositoryInterface {
  constructor() {
    if (!this.getBooks) {
      throw new Error("Book Repository must have getBooks method");
    }
  }
}

module.exports = BookRepositoryInterface;