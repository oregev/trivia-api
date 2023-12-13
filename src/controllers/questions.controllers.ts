import type { Request, Response } from 'express';
import { printError } from '../utils';
import * as services from '../services/questions.services';

export const getQuestionsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const categoryId = req.query.categoryId as string;

  try {
    const questions = await services.getQuestionsService({ categoryId });
    res.json(questions);
  } catch (error) {
    printError(error, getQuestionsController.name);
    res.sendStatus(500);
  }
};
