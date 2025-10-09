import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import reservationRoute from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({ path: "./config.env" });
const app = express();

// ✅ Manual CORS headers
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://restaurant-reservation-two-gray.vercel.app",
    "http://localhost:5173"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // ✅ Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRoute);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "HELLO WORLD AGAIN" });
});

dbConnection();
app.use(errorMiddleware);

export default app;
