"use strict";
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
exports.getWeeklyQuizService = exports.getQuizService = void 0;
const crypto_1 = require("crypto");
const prisma_1 = require("../prisma");
const utils_1 = require("../utils");
const getRandomQuestions = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};
const getQuizService = ({ categoryId, difficulty, amount, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        const quiz = yield prisma_1.prisma.question.findMany({
            where: {
                category: category !== null ? category.name : 'general',
                difficulty: +difficulty,
            },
        });
        const shuffledQuiz = getRandomQuestions(quiz, +amount);
        const quizId = (0, crypto_1.randomUUID)();
        // store quiz details: id, questionId, category, difficulty, amount.
        // mark questions as used.
        return {
            id: quizId, // create id for custom quiz.
            quiz: shuffledQuiz,
        };
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuizService.name);
        throw error;
    }
});
exports.getQuizService = getQuizService;
const getWeeklyQuizService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalAvailableQuestions = yield prisma_1.prisma.question.count({});
        const quiz = yield prisma_1.prisma.question.findMany({
            take: 10,
            skip: Math.floor(Math.random() * totalAvailableQuestions),
        });
        // const quizId = randomUUID();
        // use id every week.
        // store quiz details: id, questionId, category, difficulty, amount.
        // mark questions as used.
        return {
            id: null, // create id for custom quiz.
            quiz,
        };
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuizService.name);
        throw error;
    }
});
exports.getWeeklyQuizService = getWeeklyQuizService;
//# sourceMappingURL=quiz.services.js.map