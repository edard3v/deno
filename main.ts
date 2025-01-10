import { app } from "./src/app/app.ts";
import { PORT } from "./src/app/config.ts";

console.log(`app corriendo en http://localhost:${PORT}`);
app.listen({ port: PORT });
