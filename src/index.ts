import express from 'express';
// import cors from 'cors';
// import { appRouter } from './src/routes/config';

const app = express();
const PORT = process?.env?.PORT ?? 8080;

// app.use(cors());
// app.use(express.json());

// app.use('/', appRouter);

app.get('/', (req, res) => {
  return res.send('Express Typescript on Vercel');
});

app.get('/ping', (req, res) => {
  return res.send('pong 🏓 !');
});

const handleListen = (): void => {
  console.log(`server is up and running on port: ${PORT}`);
};

app.listen(PORT, handleListen);
