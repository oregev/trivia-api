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

  if (!categoryId) {
    res.status(400).send({ message: 'Bad request - missing categoryId' });
    return;
  }

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
