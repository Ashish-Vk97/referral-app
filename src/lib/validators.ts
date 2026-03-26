import { z } from "zod";

export const referralSchema = z.object({
  firstName: z.string()
    .trim()
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be less than 50 characters"),

  lastName: z.string()
    .trim()
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be less than 50 characters"),

  // Better DOB validation
  dob: z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date of birth",
    }),

  // Strong phone validation (digits only)
  phone: z.string()
    .regex(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits"),

  // Optional but validated if present
  email: z.string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")), // allow empty string from forms

  lawFirmName: z.string()
    .trim()
    .min(3, "Law firm name must be at least 3 characters")
    .max(100, "Law firm name must be less than 100 characters"),

  attorneyName: z.string()
    .trim()
    .min(3, "Attorney name must be at least 3 characters")
    .max(100, "Attorney name must be less than 100 characters"),

  attorneyEmail: z.string()
    .email("Please enter a valid attorney email address"),

  attorneyPhone: z.string()
    .regex(/^[0-9]{10,15}$/, "Attorney phone must be 10–15 digits"),

  // Required complaint field
  complaint: z.string()
    .min(1, "Complaint description is required")
    .max(500, "Complaint must be less than 500 characters"),

  clinicLocation: z.enum([
    "Anaheim",
    "Culver City",
    "Downey",
    "El Monte",
    "Long Beach",
    "Los Angeles",
  ]),

  appointmentType: z.enum(["In-Person", "Telemedicine"]),
});

export type ReferralInput = z.infer<typeof referralSchema>;