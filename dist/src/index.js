"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { appRouter } from './src/routes/config';
const PORT = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) !== null && _b !== void 0 ? _b : 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use('/', appRouter);
app.get('/', (req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (req, res) => {
    return res.send('pong 🏓 !');
});
const handleListen = () => {
    console.log(`server is up and running on port: ${PORT}`);
};
app.listen(PORT, handleListen);
//# sourceMappingURL=index.js.map