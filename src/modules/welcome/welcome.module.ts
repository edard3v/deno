import { Hono } from "hono";
import { welcomeController } from "./welcome.controller.ts";

export const welcomeModule = new Hono();

welcomeModule.use(async (context, next) => {
  context.set("author", "edar");
  await next();
});

welcomeModule.post("/:id", welcomeController);

declare module "hono" {
  interface ContextVariableMap {
    author: string;
  }
}
