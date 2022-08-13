import { z } from 'zod';

export const NullableStringFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.string()?.optional().nullable(),
});
