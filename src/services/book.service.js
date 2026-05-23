const {
    createBookRepository,
    getAllBooksRepository,
    getBookByIdRepository,
    updateBookRepository,
    deleteBookRepository,
    findBookByIdRepository
} = require("../repositories/book.repository");

const createBookService = async (data) => {
    return await createBookRepository(data);
};

const getAllBooksService = async (page, limit) => {
    return await getAllBooksRepository(page, limit);
};

const getBookByIdService = async (bookId) => {
    return await getBookByIdRepository(bookId);
};

const updateBookService = async (bookId, data) => {
    return await updateBookRepository(bookId, data);
};

const deleteBookService = async (bookId) => {
    return await deleteBookRepository(bookId);
};

module.exports = {
    createBookRepository,
    getAllBooksRepository,
    getBookByIdRepository,
    updateBookRepository,
    deleteBookRepository,
    findBookByIdRepository,
};