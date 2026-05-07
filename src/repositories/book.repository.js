const Book = require("../schemas/Book");

const createBookRepository = async (data) => {
    return await Book.create(data);
};

const getAllBooksRepository = async () => {
    return await Book.find();
};

module.exports = {
    createBookRepository,
    getAllBooksRepository,
};