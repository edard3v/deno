import z from "zod";

export const welcomeBodyDTO = z.object({
  oe: z.coerce.number(),
});

export type WelcomeBodyDTO = z.infer<typeof welcomeBodyDTO>;
