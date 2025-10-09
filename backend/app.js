import express from "express";
import cors from "cors";

const app = express();

// Allow your frontend domain
app.use(cors({
  origin: "https://restaurant-reservation-two-gray.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

export default app;
