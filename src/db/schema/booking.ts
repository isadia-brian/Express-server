import { serial, timestamp, pgTable, date, integer, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const booking = pgTable("booking", {
  id: serial("id").primaryKey().notNull(),
  accommodationName: varchar("accommodation_name").notNull(),
  accommodationType: varchar("accommodation_type").notNull(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
  phoneNumber: varchar("phone_number").notNull(),
  noOfGuests: integer("no_of_guests").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  noOfDays: integer("no_of_days").notNull(),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

const bookingSchema = createInsertSchema(booking);
export type BookingSchema = z.infer<typeof bookingSchema>;
