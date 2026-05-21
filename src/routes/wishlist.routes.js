const express = require("express");

const router = express.Router();

const { createWishlist, getAllWishlist } = require("../controllers/wishlist.controller");

router.post("/", createWishlist);

router.get("/", getAllWishlist);

module.exports = router;