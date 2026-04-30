import { buildApp } from "./app.js";
import { env } from "./config/env.js";

async function bootstrap() {
  const server = await buildApp();

  try {
    await server.listen({
      port: env.PORT,
      host: "0.0.0.0",
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

bootstrap();
