"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResultsController = void 0;
const postResultsController = async (req, res) => {
    const answers = req.body.answers;
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
exports.postResultsController = postResultsController;
