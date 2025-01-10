// import { ZodSchema } from "zod";
// import { Middleware } from "@oak/oak";

// export const verifyDto = ({ body, params, query }: Params) => {
//   return (async ({request,state}, next ) =>{
//     if (body) {

//       const bodyParsed = body.parse(request.body);
//       response.locals = { ...response.locals, body: bodyParsed };
//     }
//     if (params) {
//       const paramsParsed = params.parse(req.params);
//       response.locals = { ...response.locals, params: paramsParsed };
//     }
//     if (query) {
//       const queryParsed = query.parse(req.query);
//       response.locals = { ...response.locals, query: queryParsed };
//     }

//     await next()
//   }) as Middleware
// };

// type Params = {
//   body?: ZodSchema;
//   query?: ZodSchema;
//   params?: ZodSchema;
// };
