import { pgTable, uuid, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const referrals = pgTable("referrals", {
  id: uuid("id").defaultRandom().primaryKey(),

  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),

  dob: varchar("dob", { length: 20 }),

  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 255 }),
 
  lawFirmName: varchar("law_firm_name", { length: 255 }),
  attorneyName: varchar("attorney_name", { length: 255 }).notNull(),
  attorneyEmail: varchar("attorney_email", { length: 255 }).notNull(),
  attorneyPhone: varchar("attorney_phone", { length: 20 }).notNull(),

  complaint: varchar("complaint", { length: 500 }).notNull(),

  clinicLocation: varchar("clinic_location", { length: 100 }),
  appointmentType: varchar("appointment_type", { length: 50 }),

  status: varchar("status", { length: 50 }).default("new"),

  createdAt: timestamp("created_at").defaultNow(),
});