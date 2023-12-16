import type { Request, Response } from 'express';
import { client, kv } from '../db';
import { printError } from '../utils';
// import * as services from '../services/questions.services';

export interface IAnswer {
  questionId: string;
  answerId: string;
}

interface UserAnswer {
  questionId: string;
  answer: string;
}

interface QuizAnswer {
  questionId: string;
  correct: string;
}

const getCount = (userAnswers: UserAnswer[], quizAnswers: QuizAnswer[]) => {
  const correctAnswers = userAnswers.filter((userAnswer) => {
    const quizAnswer = quizAnswers.find(
      (question) => question.questionId === userAnswer.questionId,
    );
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

export const postResultsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userAnswers = req.body.data as UserAnswer[];

  try {
    // ? const results = await client.get('results'); - redis
    const results = (await kv.get('results')) as {
      quizId: string;
      answers: QuizAnswer[];
    };

    if (!results) {
      res.sendStatus(500);
    } else {
      const quizAnswers = results.answers;
      const count = getCount(userAnswers, quizAnswers);
      const message = messages[count];
      // client.flushAll(); -> Now cleaning all redis!

      res.json({ count, message });
    }
  } catch (error) {
    printError(error, postResultsController.name);
    res.sendStatus(500);
  }
};
