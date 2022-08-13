import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

///@ts-ignore
export const UserWhereInputObjectSchema = z.object({
  id: z.union([IntFilterObjectSchema, z.number()])?.optional(),
  createdAt: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
  username: z
    .union([StringNullableFilterObjectSchema, z.string().nullable()])
    ?.optional(),
  password: z
    .union([StringNullableFilterObjectSchema, z.string().nullable()])
    ?.optional(),
  email: z.union([StringFilterObjectSchema, z.string()])?.optional(),
  googleId: z
    .union([StringNullableFilterObjectSchema, z.string().nullable()])
    ?.optional(),
});
