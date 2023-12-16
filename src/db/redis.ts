import { createClient } from 'redis';

const REDIS_CONFIG = {
  url: process.env.REDIS_URL,
  socket: {
    tls: process.env.NODE_ENV === 'prod', //false, //! Need to set to true in prod for vercel KV.
  },
};

export const client = createClient(REDIS_CONFIG);

export const initRedis = async () => {
  client.on('connect', () =>
    console.log('redis is up and running on port: 6379'),
  );
  client.on('error', (error) => console.error(`Error : ${error}`));

  await client.connect();
};
