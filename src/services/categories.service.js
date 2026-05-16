const { createCategoryRepository, getAllCategoriesRepository, updateCategoryRepository,
} = require("../repositories/categories.repository");

const createCategoryService = async (data) => {
    return await createCategoryRepository(data);
};

const getAllCategoriesService = async () => {
    return await getAllCategoriesRepository();
};

const updateCategoryService = async (id, data) => {
    return await updateCategoryRepository(id, data);
};

module.exports = {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
};