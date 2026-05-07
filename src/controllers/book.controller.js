const {
    createBookService,
    getAllBooksService,
} = require("../services/book.service");

const createBook = async (req, res) => {
    try {
        const newBook = await createBookService(
            req.body
        );

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newBook,
            error: {},
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: {},
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await getAllBooksService();

        res.status(200).json({
            success: true,
            message: "Books fetched successfully",
            data: books,
            error: {},
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
            data: {},
            error: {},
        });
    }
};

module.exports = {
    createBook,
    getAllBooks,
};