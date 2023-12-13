import { prisma } from '../../prisma';
import { printError } from '../utils';
export const getCategoriesService = async () => {
    try {
        const categories = await prisma.category.findMany({});
        return categories;
    }
    catch (error) {
        printError(error, getCategoriesService.name);
        throw error;
    }
};
export const getCategoryService = async (categoryName) => {
    try {
        const category = await prisma.category.findUnique({
            where: {
                name: categoryName,
            },
        });
        return category;
    }
    catch (error) {
        printError(error, getCategoriesService.name);
        throw error;
    }
};
