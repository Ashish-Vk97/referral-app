import { t } from "../trpc";
import { referralSchema } from "@/lib/validators";
import { db } from "../db";
import { referrals } from "../db/schema";

export const referralRouter = t.router({
  submitReferral: t.procedure
    .input(referralSchema)
    .mutation(async ({ input }) => {
      try {
        const result = await db
          .insert(referrals)
          .values({
            ...input,
          })
          .returning();

        return {
          success: true,
          referralId: result[0].id,
          data: result[0],
          message: "Referral submitted successfully",
          followUp: "Our team will contact the patient within 24 hours",
        };
      } catch (error) {
        throw new Error("Database error");
      }
    }),
});