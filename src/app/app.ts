import { Application } from "@oak/oak";
import { router } from "./router.ts";
import { errHandler } from "./err.handler.ts";
import { route404 } from "./route404.handler.ts";

export const app = new Application();

app.use(errHandler);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(route404);
