import { z } from 'zod';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';

///@ts-ignore
export const IntFilterObjectSchema = z.object({
  equals: z.number()?.optional(),
  in: z.array(z.number()),
  notIn: z.array(z.number()),
  lt: z.number()?.optional(),
  lte: z.number()?.optional(),
  gt: z.number()?.optional(),
  gte: z.number()?.optional(),
  not: z.union([z.number(), NestedIntFilterObjectSchema])?.optional(),
});
