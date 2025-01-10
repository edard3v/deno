import { Context } from "@oak/oak";

export const route404 = (context: Context) => {
  context.response.status = 404;
  context.response.body = { message: "Ruta no encontrada" };
};
