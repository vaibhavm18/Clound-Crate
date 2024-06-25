import { PgTable, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", {length: 255}).notNull()
})