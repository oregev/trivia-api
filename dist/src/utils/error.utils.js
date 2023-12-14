"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printError = void 0;
const client_1 = require("@prisma/client");
const printError = (error, location) => {
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const { code } = error;
        console.error(`DB Error @ ${location} - code: ${code}`);
    }
    else {
        console.error(`Error @ ${location}`, error);
    }
};
exports.printError = printError;
//# sourceMappingURL=error.utils.js.map