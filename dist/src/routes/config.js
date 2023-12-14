"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const questions_routes_1 = require("./questions.routes");
const categories_routes_1 = require("./categories.routes");
const results_routes_1 = require("./results.routes");
const quiz_routes_1 = require("./quiz.routes");
exports.appRouter = express_1.default.Router();
exports.appRouter.use('/questions', questions_routes_1.questionsRouter);
exports.appRouter.use('/categories', categories_routes_1.categoriesRouter);
exports.appRouter.use('/results', results_routes_1.resultsRouter);
exports.appRouter.use('/quiz', quiz_routes_1.quizRouter);
//# sourceMappingURL=config.js.map