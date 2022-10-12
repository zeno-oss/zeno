import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { prisma } from "./db";

export async function createContext(
  opts?: trpcExpress.CreateExpressContextOptions,
) {
  return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
