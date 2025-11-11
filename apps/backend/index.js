import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./utils/dbConnect.js";
import cors from "cors"
app.use(cors())

dotenv.config();
const app = express();
app.use(express.json()); 
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
const port = process.env.PORT || 3000;

app.use("/api/tasks", taskRoutes); // Now this line will work
app.use("/users/userRoutes",userRoutes)
app.use("/users/auth",authRoutes)

const startServer = async () => {
  try {
    await dbConnect(); // Connects to DB first
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      console.log(`Try: http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();