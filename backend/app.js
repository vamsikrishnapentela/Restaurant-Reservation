import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import reservationRoute from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({ path: "./config.env" });

const app = express();

// ✅ FIXED CORS CONFIG
app.use(cors({
  origin: "https://restaurant-reservation-two-gray.vercel.app", // frontend domain
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// ✅ Make sure OPTIONS request is handled
app.options("*", cors({
  origin: "https://restaurant-reservation-two-gray.vercel.app",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRoute);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server running fine ✅" });
});

dbConnection();
app.use(errorMiddleware);

export default app;
