import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { SignUpSchema } from "@/schemas/auth";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(SignUpSchema)
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: input.password,
        },
      });
      if (!result) {
        throw new Error("User not created");
      }
    }),
});
