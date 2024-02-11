import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  test: publicProcedure.query(() => {
    return { name: "Hussain Rizvi", age: 24 };
  }),
});

export type AppRouter = typeof appRouter;
