class BookPostgresRepository {
    constructor() {
    }

    getBooks() {
        return new Promise((resolve, reject) => {

            let books = [
                {
                    id: 1,
                    title: 'The Lord of the Rings',
                },
                {
                    id: 1,
                    title: 'OKRs',
                },
            ]
            resolve(books);
        });
    }

}

module.exports = BookPostgresRepository;
