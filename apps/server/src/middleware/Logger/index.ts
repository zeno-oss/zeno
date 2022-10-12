import morgan from "morgan";
import config from "../../config/index";

const logType = (): string => {
  switch (config.ENV) {
    case "development":
      return "dev";
    default:
      return "combined";
  }
};

const Logger = morgan(logType());

export default Logger;
