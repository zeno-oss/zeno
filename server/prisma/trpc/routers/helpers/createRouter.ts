import * as trpc from "@trpc/server";
import { permissions } from "/Users/shiroyasha/terner/server/prisma/shield/shield";

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
