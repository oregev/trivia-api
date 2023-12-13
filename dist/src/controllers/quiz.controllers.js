"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeeklyQuizController = exports.getQuizController = void 0;
const utils_1 = require("../utils");
const services = __importStar(require("../services/quiz.services"));
const getQuizController = async (req, res) => {
    const categoryId = req.query.categoryId;
    const difficulty = req.query.difficulty;
    const amount = req.query.amount;
    console.log('1', req.query);
    try {
        const quiz = await services.getQuizService({
            categoryId,
            difficulty,
            amount,
        });
        res.json(quiz);
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuizController.name);
        res.sendStatus(500);
    }
};
exports.getQuizController = getQuizController;
const getWeeklyQuizController = async (req, res) => {
    try {
        const quiz = await services.getWeeklyQuizService();
        res.json(quiz);
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuizController.name);
        res.sendStatus(500);
    }
};
exports.getWeeklyQuizController = getWeeklyQuizController;
