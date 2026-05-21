
const { createWishlistRepository, getAllWishlistRepository } = require("../repositories/wishlist.repository");

const createWishlistService = async (data) => {
    return await createWishlistRepository(data);
};

const getAllWishlistService = async () => {
    return await getAllWishlistRepository();
};

module.exports = {
    createWishlistService,
    getAllWishlistService,
};