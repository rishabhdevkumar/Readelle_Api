
const { createWishlistService, getAllWishlistService } = require("../services/wishlist.service");

const createWishlist = async (req, res) => {
    try {

        const wishlist = await createWishlistService(req.body);

        res.status(201).json({
            success: true,
            message: "Wishlist created successfully",
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

const getAllWishlist = async (req, res) => {
    try {

        const wishlist = await getAllWishlistService();

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