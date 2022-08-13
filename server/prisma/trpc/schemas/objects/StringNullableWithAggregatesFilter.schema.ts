import { z } from 'zod';
import { NestedStringNullableWithAggregatesFilterObjectSchema } from './NestedStringNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema';

///@ts-ignore
export const StringNullableWithAggregatesFilterObjectSchema = z.object({
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
    .union([
      z.string(),
      NestedStringNullableWithAggregatesFilterObjectSchema.nullable(),
    ])
    ?.optional(),
  _count: NestedIntNullableFilterObjectSchema?.optional(),
  _min: NestedStringNullableFilterObjectSchema?.optional(),
  _max: NestedStringNullableFilterObjectSchema?.optional(),
});
