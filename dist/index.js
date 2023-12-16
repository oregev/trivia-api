"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { initRedis } from './db';
const config_1 = require("../src/routes/config");
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
// initRedis();
const app = (0, express_1.default)();
const PORT = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) !== null && _b !== void 0 ? _b : 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(logger);
app.use('/', config_1.appRouter);
const handleListen = () => {
    console.log(`server is up and running on port: ${PORT}`);
};
app.listen(PORT, handleListen);
//# sourceMappingURL=index.js.map