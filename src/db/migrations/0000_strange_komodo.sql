CREATE TABLE IF NOT EXISTS "booking" (
	"id" serial PRIMARY KEY NOT NULL,
	"accommodation_name" varchar NOT NULL,
	"accommodation_type" varchar NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone_number" varchar NOT NULL,
	"no_of_guests" integer NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"no_of_days" integer NOT NULL,
	"amount" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
