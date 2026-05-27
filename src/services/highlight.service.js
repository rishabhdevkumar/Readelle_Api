const { findBookByIdRepository } = require('../repositories/book.repository');
const { findChapterByIdRepository } = require('../repositories/chapter.repository');
const createHighlightRepository = require('../repositories/highlight.repository').createHighlightRepository;

exports.createHighlightService = async (highlightData) => {

    const book = await findBookByIdRepository(highlightData.book);
    if (!book) {
        const error = new Error('Book not found');
        error.statusCode = 404;
        throw error;
    }

    const chapter = await findChapterByIdRepository(highlightData.chapter);
    if (!chapter) {
        const error = new Error('Chapter not found');
        error.statusCode = 404;
        throw error;
    }

    return await createHighlightRepository(highlightData);
}