import { Controller } from "../../types.d.ts";
import { EdarErr } from "../errors/Edar.err.ts";

export const errHandler: Controller = async (context, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);

    if (err instanceof EdarErr) {
      context.response.status = err.status;
      context.response.body = { msg: err.msg };
      return;
    }

    context.response.status = 500;
    context.response.body = { msg: "Error interno del servidor" };
  }
};
