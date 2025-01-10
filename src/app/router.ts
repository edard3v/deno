import { Router } from "@oak/oak";
import { welcomeRouter } from "../modules/welcome/welcome.router.ts";

export const router = new Router();

router.use("/", welcomeRouter.routes());
