import { Hono } from "hono";
import { welcomeController } from "./welcome.controller.ts";

export const welcome = new Hono();

welcome.get("/", welcomeController);
