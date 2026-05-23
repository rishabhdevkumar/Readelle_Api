
const {
    toggleWishlistService,
    getAllWishlistService,
    updateWishlistService,
    deleteWishlistByIdService,
} = require("../services/wishlist.service");

const toggleWishlist = async (req, res) => {
    try {

        const userId = req.user.id;

        const wishlist = await toggleWishlistService(
            userId,
            req.body
        );

        res.status(wishlist.statusCode).json({
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

const updateWishlist = async (req, res) => {
    try {

        const wishlistId = req.params.id;

        const wishlist = await updateWishlistService(
            wishlistId,
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

const deleteWishlist = async (req, res) => {
    try {

        const wishlistId = req.params.id;

        const wishlist = await deleteWishlistByIdService(
            wishlistId
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

module.exports = {
    toggleWishlist,
    getAllWishlist,
    updateWishlist,
    deleteWishlist,
};