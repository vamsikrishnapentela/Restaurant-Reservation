import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRoute from "./routes/reservationRoute.js";

dotenv.config();

const app = express();

// ✅ FIX: Enable CORS for your frontend domain
app.use(cors({
  origin: ["https://restaurant-reservation-two-gray.vercel.app"], // your frontend deployed URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// ✅ Routes
app.use("/reservation", reservationRoute);

export default app;
