const {
    createWishlistService,
    getAllWishlistService,
} = require("../services/wishlist.service");

const createWishlist = async (req, res) => {
    try {

        const userId = req.user.id;

        const wishlist = await createWishlistService(
            userId,
            req.body
        );

        res.status(200).json({
            success: true,
            message: wishlist.message,
            data: wishlist.data,
            error: {},
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            data: {},
            error,
        });
    }
};

const getAllWishlist = async (req, res) => {
    try {

        const userId = req.user.id;

        const wishlist = await getAllWishlistService(userId);

        res.status(200).json({
            success: true,
            message: "Wishlist fetched successfully",
            data: wishlist,
            error: {},
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
            data: {},
            error,
        });
    }
};

module.exports = {
    createWishlist,
    getAllWishlist,
};