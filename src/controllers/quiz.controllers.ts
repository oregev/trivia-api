import type { Request, Response } from 'express';
import { printError } from '../utils';
import * as services from '../services/quiz.services';

export const getQuizController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const categoryId = req.query.categoryId as string;
  const difficulty = req.query.difficulty as string;
  const amount = req.query.amount as string;

  console.log('1', req.query);

  try {
    const quiz = await services.getQuizService({
      categoryId,
      difficulty,
      amount,
    });
    res.json(quiz);
  } catch (error) {
    printError(error, getQuizController.name);
    res.sendStatus(500);
  }
};

export const getWeeklyQuizController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const quiz = await services.getWeeklyQuizService();
    res.json(quiz);
  } catch (error) {
    printError(error, getQuizController.name);
    res.sendStatus(500);
  }
};
