const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        author: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        language: {
            type: String,
        },

        description: {
            type: String,
        },

        cover_image: {
            type: String,
        },

        file_url: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;