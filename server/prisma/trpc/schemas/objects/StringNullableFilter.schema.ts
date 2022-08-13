import { z } from 'zod';
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema';

///@ts-ignore
export const StringNullableFilterObjectSchema = z.object({
  equals: z.string()?.optional().nullable(),
  in: z.array(z.string()).nullable(),
  notIn: z.array(z.string()).nullable(),
  lt: z.string()?.optional(),
  lte: z.string()?.optional(),
  gt: z.string()?.optional(),
  gte: z.string()?.optional(),
  contains: z.string()?.optional(),
  startsWith: z.string()?.optional(),
  endsWith: z.string()?.optional(),
  not: z
    .union([z.string(), NestedStringNullableFilterObjectSchema.nullable()])
    ?.optional(),
});
