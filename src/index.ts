import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { initRedis } from './db';
import { appRouter } from '../src/routes/config';
import { logger } from './utils';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// initRedis();

const app = express();
const PORT = process?.env?.PORT ?? 8080;

app.use(cors());
app.use(express.json());
// app.use(logger);

app.use('/', appRouter);

const handleListen = (): void => {
  console.log(`server is up and running on port: ${PORT}`);
};

app.listen(PORT, handleListen);
