import { Context } from "@oak/oak";
import { welcomeService } from "./welcome.service.ts";

export const welcomeController = ({ response }: Context) => {
  const msg = welcomeService();
  response.body = { msg };
};
