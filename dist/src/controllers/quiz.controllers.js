import { printError } from '../utils';
import * as services from '../services/quiz.services';
export const getQuizController = async (req, res) => {
    const categoryId = req.query.categoryId;
    const difficulty = req.query.difficulty;
    const amount = req.query.amount;
    console.log(req.query);
    try {
        const quiz = await services.getQuizService({
            categoryId,
            difficulty,
            amount,
        });
        res.json(quiz);
    }
    catch (error) {
        printError(error, getQuizController.name);
        res.sendStatus(500);
    }
};
export const getWeeklyQuizController = async (req, res) => {
    try {
        const quiz = await services.getWeeklyQuizService();
        res.json(quiz);
    }
    catch (error) {
        printError(error, getQuizController.name);
        res.sendStatus(500);
    }
};
