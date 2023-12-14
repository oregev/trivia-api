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
exports.getQuestionsService = void 0;
const prisma_1 = require("../../prisma");
const utils_1 = require("../utils");
const getQuestionsService = ({ categoryId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.prisma.category.findUnique({
            where: {
                id: categoryId,
            },
        });
        const questions = yield prisma_1.prisma.question.findMany({
            where: {
                category: { contains: category === null || category === void 0 ? void 0 : category.name },
            },
            take: 10,
        });
        return questions;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getQuestionsService.name);
        throw error;
    }
});
exports.getQuestionsService = getQuestionsService;
//# sourceMappingURL=questions.services.js.map