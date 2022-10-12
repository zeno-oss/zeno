import { z } from "zod";

import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();

export const appRouter = t.router({
  example: t.procedure.query(() => {
    return { message: `Hello from tRPC` };
  }),
  hello: t.procedure.input(z.object({ text: z.string() })).query((req) => {
    return { message: `Hello ${req.input.text || "User"}` };
  }),
});

export type AppRouter = typeof appRouter;
