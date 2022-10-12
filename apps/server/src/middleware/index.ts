import cors, { CorsOptions } from "cors";
import morgan from "morgan";

import config from "../config";

const API_URL: string = `http://${config.HOST}:${config.PORT}` ?? "";

const options: CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Access-Control-Allow-Origin",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: API_URL,
  preflightContinue: true,
};

const logType = (): string => {
  switch (config.ENV) {
    case "development":
      return "dev";
    default:
      return "combined";
  }
};

export const Headers = cors(options);
export const Logger = morgan(logType());
