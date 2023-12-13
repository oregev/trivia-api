import type { Request, Response } from 'express';
// import { printError } from '../utils';
// import * as services from '../services/questions.services';

export interface IAnswer {
  questionId: string;
  answerId: string;
}

export const postResultsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const answers = req.body.answers as IAnswer[];

  console.log({ answers });

  // Calculate the results here.
  const results = 3;

  //   try {
  // const questions = await services.getQuestionsService({ categoryId });

  setTimeout(() => {
    res.json({ count: results });
  }, 3000);

  //   } catch (error) {
  // printError(error, postResultsController.name);
  // res.sendStatus(500);
  //   }
};
