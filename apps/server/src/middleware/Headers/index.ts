import cors, { CorsOptions } from "cors";
import config from "../../config/index";

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

export const Headers = cors(options);
