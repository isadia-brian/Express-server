// Import the 'express' module
import express, { Request, Response } from "express";
import { db } from "../src/db/index.ts";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send("Welcome to root URL of server");
});

app.get("/hello", (req: Request, res: Response) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello from the other side</h1>");
});

app.get("/about", (req: Request, res: Response) => {
  res.status(200);
  res.send("Welcome to about page url for the server");
});

app.post("/post-route", (req: Request, res: Response) => {
  const { name } = req.body;
  res.send(`Welcome ${name}`);
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await db.query.booking.findMany();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${PORT}`);
});
