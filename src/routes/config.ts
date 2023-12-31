import express from 'express';
import { questionsRouter } from './questions.routes';
import { categoriesRouter } from './categories.routes';
import { resultsRouter } from './results.routes';
import { quizRouter } from './quiz.routes';

export const appRouter = express.Router();

appRouter.use('/questions', questionsRouter);
appRouter.use('/categories', categoriesRouter);
appRouter.use('/results', resultsRouter);

appRouter.use('/quiz', quizRouter);
