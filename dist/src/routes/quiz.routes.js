import { Router } from 'express';
import * as controller from '../controllers/quiz.controllers';
export const quizRouter = Router();
quizRouter.route('/').get(controller.getQuizController);
quizRouter
    .route('/weekly')
    .get(controller.getWeeklyQuizController);
