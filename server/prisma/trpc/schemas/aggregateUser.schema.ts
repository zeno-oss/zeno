import { z } from 'zod';
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';

export const UserAggregateSchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
  orderBy: UserOrderByWithRelationInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
