const Category = require("../schemas/Categories");

const createCategoryRepository = async (data) => {
    return await Category.create(data);
};

const getAllCategoriesRepository = async () => {
    return await Category.find();
};

const updateCategoryRepository = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, {
        returnDocument: "after",
        runValidators: true,
    });
};

module.exports = {
    createCategoryRepository,
    getAllCategoriesRepository,
    updateCategoryRepository,
};