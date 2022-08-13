import { z } from 'zod';

export const UserWhereUniqueInputObjectSchema = z.object({
  id: z.number()?.optional(),
  username: z.string()?.optional(),
  email: z.string()?.optional(),
  googleId: z.string()?.optional(),
});
