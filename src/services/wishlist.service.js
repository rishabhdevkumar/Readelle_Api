const {
    createWishlistRepository,
    findWishlistRepository,
    deleteWishlistRepository,
    getAllWishlistRepository,
} = require("../repositories/wishlist.repository");

const createWishlistService = async (userId, data) => {

    const existingWishlist = await findWishlistRepository(
        userId,
        data.book_id
    );

    if (existingWishlist) {

        await deleteWishlistRepository(existingWishlist._id);

        return {
            message: "Book removed from wishlist",
            data: {},
        };
    }

    const wishlist = await createWishlistRepository({
        user_id: userId,
        book_id: data.book_id,
        status: data.status,
    });

    return {
        message: "Book added to wishlist",
        data: wishlist,
    };
};

const getAllWishlistService = async (userId) => {
    return await getAllWishlistRepository(userId);
};

module.exports = {
    createWishlistService,
    getAllWishlistService,
};