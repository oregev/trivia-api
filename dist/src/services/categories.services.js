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
exports.getCategoryService = exports.getCategoriesService = void 0;
const prisma_1 = require("../../prisma");
const utils_1 = require("../utils");
const getCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prisma_1.prisma.category.findMany({});
        return categories;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getCategoriesService.name);
        throw error;
    }
});
exports.getCategoriesService = getCategoriesService;
const getCategoryService = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma_1.prisma.category.findUnique({
            where: {
                name: categoryName,
            },
        });
        return category;
    }
    catch (error) {
        (0, utils_1.printError)(error, exports.getCategoriesService.name);
        throw error;
    }
});
exports.getCategoryService = getCategoryService;
//# sourceMappingURL=categories.services.js.map