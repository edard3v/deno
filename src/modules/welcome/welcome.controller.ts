import { MiddlewareHandler } from "hono/types";
import { welcomeService } from "./welcome.service.ts";

export const welcomeController: MiddlewareHandler = async (context) => {
  const msg = await welcomeService();

  context.status(200);
  return context.json({ msg });
};
