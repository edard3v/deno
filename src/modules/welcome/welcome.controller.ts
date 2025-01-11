import { MiddlewareHandler } from "hono/types";
import { welcomeService } from "./welcome.service.ts";

export const welcomeController: MiddlewareHandler = async (context) => {
  const id = context.req.param("id");
  const age = context.req.query("age");
  const lenguage = context.req.query("lenguage");
  const query = context.req.query();
  const categories = context.req.queries("category");
  const body = await context.req.json();

  const author = context.get("author");
  const bodyParsed = context.get("body");

  const msg = await welcomeService();

  context.status(200);
  return context.json({
    msg,
    id,
    author,
    age,
    lenguage,
    query,
    categories,
    body,
    bodyParsed,
  });
};
