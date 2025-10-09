import app from "./app.js";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Use default port if .env not found
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ SERVER HAS STARTED AT PORT ${PORT}`);
});
