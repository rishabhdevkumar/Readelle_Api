const Wishlist = require("../schemas/Wishlist");

const createWishlistRepository = async (data) => {
    return await Wishlist.create(data);
};

const findWishlistRepository = async (userId, bookId) => {
    return await Wishlist.findOne({
        user_id: userId,
        book_id: bookId,
    });
};

const deleteWishlistRepository = async (wishlistId) => {
    return await Wishlist.findByIdAndDelete(wishlistId);
};

const getAllWishlistRepository = async (userId) => {
    return await Wishlist.find({
        user_id: userId,
    }).populate("book_id");
};

module.exports = {
    createWishlistRepository,
    findWishlistRepository,
    deleteWishlistRepository,
    getAllWishlistRepository,
};