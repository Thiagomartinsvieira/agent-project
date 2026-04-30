import { z } from "zod";
import dotenv from "dotenv";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().int().min(1).default(3333),
  DATABASE_URL: z.string().min(1).default(""),
  OPENAI_API_KEY: z.string().min(1).default(""),
  OPENAI_MODEL: z.string().min(1).default("gpt-4o-mini"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables: ${JSON.stringify(parsedEnv.error.format())}`,
  );
}

export const env = parsedEnv.data;
