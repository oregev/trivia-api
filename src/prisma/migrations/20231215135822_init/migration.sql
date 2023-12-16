/*
  Warnings:

  - You are about to drop the `answerResult` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `result` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `results` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "answerResult" DROP CONSTRAINT "answerResult_resultsQuizId_fkey";

-- DropForeignKey
ALTER TABLE "result" DROP CONSTRAINT "result_resultsQuizId_fkey";

-- DropTable
DROP TABLE "answerResult";

-- DropTable
DROP TABLE "result";

-- DropTable
DROP TABLE "results";
