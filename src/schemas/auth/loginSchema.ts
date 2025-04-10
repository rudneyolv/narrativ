/** @format */

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "error.invalid_email_address",
  }),

  password: z.string(),
});
