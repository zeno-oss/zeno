import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter } from "server";
import { env } from "server/env/server.mjs";
import { createTRPCContext } from "server/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
