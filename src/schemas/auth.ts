import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "Fill this field"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
