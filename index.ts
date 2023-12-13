import express from 'express';
import cors from 'cors';
import { appRouter } from './src/routes/config';

const PORT = process?.env?.PORT ?? 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', appRouter);

const handleListen = (): void => {
  console.log(`server is up and running on port: ${PORT}`);
};

app.listen(PORT, handleListen);
