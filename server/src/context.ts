import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';

export const createContext = () => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
