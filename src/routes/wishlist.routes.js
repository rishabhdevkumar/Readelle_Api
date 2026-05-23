
const express = require("express");

const router = express.Router();

const { toggleWishlist, getAllWishlist, updateWishlist,
    deleteWishlist } = require("../controllers/wishlist.controller");

const { auth } = require("../middlewares/auth.middleware");

router.post("/", auth, toggleWishlist);

router.get("/", auth, getAllWishlist);

router.put("/:id", auth, updateWishlist);

router.delete("/:id", auth, deleteWishlist);

module.exports = router;