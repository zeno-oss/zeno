import * as trpc from "@trpc/server";
import { permissions } from "../../../shield/shield";

/* make sure you have this line as import for permissions
dont npx prisma generate for no reason
// import { permissions } from "../../../shield/shield";
*/

// make sure to change this according to your Context path
import { Context } from '../../../../src/context';

export function createRouter() {
  return trpc.router<Context>();
}

export function createProtectedRouter() {
  return trpc
    .router<Context>()

    .middleware(({ ctx, next }) => {
      console.log("inside middleware!")
      return next();
    })
    .middleware(permissions);
}
