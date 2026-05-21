const express = require("express");
const router = express.Router();

const { createWishlist, getAllWishlist } = require("../controllers/wishlist.controller");

const { auth } = require("../middlewares/auth.middleware");

router.post("/", auth, createWishlist);

router.get("/", auth, getAllWishlist);

module.exports = router;