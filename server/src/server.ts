import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from './trpc/routers/index';
import { createContext } from './context';
var cors = require('cors');
const PORT = 3001;

const app = express();
app.use(cors());
app.use(
	'/trpc',
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext
	})
);
app.get('/', (req, res) => res.send('Express + Prisma + tRPC + tRPC Shield'));
app.get('/data', (req, res) =>
	res.json({ data: 'Express + Prisma + tRPC + tRPC Shield' })
);

app.listen(PORT, () => {
	console.log(`server listening at http://localhost:${PORT}`);
});
