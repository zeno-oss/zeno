import dotenv from "dotenv";
import path from "path";

interface IConfig {
  ENV?: string;
  PORT?: number;
  HOST?: string;
  ENV_ERROR?: string;
}

dotenv.config({ path: path.resolve(__dirname, "../", "../", ".env") });

const NODE_ENV: string = process.env.NODE_ENV ?? "";

let HOST = "";
let PORT = -1;
let ENV_ERROR = "";

let config: IConfig = {
  ENV: "",
  PORT: -1,
  HOST: "",
  ENV_ERROR: "",
};

switch (NODE_ENV) {
  case "production":
    HOST = process.env.PRO_HOST ?? "";
    PORT = parseInt(process.env.PRO_PORT ?? "-1");
    ENV_ERROR = "";
    break;

  case "development":
    HOST = process.env.DEV_HOST ?? "";
    PORT = parseInt(process.env.DEV_PORT ?? "-1");
    ENV_ERROR = "";
    break;

  default:
    PORT = -1;
    HOST = "";
    ENV_ERROR = "Invalid Environment";
}

if (PORT && HOST) {
  config = {
    ENV: NODE_ENV,
    PORT,
    HOST,
    ENV_ERROR,
  };
} else if (ENV_ERROR) {
  config = {
    ENV: "",
    PORT,
    HOST,
    ENV_ERROR,
  };
}

export default config;
