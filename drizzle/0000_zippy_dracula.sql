CREATE TABLE "referrals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"dob" varchar(20),
	"phone" varchar(20),
	"email" varchar(255),
	"attorney_name" varchar(255) NOT NULL,
	"attorney_email" varchar(255) NOT NULL,
	"attorney_phone" varchar(20) NOT NULL,
	"complaint" varchar(500) NOT NULL,
	"clinic_location" varchar(100),
	"appointment_type" varchar(50),
	"status" varchar(50) DEFAULT 'new',
	"created_at" timestamp DEFAULT now()
);
