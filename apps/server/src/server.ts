import cors from "cors";
import express from "express";

import * as trpcExpress from "@trpc/server/adapters/express";

import config from "./config";
import { createContext } from "./context";
import { Headers, Logger } from "./middleware";
import { appRouter } from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Headers);
app.use(Logger);

app.use(cors({ origin: "*" }));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(config.PORT, () => {
  console.log(`✅ Listening at http://${config.HOST}:${config.PORT}/trpc`);
});
