import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

export const UserUpdateManyMutationInputObjectSchema = z.object({
  createdAt: z
    .union([z.date(), DateTimeFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  username: z
    .union([
      z.string(),
      NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
    ])
    ?.optional(),
  password: z
    .union([
      z.string(),
      NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
    ])
    ?.optional(),
  email: z
    .union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
  googleId: z
    .union([
      z.string(),
      NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
    ])
    ?.optional(),
});
