const {
    createBookRepository,
    getAllBooksRepository,
} = require("../repositories/book.repository");

const createBookService = async (data) => {
    try {
        const newBook = await createBookRepository(data);

        return newBook;

    } catch (error) {
        throw error;
    }
};

const getAllBooksService = async () => {
    try {
        const books = await getAllBooksRepository();

        return books;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    createBookService,
    getAllBooksService,
};