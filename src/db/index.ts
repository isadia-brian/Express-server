import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../db/schema/index.ts";
import env from "../lib/env.ts";

const connection = postgres(env.DATABASE_URL);

export const db = drizzle(connection, {
  schema,
  logger: true,
});

export type DB = typeof db;
