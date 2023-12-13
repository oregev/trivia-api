import { Router } from 'express';
import * as controller from '../controllers/questions.controllers';
export const questionsRouter = Router();
questionsRouter
    .route('/')
    .get(controller.getQuestionsController);
