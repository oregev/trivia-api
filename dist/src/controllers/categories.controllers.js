import { printError } from '../utils';
import * as services from '../services/categories.services';
export const getCategoriesController = async (_, res) => {
    try {
        const categories = await services.getCategoriesService();
        res.json(categories);
    }
    catch (error) {
        printError(error, getCategoriesController.name);
        res.sendStatus(500);
    }
};
