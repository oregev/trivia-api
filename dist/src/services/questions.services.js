import { prisma } from '../../prisma';
import { printError } from '../utils';
export const getQuestionsService = async ({ categoryId, }) => {
    try {
        const category = await prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        const questions = await prisma.question.findMany({
            where: {
                category: { contains: category === null || category === void 0 ? void 0 : category.name },
            },
            take: 10,
        });
        return questions;
    }
    catch (error) {
        printError(error, getQuestionsService.name);
        throw error;
    }
};
