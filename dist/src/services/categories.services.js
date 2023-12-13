"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryService = exports.getCategoriesService = void 0;
const prisma_1 = require("../../prisma");
const utils_1 = require("../utils");
const getCategoriesService = async () => {
    try {
        const categories = await prisma_1.prisma.category.findMany({});
        return categories;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getCategoriesService.name);
        throw error;
    }
};
exports.getCategoriesService = getCategoriesService;
const getCategoryService = async (categoryName) => {
    try {
        const category = await prisma_1.prisma.category.findUnique({
            where: {
                name: categoryName,
            },
        });
        return category;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getCategoriesService.name);
        throw error;
    }
};
exports.getCategoryService = getCategoryService;
