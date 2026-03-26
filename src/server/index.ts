import { t } from "./trpc";
import { referralRouter } from "./routers/referral";

export const appRouter = t.router({
  referral: referralRouter,
});

export type AppRouter = typeof appRouter;