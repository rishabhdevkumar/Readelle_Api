const express = require("express");
const router = express.Router();

const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/book.controller");

router.post("/", createBook);

router.get("/", getAllBooks);

router.get("/:bookId", getBookById);

router.put("/:bookId", updateBook);

router.delete("/:bookId", deleteBook);

module.exports = router;