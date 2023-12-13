import { type RequestHandler, Router } from 'express';
import * as controller from '../controllers/quiz.controllers';

export const quizRouter = Router();

quizRouter.route('/').get(controller.getQuizController as RequestHandler);
quizRouter
  .route('/weekly')
  .get(controller.getWeeklyQuizController as RequestHandler);
