import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "Fill this field"),
  email: z.string().email("Please enter a valid email address"),
  lastName: z.string().min(1, "Fill this field"),
  password: z.string().min(4, "Password must be at least 8 characters"),
});

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "Password must be at least 8 characters"),
});
