import { type RequestHandler, Router } from 'express';
import * as controller from '../controllers/categories.controllers';

export const categoriesRouter = Router();

categoriesRouter
  .route('/')
  .get(controller.getCategoriesController as RequestHandler);
