# Express Server with tRPC Shield Example

This example shows how to **implement an Express server with tRPC, tRPC Shield and Prisma**.

## Getting started

### 1. Download example and install dependencies

Download this example:

```bash
npx create-trpc-appx --example https://github.com/omar-dulaimi/trpc-shield/tree/master/example
```

Install npm dependencies:

```
cd express-trpc-shield
npm install
```

### 2. Create and seed the database using Prisma

Run the following command to create your SQLite database file:

```bash
npx prisma migrate dev --name init
```

### 3. Import Context

Add `Context` type import in `./routers/helpers/createRouter.ts`

```ts
import { Context } from '../../../../src/context';
```

Example `Context`:

```ts
import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';

export const createContext = () => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
```

### 4. Attach permissions as a middleware

In your top-level, import your auto-generated shield and attach it to the router:

```ts
import { permissions } from '../../../shield/shield';

export function createProtectedRouter() {
  return (
    trpc
      .router<Context>()
      .middleware(permissions)
  );
}
```

### 5. Start the server

Launch your server with this command:

```
npm run dev
```

Now your server is ready to use at: [http://localhost:3001](http://localhost:3001)

Note: Your `tRPC` endpoint is where your requests will go, so make sure to add a `/trpc`.

Example endpoint:

```
http://localhost:3001/trpc/user.updateOneUser
```
