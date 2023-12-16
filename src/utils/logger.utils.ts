import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

const folderName = path.resolve(__dirname, '../logs');
const fileName = path.resolve(__dirname, '../logs/log.txt');

export const logger = (request: Request, _: Response, next: NextFunction) => {
  const clientUrl = request.get('origin');
  const requestUrL = `${request.protocol}://${request.get('host')}${
    request.originalUrl
  }`;
  const time = new Date();
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdir(folderName, (error) => {
        console.log('create dir error', error);
      });
    }

    fs.appendFile(
      fileName,
      `${requestUrL} | ${clientUrl} | ${time}\n`,
      (error) => {
        if (error) {
          console.log('log error', error);
        }
      },
    );
  } catch (error) {
    console.log('error with file system in logger', error);
  }

  next();
};
