const { createCategoryRepository, getAllCategoriesRepository, updateCategoryRepository, deleteCategoryRepository,
} = require("../repositories/category.repository");

const createCategoryService = async (data) => {
    return await createCategoryRepository(data);
};

const getAllCategoriesService = async () => {
    return await getAllCategoriesRepository();
};

const updateCategoryService = async (id, data) => {
    return await updateCategoryRepository(id, data);
};

const deleteCategoryService = async (categoryId) => {
    return await deleteCategoryRepository(categoryId);
};

module.exports = {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
    deleteCategoryService,
};