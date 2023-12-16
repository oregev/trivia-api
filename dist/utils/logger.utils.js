"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const folderName = path_1.default.resolve(__dirname, '../logs');
const fileName = path_1.default.resolve(__dirname, '../logs/log.txt');
const logger = (request, _, next) => {
    const clientUrl = request.get('origin');
    const requestUrL = `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    const time = new Date();
    try {
        if (!fs_1.default.existsSync(folderName)) {
            fs_1.default.mkdir(folderName, (error) => {
                console.log('create dir error', error);
            });
        }
        fs_1.default.appendFile(fileName, `${requestUrL} | ${clientUrl} | ${time}\n`, (error) => {
            if (error) {
                console.log('log error', error);
            }
        });
    }
    catch (error) {
        console.log('error with file system in logger', error);
    }
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.utils.js.map