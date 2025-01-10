import { Middleware } from "@oak/oak";
import { welcomeService } from "./welcome.service.ts";

export const welcomeController: Middleware = async ({ response, request }) => {
  const body = await request.body.json();
  const query = Object.fromEntries(request.url.searchParams.entries());

  console.log(body);
  console.log(query);

  const msg = welcomeService();
  response.body = { msg };
};
