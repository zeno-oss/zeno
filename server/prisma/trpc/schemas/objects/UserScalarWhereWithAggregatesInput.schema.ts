import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

///@ts-ignore
export const UserScalarWhereWithAggregatesInputObjectSchema = z.object({
  id: z.union([IntWithAggregatesFilterObjectSchema, z.number()])?.optional(),
  createdAt: z
    .union([DateTimeWithAggregatesFilterObjectSchema, z.date()])
    ?.optional(),
  username: z
    .union([
      StringNullableWithAggregatesFilterObjectSchema,
      z.string().nullable(),
    ])
    ?.optional(),
  password: z
    .union([
      StringNullableWithAggregatesFilterObjectSchema,
      z.string().nullable(),
    ])
    ?.optional(),
  email: z
    .union([StringWithAggregatesFilterObjectSchema, z.string()])
    ?.optional(),
  googleId: z
    .union([
      StringNullableWithAggregatesFilterObjectSchema,
      z.string().nullable(),
    ])
    ?.optional(),
});
