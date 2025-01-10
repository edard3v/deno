import z from "zod";

export const welcomeDTO = z.object({
  name: z.string(),
});

export type WelcomeDTO = z.infer<typeof welcomeDTO>;
