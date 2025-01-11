import { Hono } from "hono";
import { errHandler } from "./err.handler.ts";
import { notFoundHandler } from "./notFound.handler.ts";
import { welcome } from "../modules/welcome/welcome.module.ts";

export const app = new Hono();

app.route("/", welcome);

app.notFound(notFoundHandler);
app.onError(errHandler);
