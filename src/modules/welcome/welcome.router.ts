import { Router } from "@oak/oak";
import { welcomeController } from "./wecome.controller.ts";

export const welcomeRouter = new Router();

welcomeRouter.post("/", welcomeController);
