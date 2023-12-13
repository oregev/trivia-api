import { Prisma } from '@prisma/client';
export const printError = (error, location) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const { code } = error;
        console.error(`DB Error @ ${location} - code: ${code}`);
    }
    else {
        console.error(`Error @ ${location}`, error);
    }
};
