import { printError } from '../utils';
import * as services from '../services/questions.services';
export const getQuestionsController = async (req, res) => {
    const categoryId = req.query.categoryId;
    try {
        const questions = await services.getQuestionsService({ categoryId });
        res.json(questions);
    }
    catch (error) {
        printError(error, getQuestionsController.name);
        res.sendStatus(500);
    }
};
