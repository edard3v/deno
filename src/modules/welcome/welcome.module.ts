import { Hono } from "hono";
import { welcomeController } from "./welcome.controller.ts";

export const welcome = new Hono();

welcome.use(async (context, next) => {
  context.set("author", "edar");
  await next();
});

welcome.post("/:id", welcomeController);

declare module "hono" {
  interface ContextVariableMap {
    author: string;
  }
}
