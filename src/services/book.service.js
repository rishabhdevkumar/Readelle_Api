const {
    createBookRepository,
    getAllBooksRepository,
} = require("../repositories/book.repository");

const createBookService = async (data) => {
    return await createBookRepository(data);
};

const getAllBooksService = async () => {
    return await getAllBooksRepository();
};

module.exports = {
    createBookService,
    getAllBooksService,
};