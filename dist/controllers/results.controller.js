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
exports.postResultsController = void 0;
const db_1 = require("../db");
const utils_1 = require("../utils");
const getCount = (userAnswers, quizAnswers) => {
    const correctAnswers = userAnswers.filter((userAnswer) => {
        const quizAnswer = quizAnswers.find((question) => question.questionId === userAnswer.questionId);
        return quizAnswer && userAnswer.answer === quizAnswer.correct;
    });
    return correctAnswers.length;
};
//!
const messages = [
    'Oops! Looks like you hit the quiz with a sprinkling of randomness.',
    'Hey there, almost a rockstar! Just a smidge more practice.',
    'Not too shabby!.',
    "You're as close as a bear to honey! A little more focus.",
    'Impressive! just a couple of fine-tuning tweaks.',
    "Hey, you're riding the wave of success! A bit more fine-tuning.",
    "Whoa! You're on fire! Just a sprinkle of extra effort.",
    "You're like a puzzle-solving wizard! Just a tad more magic.",
    "Whoa there, Einstein! You're so close to brilliance.",
    "Boom! You're a quiz superstar!",
];
const postResultsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userAnswers = req.body.data;
    try {
        // ? const results = await client.get('results'); - redis
        const results = (yield db_1.kv.get('results'));
        if (!results) {
            res.sendStatus(500);
        }
        else {
            const quizAnswers = results.answers;
            const count = getCount(userAnswers, quizAnswers);
            const message = messages[count];
            // client.flushAll(); -> Now cleaning all redis!
            res.json({ count, message });
        }
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.postResultsController.name);
        res.sendStatus(500);
    }
});
exports.postResultsController = postResultsController;
//# sourceMappingURL=results.controller.js.map