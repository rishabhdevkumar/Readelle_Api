const { createCategoryService, getAllCategoriesService, updateCategoryService,
} = require("../services/categories.service");

const createCategory = async (req, res) => {
    try {
        const category = await createCategoryService(req.body);

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
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

const getAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategoriesService();

        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: categories,
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

const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await updateCategoryService(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: updatedCategory,
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
    createCategory,
    getAllCategories,
    updateCategory,
};