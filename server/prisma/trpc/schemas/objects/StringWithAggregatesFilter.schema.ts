import { z } from 'zod';
import { NestedStringWithAggregatesFilterObjectSchema } from './NestedStringWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema';

///@ts-ignore
export const StringWithAggregatesFilterObjectSchema = z.object({
  equals: z.string()?.optional(),
  in: z.array(z.string()),
  notIn: z.array(z.string()),
  lt: z.string()?.optional(),
  lte: z.string()?.optional(),
  gt: z.string()?.optional(),
  gte: z.string()?.optional(),
  contains: z.string()?.optional(),
  startsWith: z.string()?.optional(),
  endsWith: z.string()?.optional(),
  not: z
    .union([z.string(), NestedStringWithAggregatesFilterObjectSchema])
    ?.optional(),
  _count: NestedIntFilterObjectSchema?.optional(),
  _min: NestedStringFilterObjectSchema?.optional(),
  _max: NestedStringFilterObjectSchema?.optional(),
});
