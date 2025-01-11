import { ErrorHandler } from "hono/types";
import { EdarErr } from "../errors/Edar.err.ts";

export const errHandler: ErrorHandler = (err, context) => {
  console.error(err);

  if (err instanceof EdarErr) {
    context.status(err.status);
    return context.json({ name: err.name, msg: err.msg });
  }

  context.status(500);
  return context.json({ msg: "Error interno del servidor" });
};
