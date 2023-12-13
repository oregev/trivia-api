"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeeklyQuizService = exports.getQuizService = void 0;
const crypto_1 = require("crypto");
const prisma_1 = require("../../prisma");
const utils_1 = require("../utils");
const getRandomQuestions = (array, count) => {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};
const getQuizService = async ({ categoryId, difficulty, amount, }) => {
    try {
        const category = await prisma_1.prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        const quiz = await prisma_1.prisma.question.findMany({
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
};
exports.getQuizService = getQuizService;
const getWeeklyQuizService = async () => {
    try {
        const totalAvailableQuestions = await prisma_1.prisma.question.count({});
        const quiz = await prisma_1.prisma.question.findMany({
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
};
exports.getWeeklyQuizService = getWeeklyQuizService;
