const Highlight = require('../schemas/Highlight');

exports.createHighlightRepository = async (highlightData) => {
    const highlight = new Highlight(highlightData);
    return await highlight.save();
}