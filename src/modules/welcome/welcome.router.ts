import { Router } from "@oak/oak";
import { welcomeController } from "./welcome.controller.ts";

export const welcomeRouter = new Router();

welcomeRouter.post("/", welcomeController);
