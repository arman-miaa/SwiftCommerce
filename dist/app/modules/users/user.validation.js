"use strict";
// register validation (email, password, role required)
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationSchema = exports.registerValidationSchema = void 0;
const zod_1 = require("zod");
exports.registerValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    password: zod_1.z.string().min(6, { message: "Password must be at least 6 characters" }),
    role: zod_1.z.enum(["admin", "user"], { message: "Invalid role" })
});
// Login Valildation (only email and password)
exports.loginValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
});
// export default {registerValidationSchema, loginValidationSchema}
