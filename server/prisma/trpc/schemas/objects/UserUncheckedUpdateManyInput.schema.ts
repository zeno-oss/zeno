import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

export const UserUncheckedUpdateManyInputObjectSchema = z.object({
  id: z
    .union([z.number(), IntFieldUpdateOperationsInputObjectSchema])
    ?.optional(),
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
