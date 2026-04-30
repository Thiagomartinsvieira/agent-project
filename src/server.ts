import { buildApp } from "./app.js";

async function bootstrap() {
  const server = await buildApp();

  try {
    await server.listen({
      port: 3333,
      host: "0.0.0.0",
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

bootstrap();
