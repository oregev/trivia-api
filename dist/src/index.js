var _a, _b;
import express from 'express';
import cors from 'cors';
import { appRouter } from './routes/config';
const PORT = (_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) !== null && _b !== void 0 ? _b : 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', appRouter);
const handleListen = () => {
    console.log(`server is up and running on port: ${PORT}`);
};
app.listen(PORT, handleListen);
