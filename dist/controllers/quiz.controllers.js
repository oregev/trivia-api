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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeeklyQuizController = exports.getQuizController = void 0;
const utils_1 = require("../utils");
const services = __importStar(require("../services/quiz.services"));
const getQuizController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.query.categoryId;
    const difficulty = req.query.difficulty;
    const amount = req.query.amount;
    if (!categoryId) {
        res.status(400).send({ message: 'Bad request - missing categoryId' });
        return;
    }
    try {
        const quiz = yield services.getQuizService({
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
});
exports.getQuizController = getQuizController;
const getWeeklyQuizController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quiz = yield services.getWeeklyQuizService();
        res.json(quiz);
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuizController.name);
        res.sendStatus(500);
    }
});
exports.getWeeklyQuizController = getWeeklyQuizController;
//# sourceMappingURL=quiz.controllers.js.map