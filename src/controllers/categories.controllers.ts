import type { Request, Response } from 'express';
import { printError } from '../utils';
import * as services from '../services/categories.services';
import { Prisma } from '@prisma/client';

export const getCategoriesController = async (
  _: Request,
  res: Response,
): Promise<void> => {
  try {
    const categories = await services.getCategoriesService();
    res.json(categories);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      printError(error, getCategoriesController.name);
      res.status(500).send({ message: 'prisma error' });
    }
    printError(error, getCategoriesController.name);
    res.status(500).send({ message: 'error fetch categories' });
  }
};
