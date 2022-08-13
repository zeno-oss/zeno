import { createProtectedRouter } from "./helpers/createRouter";
import { usersRouter } from "./User.router";

export const appRouter = createProtectedRouter()

  .merge('user.', usersRouter)
