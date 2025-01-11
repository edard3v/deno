import { Hono } from "hono";
import { welcomeController } from "./welcome.controller.ts";
import { zValidator } from "@hono/zod-validator";
import { WelcomeBodyDTO, welcomeBodyDTO } from "./welcome.dto.ts";

export const welcomeModule = new Hono<{ Variables: Variables }>();

welcomeModule.post(
  "/:id",
  async (context, next) => {
    context.set("author", "edar");
    await next();
  },

  zValidator("json", welcomeBodyDTO),

  async (context, next) => {
    const bodyParsed = context.req.valid("json");
    context.set("body", bodyParsed);
    await next();
  },

  welcomeController
);

type Variables = { author: string; body: WelcomeBodyDTO };
