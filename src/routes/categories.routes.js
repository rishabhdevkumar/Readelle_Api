const express = require("express");

const router = express.Router();

const { createCategory, getAllCategories, updateCategory,
} = require("../controllers/categories.controller");

router.post("/", createCategory);

router.get("/", getAllCategories);

router.put("/:id", updateCategory);

module.exports = router;