/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correct" TEXT NOT NULL,
    "incorrect" TEXT[],

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answerResult" (
    "questionId" TEXT NOT NULL,
    "correct" TEXT NOT NULL,
    "resultsQuizId" TEXT,

    CONSTRAINT "answerResult_pkey" PRIMARY KEY ("questionId")
);

-- CreateTable
CREATE TABLE "results" (
    "quizId" TEXT NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("quizId")
);

-- CreateTable
CREATE TABLE "result" (
    "id" TEXT NOT NULL,
    "resultsQuizId" TEXT NOT NULL,

    CONSTRAINT "result_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answerResult" ADD CONSTRAINT "answerResult_resultsQuizId_fkey" FOREIGN KEY ("resultsQuizId") REFERENCES "results"("quizId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "result" ADD CONSTRAINT "result_resultsQuizId_fkey" FOREIGN KEY ("resultsQuizId") REFERENCES "results"("quizId") ON DELETE RESTRICT ON UPDATE CASCADE;
