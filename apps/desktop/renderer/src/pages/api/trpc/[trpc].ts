import * as trpcNext from "@trpc/server/adapters/next";

import { appRouter } from "$server";
import { NextApiRequest, NextApiResponse } from "next";

// export API handler
const nextApiHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Modify `req` and `res` objects here
  // In this case, we are enabling CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }
  // pass the (modified) req/res to the handler
  return nextApiHandler(req, res);
}
