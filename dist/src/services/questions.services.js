"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsService = void 0;
const prisma_1 = require("../../prisma");
const utils_1 = require("../utils");
const getQuestionsService = async ({ categoryId, }) => {
    try {
        const category = await prisma_1.prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        const questions = await prisma_1.prisma.question.findMany({
            where: {
                category: { contains: category === null || category === void 0 ? void 0 : category.name },
            },
            take: 10,
        });
        return questions;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuestionsService.name);
        throw error;
    }
};
exports.getQuestionsService = getQuestionsService;
