const createHighlightService = require('../services/highlight.service').createHighlightService;

exports.createHighlight = async (req, res) => {
    const highlightData = {
        user: req.user.id,
        book: req.body.book,
        chapter: req.body.chapter,
        selectedText: req.body.selectedText
    };

    try {
        const highlight = await createHighlightService(highlightData);
        res.status(201).json({
            success: true,
            message: 'Highlight created successfully',
            data: highlight,
            error: null
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            sucess: false,
            message: 'Failed to create highlight',
            data: null,
            error: error.message
        });
    }
}