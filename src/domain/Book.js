class Book {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static create(id, name, description) {
    return new Book(id, name, description);
  }
}

module.exports = Book;
