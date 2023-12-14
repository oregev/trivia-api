import type { category } from '@prisma/client';
import { prisma } from '../prisma';
import { printError } from '../utils';

export const getCategoriesService = async (): Promise<category[]> => {
  try {
    const categories = await prisma.category.findMany({});
    return categories;
  } catch (error) {
    printError(error, getCategoriesService.name);
    throw error;
  }
};

export const getCategoryService = async (
  categoryName: string,
): Promise<category | null> => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        name: categoryName,
      },
    });
    return category;
  } catch (error) {
    printError(error, getCategoriesService.name);
    throw error;
  }
};
