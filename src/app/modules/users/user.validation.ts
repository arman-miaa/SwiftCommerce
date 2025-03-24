


// register validation (email, password, role required)

import { z } from "zod";

export const registerValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    role: z.enum(["admin", "user"], { message: "Invalid role" })
});


// Login Valildation (only email and password)
export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// export default {registerValidationSchema, loginValidationSchema}