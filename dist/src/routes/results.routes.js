import { Router } from 'express';
import * as controller from '../controllers/results.controller';
export const resultsRouter = Router();
resultsRouter
    .route('/')
    .post(controller.postResultsController);
