
const Wishlist = require("../schemas/Wishlist");

const createWishlistRepository = async (data) => {
    return await Wishlist.create(data);
};

const getAllWishlistRepository = async () => {
    return await Wishlist.find();
};

module.exports = {
    createWishlistRepository,
    getAllWishlistRepository,
};