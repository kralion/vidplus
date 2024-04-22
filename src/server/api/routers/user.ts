import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { SignUpSchema } from "@/schemas/auth";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(SignUpSchema)
    .mutation(async ({ ctx, input }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const result = await ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: input.password,
          lastName: input.lastName,
        },
      });
      if (!result) {
        throw new Error("User not created");
      }
    }),
});
