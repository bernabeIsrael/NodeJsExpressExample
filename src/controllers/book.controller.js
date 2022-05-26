
class BookController {
    constructor({ bookRespository }) {
        this.bookRespository = bookRespository;
        this.getBooks = this.getBooks.bind(this);
    }

    async getBooks(req, res) {
        try {
            console.log("this.bookService",this.bookRespository);
            const books = await this.bookRespository.getBooks();
            console.log("books", books);
            res.json(books);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = BookController;