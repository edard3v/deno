import { Context, Next } from "@oak/oak";

export type Controller = (context: Context, next: Next) => void;
