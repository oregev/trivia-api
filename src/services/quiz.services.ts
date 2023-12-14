import type { question } from '@prisma/client';
import { randomUUID } from 'crypto';
import { prisma } from '../prisma';
import { printError } from '../utils';

const getRandomQuestions = (array: question[], count: number): question[] => {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
};

export const getQuizService = async ({
  categoryId,
  difficulty,
  amount,
}: {
  categoryId: string;
  difficulty: string;
  amount: string;
}): Promise<{
  id: string | null;
  quiz: question[];
}> => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    const quiz = await prisma.question.findMany({
      where: {
        category: category !== null ? category.name : 'general',
        difficulty: +difficulty,
      },
    });

    const shuffledQuiz = getRandomQuestions(quiz, +amount);
    const quizId = randomUUID();

    // store quiz details: id, questionId, category, difficulty, amount.
    // mark questions as used.

    return {
      id: quizId, // create id for custom quiz.
      quiz: shuffledQuiz,
    };
  } catch (error) {
    printError(error, getQuizService.name);
    throw error;
  }
};

export const getWeeklyQuizService = async (): Promise<{
  id: string | null;
  quiz: question[];
}> => {
  try {
    const totalAvailableQuestions = await prisma.question.count({});

    const quiz = await prisma.question.findMany({
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
  } catch (error) {
    printError(error, getQuizService.name);
    throw error;
  }
};
